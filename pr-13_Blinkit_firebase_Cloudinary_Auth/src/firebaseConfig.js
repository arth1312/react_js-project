// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl3HXMWftqBAg3DURq15B9YAYUROaMPAM",
  authDomain: "blinkit-21937.firebaseapp.com",
  projectId: "blinkit-21937",
  storageBucket: "blinkit-21937.firebasestorage.app",
  messagingSenderId: "194317604266",
  appId: "1:194317604266:web:5cc22a2b5d58b1f7df47d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);