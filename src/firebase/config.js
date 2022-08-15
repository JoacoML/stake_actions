// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgz9JRvaO6wXFIE0Ui1M51o_1u5pytufU",
  authDomain: "ecommerce-stakeactions.firebaseapp.com",
  projectId: "ecommerce-stakeactions",
  storageBucket: "ecommerce-stakeactions.appspot.com",
  messagingSenderId: "297070407082",
  appId: "1:297070407082:web:a0a46dec6900669c798fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;