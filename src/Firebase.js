// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnELTPH3av5NNbBKhknBhtzBcTPGNpEX0",
  authDomain: "portfolio-3fb12.firebaseapp.com",
  projectId: "portfolio-3fb12",
  storageBucket: "portfolio-3fb12.appspot.com",
  messagingSenderId: "310909712587",
  appId: "1:310909712587:web:88c6d5bea64617558a434e",
  measurementId: "G-80HXZBXY35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);