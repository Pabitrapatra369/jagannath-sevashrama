// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJJriIUnSbAYvChti52LHv-DVxBfqprl0",
  authDomain: "jagannath-sevashrama.firebaseapp.com",
  projectId: "jagannath-sevashrama",
  storageBucket: "jagannath-sevashrama.appspot.com",
  messagingSenderId: "120669355366",
  appId: "1:120669355366:web:bbc868c68563fc499b5ca7",
  measurementId: "G-J3PN1BNHEX",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
