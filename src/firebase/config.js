// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN4feGRPOU9BoqYg0_PTXkgWLrggD_0eY",
  authDomain: "coderhouse-803f7.firebaseapp.com",
  projectId: "coderhouse-803f7",
  storageBucket: "coderhouse-803f7.appspot.com",
  messagingSenderId: "247746094783",
  appId: "1:247746094783:web:cf1f03c4f4c729a8e3c80a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
