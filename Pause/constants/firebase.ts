/* firebase.ts


  References:
  ChatGPT

  Firestore documentation
    Read functions https://firebase.google.com/docs/firestore/query-data/get-data
    Write functions https://firebase.google.com/docs/firestore/manage-data/add-data

*/

// Import the Firebase Web SDK (modular imports)
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'; 
import { doc, collection, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, firestore } from '@/constants/firebaseConfig'; // Import the initialized Firebase app

export const userSignIn = async (email: string, password: string) => {
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
export const userSignOut = async() => {
  await signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Logged out successfully");
  }).catch((error) => {
    // An error happened.
    console.log("Error logging out: ", error);
  });
}

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

export const writeDoc = async (docPath: string, docData: object) => {
  const ref = doc(firestore, docPath);
  await setDoc(ref, docData);
}