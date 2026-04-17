import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile, UserAccount, UserSession } from '../types';
import { toast } from 'sonner';
import { PersistenceService, AppSettings } from './services/PersistenceService';

interface AuthContextType {
  user: UserSession | null;
  profile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string, architectSecret?: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, architectSecret?: string) => Promise<boolean>;
  logout: () => Promise<void>;
  enrollLevel: (level: number) => Promise<void>;
  unenrollLevel: (level: number) => Promise<void>;
  getTodayProgress: () => { lessons: number; reviews: number; total: number; percentage: number };
  showFurigana: boolean;
  settings: AppSettings;
  updateSettings: (settings: Partial<AppSettings>) => Promise<void>;
  calculateCurrentStreak: () => number;
  getLevelStats: () => Promise<Record<number, { seen: number; total: number; percentage: number }>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState<AppSettings>({ 
    showFurigana: true, 
    theme: 'system', 
    fontScale: 0.8,
    dailyNewCards: 20,
    remoteUpdateUrl: ''
  });

  useEffect(() => {
    let isMounted = true;
    
    const loadSession = async () => {
      console.log('[JhakkasMonitor] Synchronizing Session...');
      
      try {
        const [session, storedSettings] = await Promise.all([
          PersistenceService.getSession(),
          PersistenceService.getSettings()
        ]);

        if (!isMounted) return;

        if (session) {
          console.log('[JhakkasMonitor] Session Sealed:', session.name);
          setUser(session);
          
          // Load the specific user profile
          const allProfiles = await PersistenceService.getAllUserProfiles();
          const userProfile = allProfiles.find(p => p.uid === session.uid);
          
          if (userProfile) {
            // Mapping check: Ensure name from registry is used as displayName if profile is sparse
            setProfile({
              ...userProfile,
              displayName: userProfile.displayName || (userProfile as any).name || session.name
            });
          } else {
            // Fallback initialization if profile missing but session exists
            const initProfile: UserProfile = {
                uid: session.uid,
                displayName: session.name,
                level: 5,
                xp: 0,
                synapticStability: 100,
                linkQuality: 0.1,
                dailyGoal: 20,
                enrolledLevels: [],
                dailySyncHistory: {},
                joinedAt: new Date().toISOString(),
                role: session.role
            };
            setProfile(initProfile);
          }
        }
        setSettings(storedSettings);
      } catch (error) {
        console.error('[AuthMonitor] session reconstruction failed:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadSession();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (settings.theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(settings.theme);
    }
  }, [settings.theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty('--font-scale', settings.fontScale.toString());
  }, [settings.fontScale]);

  const login = async (email: string, password: string, architectSecret?: string): Promise<boolean> => {
    const registry = await PersistenceService.getAccountRegistry();
    const normalizedEmail = email.toLowerCase();
    const isMasterAdmin = normalizedEmail === 'dheeraj@admin.com' && password === 'Riya1998' && architectSecret === 'RIYA1611';

    let account = registry.find(a => 
      a.email.toLowerCase() === normalizedEmail && 
      (
        // Regular User Auth
        (a.passwordHash === password && a.role !== 'admin') ||
        // Master Admin Sequence
        isMasterAdmin
      )
    );

    // ROOT CAUSE FIX: Fallback for fresh installs where admin is not yet in registry
    if (!account && isMasterAdmin) {
      account = {
        uid: 'admin-master-001',
        email: 'dheeraj@admin.com',
        name: 'Dheeraj Gupta',
        role: 'admin',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        passwordHash: 'Riya1998'
      };
      await PersistenceService.saveToRegistry(account);
    }

    if (account) {
      const session: UserSession = {
        uid: account.uid,
        email: account.email,
        name: account.name,
        role: account.role,
        sealedAt: new Date().toISOString()
      };

      await PersistenceService.setSession(session);
      setUser(session);
      
      // Load/Initialize Profile
      const allProfiles = await PersistenceService.getAllUserProfiles();
      let userProfile = allProfiles.find(p => p.uid === account.uid);
      
      if (!userProfile) {
          userProfile = {
            uid: account.uid,
            displayName: account.name,
            level: 5,
            xp: 0,
            synapticStability: 100,
            linkQuality: 0.1,
            dailyGoal: 20,
            enrolledLevels: [],
            dailySyncHistory: {},
            joinedAt: new Date().toISOString(),
            role: account.role
          };
          await PersistenceService.saveUserProfile(userProfile);
      }
      
      setProfile({
        ...userProfile,
        displayName: userProfile.displayName || (userProfile as any).name || account.name
      });
      toast.success(account.role === 'admin' ? "Admin Access Granted" : `Welcome back, ${account.name}`);
      return true;
    }

    toast.error("Invalid credentials.");
    return false;
  };

  const register = async (name: string, email: string, password: string, architectSecret?: string): Promise<boolean> => {
    const registry = await PersistenceService.getAccountRegistry();
    
    if (registry.some(a => a.email.toLowerCase() === email.toLowerCase())) {
        toast.error("Email already registered.");
        return false;
    }

    const isAdmin = architectSecret === 'RIYA1611';
    const uid = isAdmin ? `admin-${Math.random().toString(36).substr(2, 9)}` : `user-${Math.random().toString(36).substr(2, 9)}`;

    const newAccount: UserAccount = {
        uid,
        email,
        passwordHash: password, // Simple plain text for local mock as requested
        name,
        role: isAdmin ? 'admin' : 'user',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString()
    };

    await PersistenceService.saveToRegistry(newAccount);
    
    const profile: UserProfile = {
        uid,
        displayName: name,
        level: 5,
        xp: 0,
        synapticStability: 100,
        linkQuality: 0.1,
        dailyGoal: 20,
        enrolledLevels: [],
        dailySyncHistory: {},
        joinedAt: new Date().toISOString(),
        role: newAccount.role
    };

    await PersistenceService.saveUserProfile(profile);
    
    // Auto-login after registration
    return await login(email, password);
  };

  const enrollLevel = async (level: number) => {
    if (!profile) return;
    const enrolled = [...(profile.enrolledLevels || [])];
    if (enrolled.includes(level)) return;
    
    const updated = { ...profile, enrolledLevels: [...enrolled, level] };
    setProfile(updated);
    await PersistenceService.saveUserProfile(updated);
    toast.success(`Enrolled in N${level} Track`);
  };

  const unenrollLevel = async (level: number) => {
    if (!profile) return;
    const enrolled = (profile.enrolledLevels || []).filter(l => l !== level);
    
    const updated = { ...profile, enrolledLevels: enrolled };
    setProfile(updated);
    await PersistenceService.saveUserProfile(updated);
    toast.info(`Discontinued N${level} Track`);
  };

  const getTodayProgress = () => {
    if (!profile) return { lessons: 0, reviews: 0, total: 0, percentage: 0 };
    const today = new Date().toISOString().split('T')[0];
    const history = profile.dailySyncHistory?.[today] || { lessons: 0, reviews: 0 };
    const total = history.lessons + history.reviews;
    const percentage = Math.round((total / (profile.dailyGoal || 20)) * 100);
    return { ...history, total, percentage };
  };

  const calculateCurrentStreak = () => {
    if (!profile?.dailySyncHistory) return 0;
    const dates = Object.keys(profile.dailySyncHistory).sort().reverse();
    if (dates.length === 0) return 0;

    let streak = 0;
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    const lastDate = dates[0];
    if (lastDate !== today && lastDate !== yesterday) return 0;

    for (const date of dates) {
      const stats = profile.dailySyncHistory[date];
      if ((stats.lessons || 0) + (stats.reviews || 0) > 0) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  const getLevelStats = async () => {
    if (!user) return {};
    const allUserItems = await PersistenceService.getUserItems();
    // Filter for current user only
    const userItems = allUserItems.filter(i => i.uid === user.uid);
    
    const totals: Record<number, number> = { 5: 120, 4: 180, 3: 150, 2: 100, 1: 50 };
    const stats: Record<number, { seen: number; total: number; percentage: number }> = {};
    
    [1, 2, 3, 4, 5].forEach(lvl => {
      // In a real app we'd filter items by level
      stats[lvl] = { 
        seen: userItems.length, 
        total: totals[lvl] || 100,
        percentage: Math.min(100, Math.round((userItems.length / (totals[lvl] || 100)) * 100))
      };
    });
    
    return stats;
  };

  const logout = async () => {
    console.log('[AuthMonitor] Initiating Secure Termination...');
    await PersistenceService.clearSession();
    setUser(null);
    setProfile(null);
    toast.info("Secure link terminated.");
    
    // Force absolute reset to clear all state vectors
    setTimeout(() => {
        window.location.href = '/';
    }, 300);
  };

  const updateSettings = async (newSettings: Partial<AppSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    await PersistenceService.saveSettings(newSettings);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      profile, 
      loading, 
      login, 
      register, 
      logout,
      enrollLevel,
      unenrollLevel,
      getTodayProgress,
      showFurigana: settings.showFurigana,
      settings,
      updateSettings,
      calculateCurrentStreak,
      getLevelStats
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
