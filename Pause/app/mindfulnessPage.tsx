/*  mindfulness.tsx

    Screen 2

    Functions: 
        Prompts user with mindfulness question
        Continue button is used to navigate to the next screen
*/

import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import ContinueButton from "../components/ContinueButton";
import Timer, { useTimerContext } from "@/components/Timer"; // Import Timer component and context
import Colors from '@/constants/Colors';
import Values from '@/constants/Values';

const Mindfulness: React.FC = () => {
  const router = useRouter();
  const { timerEnded, setTimerEnded, setIsTimerVisible, timerDuration } = useTimerContext();

  const [timerKey, setTimerKey] = useState(0);


  const handleContinue = () => {
    console.log("User has completed mindfulness exercises.");
    console.log(`Timer duration was: ${timerDuration}s`); // Log the timer duration for debugging
    router.push("/grounding"); // Navigate to the next page
  };

  return (
    <View style={[styles.container, {backgroundColor:Colors.blue}]}>
      <Timer key={timerKey}/> {/* Add Timer at the top */}
      <View style={styles.headerContainer}>
          <Text style={styles.header}>Mindfulness Exercises</Text>
          <Text style={styles.subHeader}>
            Be sure to read the exercise's instructions before you start.
          </Text>
      </View>

      {/* Scrollable container for exercises */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContainer, {backgroundColor:Colors.blue}]}
      >
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 1: Breathing</Text>
          <Text style={styles.exerciseText}>
            Close your eyes and take a deep breath.
          </Text>
          <Text style={styles.exerciseText}>
            Let your belly expand as you inhale.
          </Text>
          <Text style={styles.exerciseText}>
            Hold this breath for a moment, then breathe out, allowing your tummy deflate.
          </Text>
          <Text style={styles.exerciseText}>
            Let your shoulders and face relax as you breathe out.
          </Text>
          <Text style={styles.exerciseText}>
            Repeat this activity a few more times, allowing your body to slowly relax.
          </Text>
        </View>

        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 2: Visualization</Text>
          <Text style={styles.exerciseText}>
            Close your eyes and mentally visualize a peaceful and relaxing scene.
          </Text>
          <Text style={styles.exerciseText}>
            You may envision a tranquil landscape, a cozy room with a crackling fire, or anything else that makes you feel safe.
          </Text>
          <Text style={styles.exerciseText}>
            Hold onto this image for as long as you'd like.
          </Text>
        </View>

        <Text style={[styles.exerciseTitle, {fontSize: 30, fontWeight: 400, marginTop: 40, marginBottom: 20 }]}>
            When you're relaxed and ready to proceed, press continue.
          </Text>
      </ScrollView>

      <View style={styles.continueButtonContainer}>
        <ContinueButton onPress={handleContinue} disabled={!timerEnded} /> {/* Disable button until timer ends */}
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
    fontSize: 40,
    fontWeight: 600,
    textAlign: "center",
  },
  headerContainer: {
    fontSize: 40,
    fontWeight: 600,
    borderRadius:Values.borderRadius, 
    borderColor:Colors.green, 
    borderWidth:0, 
    backgroundColor: Colors.green,
    padding:20,
    paddingHorizontal:200,
    width: 2400,
    marginTop: -5,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
  },
  scrollContainer: {
    paddingBottom: 60, // Space for the fixed Continue button
    alignItems: "center",
  },
  exerciseContainer: {
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
  exerciseTitle: {
    fontSize: 35,
    fontWeight: 600,
    marginBottom: 20,
    textAlign: "center",
  },
  exerciseText: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 24,
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

export default Mindfulness;
