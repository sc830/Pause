/* index.tsx

  References:
    Authentication/initializing template from ChatGPT
      const { user, initializing } = useAuth(); // Get user data from context
      if (initializing) return <Text>Loading...</Text>; // Show loading until initialized
      if (!user) {
    
*/

import { Text, View, Button } from "react-native";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';

import StyledButton from '@/components/StyledButton';
import '@/constants/global.css'; // Import global styles

export default function Index() {
    const router = useRouter(); // Hook for navigation
    const { user, initializing } = useAuth(); // Get user data from context

    if (initializing) return <Text>Loading...</Text>; // Show loading until initialized

    if (!user) {
        return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 60,
                  padding: 10,
                }}
              >
                <Text>Looks like you're not logged in. Let's fix that!</Text>
                </View>
                <StyledButton
                    text="Log in"
                    onPress={() => {
                        router.push('/login');
                    }}
                />
            </View>
        );
    }
    else {
      console.log("Current user: ", user.email);
      console.log("UID: ", user.uid);
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
            <StyledButton 
              text="Let's go!"
              onPress={() => router.push('/feelingsWheelPage')} />
        </View>
        )
    }
};
