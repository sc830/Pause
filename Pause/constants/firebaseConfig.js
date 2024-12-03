// For Firebase v9+
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAeYjQTVACESh55WQCeOXB0QPGDUvRCR54",
  authDomain: "pause-a22f0.firebaseapp.com",
  projectId: "pause-a22f0",
  storageBucket: "pause-a22f0.appspot.com",
  messagingSenderId: "696666976683",
  appId: "1:696666976683:web:3cffb1cf8e7bf09f9be2ee",
  measurementId: "G-89Y2X1K77V",
  databaseURL: "https://pause-a22f0.firebaseio.com"
};

  // Initialize Firebase app (this is necessary only once)
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  export { app, auth, firestore, getAnalytics };
