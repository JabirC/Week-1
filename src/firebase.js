import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBcSWlSSx2D8LNN1cSqDNsEUsOYulguGsk",
  authDomain: "week-1-1e2f0.firebaseapp.com",
  projectId: "week-1-1e2f0",
  storageBucket: "week-1-1e2f0.appspot.com",
  messagingSenderId: "947651106296",
  appId: "1:947651106296:web:2fe8278dd86d3c68d9320d",
  measurementId: "G-X57HF3G6JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}