/* index.tsx

  References:
    Authentication/initializing template from ChatGPT
      const { user, initializing } = useAuth(); // Get user data from context
      if (initializing) return <Text>Loading...</Text>; // Show loading until initialized
      if (!user) {
    
*/

import React from 'react';
import { Text, View, Button } from 'react-native'; // Consolidated imports
import { useRouter } from 'expo-router'; // Use the router from Expo Router
import { useAuth } from '@/contexts/AuthContext'; // Import AuthContext
import ContinueButton from '@/components/ContinueButton';
import '@/constants/global.css'; // Import global styles

const Index: React.FC = () => {
  const router = useRouter(); // Hook for navigation
  const { user, initializing } = useAuth(); // Get user data from context

  // Show loading indicator while initializing
  if (initializing) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  // If no user is logged in, show login prompt
  if (!user) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Please Log In</Text>
        <Button
          title="Looks like you aren't logged in. Let's fix that!"
          onPress={() => {
            router.push('/login');
          }}
        />
      </View>
    );
  }


  
  // If user is logged in, show the main content
  else {
    console.log("Current user: ", user.email);
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
  }
};

export default Index;
