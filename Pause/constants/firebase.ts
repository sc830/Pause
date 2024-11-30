// Import the Firebase Web SDK (modular imports)
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { app } from '@/constants/firebaseConfig'; // Import the initialized Firebase app

// Example: Firebase Authentication Functions
// Function to handle email/password sign-in
export const signIn = async (email: string, password: string) => {
  try {
    // Use the getAuth function with the initialized app
    const auth = getAuth(app);  // Get the auth instance
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;  // You can throw or handle the error as needed
  }
};
