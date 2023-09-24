import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyjR8zVWRHGBEjm_PmUvOR3TlgVGHMuqE",
  authDomain: "crwn-db-563e7.firebaseapp.com",
  projectId: "crwn-db-563e7",
  storageBucket: "crwn-db-563e7.appspot.com",
  messagingSenderId: "222569525640",
  appId: "1:222569525640:web:195de652af19a5e25e0a3d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);