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
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
  showFurigana: boolean;
  setShowFurigana: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFurigana, setShowFurigana] = useState(true);

  useEffect(() => {
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
          toast.error("Firebase connection failed. Check your configuration.");
        }
      }
    };
    testConnection();

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

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, logout, showFurigana, setShowFurigana }}>
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
