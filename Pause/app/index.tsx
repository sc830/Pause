/* index.tsx

  References:
    Authentication/initializing template from ChatGPT
      const { user, initializing } = useAuth(); // Get user data from context
      if (initializing) return <Text>Loading...</Text>; // Show loading until initialized
      if (!user) {
    
*/

import { Text, View, Button,StyleSheet } from "react-native";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import StyledButton from '@/components/StyledButton';
import MenuButton from "@/components/MenuButton";
import SettingsButton from "@/components/SettingsButton";
import JournalButton from "@/components/JournalButton";
import MonthlyProgressButton from "@/components/MonthlyProgressButton";

export default function Index() {
    const router = useRouter(); // Hook for navigation
    const { user, initializing } = useAuth(); // Get user data from context
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown visibility
  };

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
                  <MenuButton style={styles.menuButton} onPress={toggleDropdown} />

      {/* Dropdown Menu */}
      {showDropdown && (
        <View style={styles.dropdown}>
          <SettingsButton
            onPress={() => router.push("/settingsPage")}
            style={styles.dropdownButton}
          />
          <JournalButton
            onPress={() => router.push("/journalPage")}
            style={styles.dropdownButton}
          />
          <MonthlyProgressButton
            onPress={() => console.log("Monthly Progress Pressed")}
            style={styles.dropdownButton}
          />
        </View>
      )}
            <Text>Welcome to Pause. Let's get started!</Text>
            <StyledButton 
              text="Let's go!"
              onPress={() => router.push('/feelingsWheelPage')} />
        </View>
        )
    }
};

const styles = StyleSheet.create({
  menuButton: {
    position: "absolute",
    top: -1,
    left: 4,
    zIndex: 9,
  },
  dropdown: {
    position: "absolute",
    top: 59,
    left: 4,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 7,
    shadowColor: "#037777777777",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: -1.25,
    shadowRadius: 2.84,
    elevation: 4,
    zIndex: 9,
  },
  dropdownButton: {
    marginVertical: 4,
   
  },
} );
