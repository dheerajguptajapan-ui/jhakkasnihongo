import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile } from '../types';
import { toast } from 'sonner';
import { persistence, AppSettings } from './persistence';

interface AuthContextType {
  user: { uid: string; displayName: string; email: string } | null;
  profile: UserProfile | null;
  loading: boolean;
  isMock: boolean;
  signIn: () => Promise<void>;
  mockSignIn: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  showFurigana: boolean;
  settings: AppSettings;
  updateSettings: (settings: Partial<AppSettings>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ uid: string; displayName: string; email: string } | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMock] = useState(true);
  const [settings, setSettings] = useState<AppSettings>(persistence.getSettings());

  useEffect(() => {
    const loadSession = () => {
      const storedProfile = persistence.getUserProfile();
      if (storedProfile) {
        setUser({
          uid: storedProfile.uid,
          displayName: storedProfile.displayName,
          email: 'offline-user@example.com'
        });
        setProfile(storedProfile);
      }
      setLoading(false);
    };

    loadSession();
  }, []);

  // Handle CSS Theme application
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

  const signIn = async () => {
    toast.info("This is an offline app. Please sign in with an ID.");
  };

  const mockSignIn = async (username: string, password: string) => {
    if (username.length > 0 && password.length > 0) {
      const isAdmin = username === 'system_admin dj' && password === 'Riya1611';
      
      const mockUser = {
        uid: isAdmin ? 'admin-system' : `user-${username}`,
        displayName: isAdmin ? 'System Architect' : username.charAt(0).toUpperCase() + username.slice(1),
        email: isAdmin ? 'admin@neural.link' : `${username}@offline.local`
      };
      
      const existingProfile = persistence.getUserProfile();
      const mockProfile: UserProfile = existingProfile || {
        uid: mockUser.uid,
        displayName: mockUser.displayName,
        level: 1,
        xp: 0,
        synapticStability: 100, // Default for new users
        linkQuality: 0.1,       // Default
        joinedAt: new Date().toISOString(),
        role: isAdmin ? 'admin' : 'user'
      };

      // Force admin role if credentials match even if profile exists
      if (isAdmin) mockProfile.role = 'admin';
      
      persistence.saveUserProfile(mockProfile);
      setUser(mockUser);
      setProfile(mockProfile);
      toast.success(isAdmin ? "Neural Admin Link Established" : `Welcome, ${mockProfile.displayName}!`);
      return true;
    }
    toast.error("Please enter a valid ID and password.");
    return false;
  };

  const logout = async () => {
    setUser(null);
    setProfile(null);
    toast.info("Logged out of local session.");
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    persistence.saveSettings(newSettings);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      profile, 
      loading, 
      isMock, 
      signIn, 
      mockSignIn, 
      logout, 
      showFurigana: settings.showFurigana,
      settings,
      updateSettings
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
