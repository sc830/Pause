/*  grounding.tsx

    Screen 3

    Functions: 
        - Prompts user with grounding questions.
        - Requires user input in multiple TextBoxes.
        - Continue button is used to navigate to the next screen.
*/

import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import TextBox from "../components/TextBox";
import ContinueButton from "../components/ContinueButton";
import Timer, { useTimerContext } from "../components/Timer";
import Colors from '@/constants/Colors';
import Values from '@/constants/Values';

const Grounding: React.FC = () => {
  const router = useRouter();
  const { timerEnded, setTimerEnded, setIsTimerVisible, timerDuration } = useTimerContext();

  const [timerKey, setTimerKey] = useState(0);

  // Reset timer state when screen is focused
  useFocusEffect(
    useCallback(() => {
      setTimerKey((prevKey) => prevKey + 1);
      setIsTimerVisible(true); // Ensure the timer is visible
      setTimerEnded(false); // Reset the timerEnded state
    }, [setIsTimerVisible, setTimerEnded])
  );

  const groundingQuestions = [
    "What is one thing that you can see in the space around you? Describe it.",
    "Choose a nearby object. What would its texture feel like against your skin?",
    "What can you hear happening around you?"
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
    console.log(`Timer duration was: ${timerDuration}s`); // Log timer duration for debugging
    router.push("/gratitude"); // Navigate to the Gratitude page
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Timer key={timerKey} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Grounding Exercise</Text>
      </View>

      {/* Scrollable container for questions */}
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.scrollView} 
      contentContainerStyle={styles.scrollContent}>
        {groundingQuestions.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>{question}</Text>
            <TextBox
              boxHeight={20} // Adjusted height
              boxWidth={600} // Adjusted width
              color={Colors.green}
              value={responses[index]} // Bind value to the corresponding response
              onChangeText={(text) => handleResponseChange(text, index)} // Update response
            />
          </View>
        ))}
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.continueButtonContainer}>
        <ContinueButton onPress={handleContinue} disabled={!timerEnded} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  headerContainer: {
    fontSize: 40,
    borderRadius:Values.borderRadius, 
    borderColor:Colors.green, 
    borderWidth:0, 
    backgroundColor: Colors.green,
    padding:20,
    width: 2400,
    marginTop: -5,
    textAlign: "center",
    alignSelf: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: 600,
    textAlign: "center",
    alignSelf: 'center',
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
    marginTop: 20,
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 25,
  },
  continueButtonContainer: {
    backgroundColor: Colors.blue,
    marginTop: 0,
    marginBottom: 10,
    paddingTop: 60,
    paddingBottom: 20,
    alignSelf: "center",
  },
});

export default Grounding;
