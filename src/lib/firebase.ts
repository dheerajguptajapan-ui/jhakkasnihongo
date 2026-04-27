import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  enableIndexedDbPersistence, 
  collection, 
  doc, 
  setDoc, 
  getDocs,
  getDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "jhakkasnihongo-19129.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "jhakkasnihongo-19129",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "jhakkasnihongo-19129.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Enable offline persistence
// This allows the app to work offline and automatically sync when online.
// It uses IndexedDB under the hood.
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled in one tab at a a time.
    console.warn("Firebase offline persistence: Multiple tabs open.");
  } else if (err.code == 'unimplemented') {
    // The current browser does not support all of the features required to enable persistence
    console.warn("Firebase offline persistence: Browser not supported.");
  }
});

// Helper functions for easy sync
export const syncToFirestore = async (collectionName: string, docId: string, data: any) => {
  try {
    const docRef = doc(db, collectionName, docId);
    // Merge true ensures we don't overwrite other fields accidentally
    await setDoc(docRef, { ...data, lastSyncedAt: new Date().toISOString() }, { merge: true });
    console.log(`[Firebase] Successfully synced ${collectionName}/${docId}`);
  } catch (error) {
    console.error(`[Firebase] Failed to sync ${collectionName}/${docId}`, error);
  }
};

export const fetchAllFromFirestore = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs: any[] = [];
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    return docs;
  } catch (error) {
    console.error(`[Firebase] Failed to fetch collection ${collectionName}`, error);
    return [];
  }
};
