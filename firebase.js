// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7MQwPCknZg2VVK9hmYMmqiU2280Urmlw",
  authDomain: "pantry-inventory-tracker-7148c.firebaseapp.com",
  projectId: "pantry-inventory-tracker-7148c",
  storageBucket: "pantry-inventory-tracker-7148c.appspot.com",
  messagingSenderId: "578174102888",
  appId: "1:578174102888:web:2badf35a4e8a5652e87add",
  measurementId: "G-3Y576CF42S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
