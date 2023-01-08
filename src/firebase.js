/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { getDatabase } from "firebase/database";
 
const firebaseConfig = {
  apiKey: "AIzaSyC8OIIAsOK1wioWP4P6yPVPsgSP36VLS9o",
  authDomain: "myhomeddel.firebaseapp.com",
  projectId: "myhomeddel",
  storageBucket: "myhomeddel.appspot.com",
  messagingSenderId: "796518970216",
  appId: "1:796518970216:web:23c61c3b2653eaad03dcdd",
  measurementId: "G-3CYHFF5EL5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

export const provider = new GoogleAuthProvider();

 
export const database = getDatabase(app);