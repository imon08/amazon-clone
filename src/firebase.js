import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKSjsmX-9Buo21x_--bVJ5_jBxr9hptrY",
  authDomain: "challenge-8b5c0.firebaseapp.com",
  projectId: "challenge-8b5c0",
  storageBucket: "challenge-8b5c0.appspot.com",
  messagingSenderId: "133271271323",
  appId: "1:133271271323:web:c2ff8ae615b0d370f5533e",
  measurementId: "G-063J33VYJ3",
};

const firebaseApp = initializeApp(firebaseConfig);

const db =  getFirestore(firebaseApp)
const auth = getAuth();

export { db, auth };
