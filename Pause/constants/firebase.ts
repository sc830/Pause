

// Import the Firebase Web SDK (modular imports)
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { collection, getDoc, doc, getDocs } from "firebase/firestore";
import { auth, firestore } from '@/constants/firebaseConfig'; // Import the initialized Firebase app

// Example: Firebase Authentication Functions
// Function to handle email/password sign-in
export const signIn = async (email: string, password: string) => {
  try {
    // Use the getAuth function with the initialized app
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;  // You can throw or handle the error as needed
  }
};


export const fetchDoc = async (docPath: string) => {
  try {
    const ref = doc(firestore, docPath);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      console.log("Successfully retrieved document ", docPath, "\n", snap.data());
      return snap.data();
    } else {
      console.log("Document ", docPath, " not found in Firestore.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return error;
  }
}

export const fetchCollection = async (collPath: string) => {
  try {
    const ref = collection(firestore, collPath);
    const snap = await getDocs(ref);

    if (!snap.empty) {
      // Extract and return data from the snapshot
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Successfully retrieved collection ", collPath);
    } else {
      console.log("Collection ", collPath, " not found in Firestore.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return error;
  }
}
