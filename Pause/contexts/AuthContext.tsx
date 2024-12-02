import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, setPersistence, browserLocalPersistence, browserSessionPersistence  } from 'firebase/auth';
import { auth } from '@/constants/firebaseConfig'; // Import the shared auth instance

interface AuthContextProps {
    user: any | null; // Adjust the type as needed (e.g., User | null)
    initializing: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined); // Default is undefined

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any | null>(null); // Store user data
    const [initializing, setInitializing] = useState<boolean>(true); // Handle loading state

    // Function to handle state change in auth
    function onAuthStateChangedHandler(user: any) {
        setUser(user); // Set user when auth state changes
        if (initializing) setInitializing(false); // Stop initializing once state is set
    }

    useEffect(() => {
        setPersistence(auth, browserSessionPersistence);
        const subscriber = onAuthStateChanged(auth, onAuthStateChangedHandler); // Listen for auth state changes
        return () => subscriber(); // Unsubscribe when the component is unmounted
    }, []);

    if (initializing) return null; // Render nothing while initializing

    return (
        <AuthContext.Provider value={{ user, initializing }}>
            {children} {/* Render children with user state */}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
