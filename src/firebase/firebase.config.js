// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsi_30bLWspDzdmoFiQkDJ5Psq6LwcSJ8",
  authDomain: "ema-jhonn-with-firebase-auth.firebaseapp.com",
  projectId: "ema-jhonn-with-firebase-auth",
  storageBucket: "ema-jhonn-with-firebase-auth.appspot.com",
  messagingSenderId: "972816891706",
  appId: "1:972816891706:web:0905781e055daa1d2b5a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;