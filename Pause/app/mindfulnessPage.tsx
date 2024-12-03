/*  mindfulness.tsx

    Screen 2

    Functions: 
        Prompts user with mindfulness question
        Requires user input in TextBox
        Continue button is used to navigate to the next screen
*/

import React, { useCallback, useState  } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import ContinueButton from "../components/ContinueButton";
import Timer, { useTimerContext } from "../components/Timer";

const Mindfulness: React.FC = () => {
  const router = useRouter();
  const { timerEnded, setTimerEnded, setIsTimerVisible, setTimerDuration } = useTimerContext();

  const [timerKey, setTimerKey] = useState(0);
  // Reset timer state when screen is focused
  useFocusEffect(
    useCallback(() => {
      setTimerKey((prevKey) => prevKey + 1);
      setTimerDuration(20); // Reset the global timer duration
      setIsTimerVisible(true); // Ensure the timer is visible
      setTimerEnded(false); // Reset the timerEnded state
    }, [setTimerDuration, setIsTimerVisible, setTimerEnded])
  );

  const handleContinue = () => {
    console.log("User has completed mindfulness exercises.");
    router.push("/grounding"); // Navigate to the next page
  };

  return (
    <View style={styles.container}>
      <Timer key={timerKey} />
      <Text style={styles.header}>Mindfulness Exercises</Text>
      <Text style={styles.subHeader}>
        Read all the exercise instructions before you start.
      </Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 1: Breathing</Text>
          <Text style={styles.exerciseText}>
            Close your eyes and take a deep breath in through your nose.
          </Text>
          <Text style={styles.exerciseText}>
            Hold this breath for 2 seconds and then slowly breathe out.
          </Text>
          <Text style={styles.exerciseText}>
            Let your shoulders and face relax as you breathe out. Repeat this activity two more times.
          </Text>
        </View>

        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 2: Visualization</Text>
          <Text style={styles.exerciseText}>
            Close your eyes and imagine a peaceful scene that makes you happy.
          </Text>
          <Text style={styles.exerciseText}>
            Hold onto this image for as long as you'd like and press continue when ready.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.continueButtonContainer}>
        <ContinueButton onPress={handleContinue} disabled={!timerEnded} />
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
    paddingBottom: 100,
    alignItems: "center",
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
  },
  continueButtonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});

export default Mindfulness;
