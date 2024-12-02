/* index.tsx


  References:
    ChatGPT
      Authentication/initializing template
        const { user, initializing } = useAuth(); // Get user data from context
        if (initializing) return <Text>Loading...</Text>; // Show loading until initialized
        if (!user) {
      Fix references to state variables
        onChangeText={(text) => setState((prevState) => ({ ...prevState, email: text }))}
        handleLoginSubmission(state.email, state.password)
    React Native Firebase documentation https://rnfirebase.io/auth/usage#main
    Login Screen example https://alitalhacoban.medium.com/basic-login-screen-with-react-native-c9f7fdcc8dae

    
*/

import React, { useState } from 'react';
import { Text, View } from "react-native";
import { signIn } from '@/constants/firebase'
import { useAuth, AuthProvider } from '@/contexts/AuthContext';

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
                          signIn(state.email, state.password)
                          // add navigation to next page here
                      }}
                  />
                </View>
            </View>
          </AuthProvider>
        );
    }
    else {
      console.log("Current user: ", user.email);
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

