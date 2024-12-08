/*  journalPage.tsx

    Screen 4

    Functions: 
        Prompts user to write a journal entry.
        Requires user input in TextBox.
        Continue button is used to navigate to the next screen (logsPage).
*/

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import TextBox from "../components/TextBox";
import ContinueButton from "../components/ContinueButton";
import Colors from '@/constants/Colors';
import Values from '@/constants/Values';

const JournalPage: React.FC = () => {
  const router = useRouter(); // Initialize router for navigation

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>New Journal Entry</Text>

        {/* TextBox Component */}
        <TextBox
          boxHeight={200} // Adjust height to fit your layout
          boxWidth={800} // Dynamic width as percentage
          color={Colors.green}
        />
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.continueButtonContainer}>
        <ContinueButton onPress={() => router.push("/logsPage")} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    backgroundColor: Colors.blue,
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 80, // Ensures the content doesn't overlap the button
  },
  header: {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  headerContainer: {
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  continueButtonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  
  },
});

export default JournalPage;
