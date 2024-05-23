// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiomSMvAsDz2SFo_kIkwHWauzrtU-OBI4",
  authDomain: "location-82f7d.firebaseapp.com",
  projectId: "location-82f7d",
  storageBucket: "location-82f7d.appspot.com",
  messagingSenderId: "999432001953",
  appId: "1:999432001953:web:acb64766edd9d63e0813e0",
  measurementId: "G-8XYP2K32E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);