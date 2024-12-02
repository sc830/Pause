/*  mindfulness.tsx

    Screen 2

    Functions: 
        Prompts user with mindfulness question
        Requires user input in TextBox
        Continue button is used to navigate to the next screen
*/

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import ContinueButton from "../components/ContinueButton";
import Timer from "../components/Timer"; // Import Timer component

const Mindfulness: React.FC = () => {
  const router = useRouter(); // Hook for navigation

  const handleContinue = () => {
    console.log("User has completed mindfulness exercises."); // Log user action
    router.push("/grounding"); // Navigate to the grounding page
  };

  return (
    <View style={styles.container}>
      <Timer initialTime={20} /> {/* Add Timer at the top */}
      <Text style={styles.header}>Mindfulness Exercises</Text>
      <Text style={styles.subHeader}>
        Read all the exercise instructions before you start.
      </Text>


      {/* Scrollable container for exercises */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 1: Breathing</Text>
          <Text style={styles.exerciseText}>
            Close your eyes and take a deep breath in through your nose.
          </Text>
          <Text style={styles.exerciseText}>
            Fill your lungs with the air and let your belly push out as you inhale.
          </Text>
          <Text style={styles.exerciseText}>
            Hold this breath for 2 seconds and then slowly breathe the air out through your mouth, allowing your tummy to deflate.
          </Text>
          <Text style={styles.exerciseText}>
            Let your shoulders and face relax as you breathe out.
          </Text>
          <Text style={styles.exerciseText}>
            Repeat this activity two more times and then move to exercise two.
          </Text>
        </View>

        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 2: Visualization</Text>
          <Text style={styles.exerciseText}>
            Close your eyes and create a mental picture of a peaceful scene that makes you happy.
          </Text>
          <Text style={styles.exerciseText}>
            This could be a visualization of a place in nature or even a person or animal.
          </Text>
          <Text style={styles.exerciseText}>
            Be specific in your visualization.
          </Text>
          <Text style={styles.exerciseText}>
            Hold onto this image for as long as you'd like to and then press continue when you are ready to proceed through the application.
          </Text>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.continueButtonContainer}>
        <ContinueButton onPress={handleContinue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollContainer: {
    paddingBottom: 100, // Space for the fixed Continue button
  },
  exerciseContainer: {
    marginBottom: 30,
    marginTop: 50,
    alignItems: "center",
  },
  exerciseTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  exerciseText: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 10,
    marginBottom: 10, // Space between sentences
  },
  continueButtonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});

export default Mindfulness;
