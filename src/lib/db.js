import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1gIB-hu2xnlpkLfe30JkSyJDUuJh8REo",
  authDomain: "ttrpg-a345d.firebaseapp.com",
  projectId: "ttrpg-a345d",
  storageBucket: "ttrpg-a345d.appspot.com",
  messagingSenderId: "452950240098",
  appId: "1:452950240098:web:711c7b17b1db3a6afcda3b",
  measurementId: "G-XKPNVK33QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()