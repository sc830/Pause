import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput } from "react-native";
import ContinueButton from "@/components/ContinueButton"; // Assuming you have a reusable ContinueButton component

export default function Grounding() {
  const groundingQuestions = [
    "Can you name five things you can see right now?",
    "What are four things you can touch?",
    "Can you hear three distinct sounds?",
    "What is one smell you can detect?",
    "Can you taste anything in your mouth?",
  ];

  const [responses, setResponses] = useState<string[]>(
    Array(groundingQuestions.length).fill("") // Initialize an empty string for each question
  );

  const handleResponseChange = (text: string, index: number) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = text;
    setResponses(updatedResponses);
  };

  const handleContinue = () => {
    console.log("User Responses:", responses); // Log or handle responses
    // Navigate to the next page here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Grounding Questions</Text>
        {groundingQuestions.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>{question}</Text>
            <TextInput
              style={styles.textBox}
              value={responses[index]}
              onChangeText={(text) => handleResponseChange(text, index)}
              placeholder="Type your response here"
              multiline
              scrollEnabled // Enable scrolling for long text
            />
          </View>
        ))}
        <ContinueButton onPress={handleContinue} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  questionContainer: {
    marginBottom: 20,
    width: "100%",
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "left",
    lineHeight: 25,
  },
  textBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    minHeight: 100, // Longer height for text input
    width: "80%", // Narrower text box
    textAlignVertical: "top", // Align text at the top
  },
});

export default Grounding;
