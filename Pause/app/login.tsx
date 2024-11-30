/* index.tsx


  References:
    Authentication/initializing template from ChatGPT
      const { user, initializing } = useAuth(); // Get user data from context
      if (initializing) return <Text>Loading...</Text>; // Show loading until initialized
      if (!user) {
    React Native Firebase documentation https://rnfirebase.io/auth/usage#main

    onChangeText={(text) => setState((prevState) => ({ ...prevState, email: text }))}
    
    handleLoginSubmission(state.email, state.password)

    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User signed in successfully!');
    })
    .catch((error) => {
      console.error('Error signing in:', error);
    });
    
*/

import React, { useState } from 'react';
import { Text, View } from "react-native";
import { useAuth, AuthProvider } from '@/contexts/AuthContext';

import auth from '@react-native-firebase/auth';

// constants
import reusedStyles from '@/constants/reusedStyles';

// components
import StyledButton from '@/components/StyledButton';
import TextBox from '@/components/TextBox';

import '@/constants/global.css';

export default function Index() {

    const [state,setState] = useState({
      email: '',
      password: '',
    })

    const { user, initializing } = useAuth(); // Get user data from context

    if (initializing) return <Text>Loading...</Text>; // Show loading until initialized

    if (!user) {

        return (
          <AuthProvider>
            <View>
                <Text>Please Log In</Text>

                <TextBox  text= "Email"
                  onChangeText={(text) => setState((prevState) => ({ ...prevState, email: text }))}
                />

                <TextBox  text= "Password"  
                  secureTextEntry
                  onChangeText={(text) => setState((prevState) => ({ ...prevState, password: text }))}
                />

                <StyledButton
                    text="Login"
                    buttonHeight={200}
                    buttonWidth={400}
                    onPress={() => {
                        handleLoginSubmission(state.email, state.password)
                    }}
                />
            </View>
          </AuthProvider>
        );
    }
    else {
        return (
          <AuthProvider>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                    <Text>Edit app/index.tsx to edit this screen.</Text>

            </View>
          </AuthProvider>
        )
    }
};

function handleLoginSubmission(email:string, password:string) {
  auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User signed in successfully!');
  })
  .catch((error) => {
    console.error('Error signing in:', error);
  });
}
