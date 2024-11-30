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
