import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CLIENT as string
);
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const firestore = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);

export { firestore, firebaseAuth, firebaseStorage };
