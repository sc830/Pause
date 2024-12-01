/*  mindfulness.tsx

    Screen 2

    Functions: 
        Prompts user with mindfulness question
        Requires user input in TextBox
        Continue button is used to navigate to the next screen
*/

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import TextBox from "../components/TextBox";
import ContinueButton from "../components/ContinueButton";

const Mindfulness: React.FC = () => {
  const router = useRouter(); // Hook for navigation

  const mindfulnessQuestions = ["Question 1", "Question 2"];

  // State to hold user responses for each question
  const [responses, setResponses] = useState<string[]>(
    Array(mindfulnessQuestions.length).fill("") // Initialize empty responses
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
    router.push("/grounding"); // Navigate to the grounding page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mindfulness Exercise</Text>

      {/* Render a TextBox for each question */}
      {mindfulnessQuestions.map((question, index) => (
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

      {/* Continue Button */}
      <ContinueButton onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Aligns content at the top
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40, // Adds space from the top of the screen
    textAlign: "center",
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
});

export default Mindfulness;
