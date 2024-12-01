/* index.tsx


  References:
    Authentication/initializing template from ChatGPT
      const { user, initializing } = useAuth(); // Get user data from context
      if (initializing) return <Text>Loading...</Text>; // Show loading until initialized
      if (!user) {
    
*/

import { Text, View, Button } from "react-native";
import { useAuth } from '@/contexts/AuthContext';

import ContinueButton from '@/components/ContinueButton';
import '@/constants/global.css';
import React from 'react';
import { Text, View } from 'react-native';
import { useRouter } from 'expo-router'; // Use the router from Expo Router
import ContinueButton from '../components/ContinueButton';

export default function Index() {

    const { user, initializing } = useAuth(); // Get user data from context

    if (initializing) return <Text>Loading...</Text>; // Show loading until initialized

    if (!user) {
        return (
            <View>
                <Text>Please Log In</Text>
                <Button
                    title="Login with Email"
                    onPress={() => {
                        // Implement login logic, e.g., navigate to a login screen or show login form
                    }}
                />
            </View>
        );
    }
    else {
        return (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                    <Text>Edit app/index.tsx to edit this screen.</Text>
                    <ContinueButton/>
            </View>
        )
    }
};
const Index: React.FC = () => {
  const router = useRouter(); // Hook for navigation

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome to Pause. Let's get started!</Text>
      <ContinueButton onPress={() => router.push('/feelingsWheelPage')} />
    </View>
  );
};

export default Index;
