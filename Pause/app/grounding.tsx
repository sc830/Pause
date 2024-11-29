/*  grounding.tsx

    Screen 3

    Functions: 
        Prompts user with grounding questions.
        Requires user input in multiple TextBoxes.
        Continue button is used to navigate to the next screen.
*/

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextBox from '../components/TextBox';
import ContinueButton from '../components/ContinueButton';

const Grounding: React.FC = () => {
  const groundingQuestions = [
    'Can you name five things you can see right now?',
    'What are four things you can touch?',
    'Can you hear three distinct sounds?',
    'What is one smell you can detect?',
    'Can you taste anything in your mouth?',
  ];

  // State to hold user responses for each question
  const [responses, setResponses] = useState<string[]>(
    Array(groundingQuestions.length).fill('') // Initialize empty responses
  );

  // Function to handle response changes
  const handleResponseChange = (text: string, index: number) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = text;
    setResponses(updatedResponses);
  };

  // Handle Continue button press
  const handleContinue = () => {
    console.log('User Responses:', responses); // Log all responses
    // Add navigation logic here if needed
  };

  return (
    <View style={styles.container}>
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

      {/* Continue Button */}
      <ContinueButton onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 25,
  },
});

export default Grounding;
