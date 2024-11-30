// from ChatGPT

import React, { createContext, useContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth'; // Import from @react-native-firebase

interface AuthContextProps {
    user: any | null; // Adjust the type as needed (e.g., User | null)
    initializing: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined); // Default is undefined

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any | null>(null); // Store user data
    const [initializing, setInitializing] = useState<boolean>(true); // Handle loading state

    // Function to handle state change in auth
    function onAuthStateChanged(user: any) {
        setUser(user); // Set user when auth state changes
        if (initializing) setInitializing(false); // Stop initializing once state is set
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged); // Listen for auth state changes
        return subscriber; // Unsubscribe when the component is unmounted
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
