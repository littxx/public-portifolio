// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPMK-CKGQ71KcLdhmEJaRI8_5ie8sbimY",
  authDomain: "eden-tech-607c8.firebaseapp.com",
  projectId: "eden-tech-607c8",
  storageBucket: "eden-tech-607c8.appspot.com",
  messagingSenderId: "931535847576",
  appId: "1:931535847576:web:bea450c5dc090c507590ed",
  measurementId: "G-Y7BGHBXQYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
