/*  grounding.tsx

    Screen 3

    Functions: 
        Prompts user with grounding question
        Requires user input in TextBox
        Continue button is used to navigate to the next screen
*/

import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import TextBox from "@/components/TextBox";
import ContinueButton from "@/components/ContinueButton";

export default function Grounding() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text> Grounding Question</Text>
        <TextBox />
        <ContinueButton />
      </View>
    </TouchableWithoutFeedback>
  );
}

/*  grounding.tsx

    Screen 3

    Functions: 
        Prompts user with grounding questions.
        Requires user input in multiple TextBoxes.
        Continue button is used to navigate to the next screen.
*/
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import TextBox from "../components/TextBox";
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
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Timer initialTime={20} />
        <Text style={styles.header}>Grounding Exercise</Text>

        {/* Render a TextBox for each question */}
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

        {/* Spacer to provide padding for scrolling */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Fixed Continue Button */}
      <View style={styles.continueButtonContainer}>
        <ContinueButton onPress={handleContinue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
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
  spacer: {
    height: 100, // Space at the bottom of the scrollable content
  },
  continueButtonContainer: {
    position: "absolute", // Fixed position
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "#fff", // Match background color to prevent overlap
    paddingVertical: 10,
  },
});

export default Grounding;
