// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjCUu_C87maYoJcxhHgAtGgvdTPLeVCSM",
  authDomain: "stake-actions.firebaseapp.com",
  projectId: "stake-actions",
  storageBucket: "stake-actions.appspot.com",
  messagingSenderId: "256301832252",
  appId: "1:256301832252:web:ee8615d2964fd5dc0f8b39",
  measurementId: "G-6H18D3QKJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);