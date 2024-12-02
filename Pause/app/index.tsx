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

import ContinueButton from '@/components/ContinueButton';
import '@/constants/global.css';

export default function Index() {
    const router = useRouter(); // Hook for navigation
    const { user, initializing } = useAuth(); // Get user data from context

    if (initializing) return <Text>Loading...</Text>; // Show loading until initialized

    if (!user) {
        return (
            <View>
                <Text>Looks like you're not logged in. Let's fix that!</Text>
                <Button
                    title="Let's go"
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
            <ContinueButton onPress={() => router.push('/')} />
        </View>
        )
    }
};
