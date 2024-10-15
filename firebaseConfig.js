// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Firestore
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAeYjQTVACESh55WQCeOXB0QPGDUvRCR54",
  authDomain: "pause-a22f0.firebaseapp.com",
  projectId: "pause-a22f0",
  storageBucket: "pause-a22f0.appspot.com",
  messagingSenderId: "696666976683",
  appId: "1:696666976683:web:3cffb1cf8e7bf09f9be2ee",
  measurementId: "G-89Y2X1K77V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize authorization
const auth = getAuth(app);
// Initialize Firestore database
const db = getFirestore(app);

// export for use in other files
export { app, db, auth, analytics };
