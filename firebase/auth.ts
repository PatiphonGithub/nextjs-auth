import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "@/firebase/config";

export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
}

const googleProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
  return signInWithPopup(firebaseAuth, googleProvider);
}
