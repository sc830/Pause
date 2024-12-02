/* index.tsx


  References:
    Authentication/initializing template from ChatGPT
      const { user, initializing } = useAuth(); // Get user data from context
      if (initializing) return <Text>Loading...</Text>; // Show loading until initialized
      if (!user) {
    React Native Firebase documentation https://rnfirebase.io/auth/usage#main

    onChangeText={(text) => setState((prevState) => ({ ...prevState, email: text }))}
    
    handleLoginSubmission(state.email, state.password)

    
*/

import React, { useState } from 'react';
import { Text, View } from "react-native";
import { useRouter } from 'expo-router';
import { signIn } from '@/constants/firebase'
import { useAuth, AuthProvider } from '@/contexts/AuthContext';

// constants
import reusedStyles from '@/constants/reusedStyles';

// components
import StyledButton from '@/components/StyledButton';
import TextBox from '@/components/TextBox';

import '@/constants/global.css';

export default function Login() {

    const [state,setState] = useState({
      email: '',
      password: '',
    })

    const router = useRouter();
    const { user, initializing } = useAuth(); // Get user data from context

    if (initializing) return <Text>Loading...</Text>; // Show loading until initialized

    if (!user) {

        return (
          <AuthProvider>
            <View>
                <Text>Please Log In</Text>

                  <View style={{margin:10}}>
                    <TextBox  text= "Email"
                      onChangeText={(text) => setState((prevState) => ({ ...prevState, email: text }))}
                    />
                  </View>
                  <View style={{margin:10}}>
                    <TextBox  text= "Password"  
                      secure={true}
                      onChangeText={(text) => setState((prevState) => ({ ...prevState, password: text }))}
                    />
                  </View>

                <View>
                  <StyledButton
                      text="Login"
                      buttonHeight={80}
                      buttonWidth={600}
                      onPress={() => {
                          handleLogin(state.email, state.password, router);
                      }}
                  />
                </View>
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
                    <Text>Hey, you logged in! Good for you.</Text>

            </View>
          </AuthProvider>
        )
    }
};

const handleLogin = async (email: string, pass: string, router: any) => {
  await signIn(email, pass);
  router.push('/');
}

