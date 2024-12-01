/*  grounding.tsx

    Screen 3

    Functions: 
        - Prompts user with grounding questions.
        - Requires user input in multiple TextBoxes.
        - Continue button is used to navigate to the next screen.
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import TextBox from "../components/TextBox"; // Single import for TextBox
import ContinueButton from "../components/ContinueButton";
import Timer from "@/components/Timer";

const Grounding: React.FC = () => {
  const router = useRouter(); // Hook for navigation

  const groundingQuestions = [
    "Can you name five things you can see right now?",
    "What are four things you can touch?",
    "Can you hear three distinct sounds?",
    "What is one smell you can detect?",
    "Can you taste anything in your mouth?",
  ];

  // State to hold user responses for each question
  const [responses, setResponses] = useState<string[]>(
    Array(groundingQuestions.length).fill("") // Initialize empty responses
  );

  // Function to handle response changes
  const handleResponseChange = (text: string, index: number) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = text;
    setResponses(updatedResponses);
  };

  // Handle Continue button press
  const handleContinue = () => {
    console.log("User Responses:", responses); // Log all responses
    router.push("/gratitude"); // Navigate to the Gratitude page
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Timer initialTime={20} />
      <Text style={styles.header}>Grounding Exercise</Text>

      {/* Scrollable container for questions */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {groundingQuestions.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>{question}</Text>
            <TextBox
              boxHeight={20} // Adjusted height
              boxWidth={500} // Adjusted width
              color="#f8f9fa" // Light background color
              value={responses[index]} // Bind value to the corresponding response
              onChangeText={(text) => handleResponseChange(text, index)} // Update response
            />
          </View>
        ))}
      </ScrollView>

      {/* Fixed Continue Button */}
      <View style={styles.continueButtonContainer}>
        <ContinueButton onPress={handleContinue} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // To avoid overlap with the fixed button
    alignItems: "center",
    paddingHorizontal: 20,
  },
  questionContainer: {
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 25,
  },
  continueButtonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default Grounding;
