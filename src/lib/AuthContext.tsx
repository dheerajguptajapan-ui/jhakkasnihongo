import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot, getDocFromServer } from 'firebase/firestore';
import { UserProfile } from '../types';
import { toast } from 'sonner';
import { handleFirestoreError, OperationType } from './errorHandlers';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isMock: boolean;
  signIn: () => Promise<void>;
  mockSignIn: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  showFurigana: boolean;
  setShowFurigana: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMock, setIsMock] = useState(false);
  const [showFurigana, setShowFurigana] = useState(true);

  useEffect(() => {
    const testConnection = async () => {
      if (localStorage.getItem('jhakkas_mock_user')) return; // Skip if we have a mock session
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
          // Only show error toast if not in a mock session
          if (!localStorage.getItem('jhakkas_mock_user')) {
            toast.error("Firebase connection failed. Check your configuration.");
          }
        }
      }
    };
    testConnection();

    const checkMockUser = () => {
      const stored = localStorage.getItem('jhakkas_mock_user');
      if (stored) {
        const mockData = JSON.parse(stored);
        setUser(mockData.user);
        setProfile(mockData.profile);
        setIsMock(true);
        setLoading(false);
        return true;
      }
      return false;
    };

    if (checkMockUser()) return;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        try {
          const docSnap = await getDoc(userDoc);
          
          if (!docSnap.exists()) {
            const newProfile: UserProfile = {
              uid: user.uid,
              displayName: user.displayName || 'User',
              level: 1,
              xp: 0,
              joinedAt: new Date().toISOString(),
              role: user.email === 'dheerajguptajapan@gmail.com' ? 'admin' : 'user'
            };
            await setDoc(userDoc, newProfile);
            setProfile(newProfile);
          } else {
            const existingProfile = docSnap.data() as UserProfile;
            // Force admin role if email matches
            if (user.email === 'dheerajguptajapan@gmail.com' && existingProfile.role !== 'admin') {
              existingProfile.role = 'admin';
              await setDoc(userDoc, existingProfile, { merge: true });
            }
            
            // Listen for profile changes
            onSnapshot(userDoc, (snapshot) => {
              if (snapshot.exists()) {
                setProfile(snapshot.data() as UserProfile);
              }
            }, (error) => {
              handleFirestoreError(error, OperationType.GET, `users/${user.uid}`, user);
            });
          }
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `users/${user.uid}`, user);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Signed in successfully!");
    } catch (error: any) {
      console.error("Sign in error:", error);
      toast.error(`Sign in failed: ${error.message}`);
    }
  };

  const mockSignIn = async (username: string, password: string) => {
    if (username === 'user' && password === 'user123') {
      const mockUser = {
        uid: 'mock-user-123',
        displayName: 'Demo User',
        email: 'user@example.com'
      };
      const mockProfile: UserProfile = {
        uid: mockUser.uid,
        displayName: mockUser.displayName,
        level: 1,
        xp: 120,
        joinedAt: new Date().toISOString(),
        role: 'user'
      };
      
      localStorage.setItem('jhakkas_mock_user', JSON.stringify({ user: mockUser, profile: mockProfile }));
      setUser(mockUser as any);
      setProfile(mockProfile);
      setIsMock(true);
      toast.success("Logged in with Mock credentials!");
      return true;
    }
    toast.error("Invalid credentials.");
    return false;
  };

  const logout = async () => {
    localStorage.removeItem('jhakkas_mock_user');
    await signOut(auth);
    setUser(null);
    setProfile(null);
    setIsMock(false);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, isMock, signIn, mockSignIn, logout, showFurigana, setShowFurigana }}>
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
