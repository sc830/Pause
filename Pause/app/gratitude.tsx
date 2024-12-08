/*  gratitude.tsx

    Functions:
        Prompts user to practice gratitude.
        Allows user to input a list of things they are grateful for.
        Adds more text boxes dynamically when the "+" button is pressed.
        Continue button navigates to the next screen.
*/

import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import TextBox from "@/components/TextBox";
import ContinueButton from "@/components/ContinueButton";
import AddButton from "@/components/AddButton";
import Timer, { useTimerContext } from "../components/Timer";

export function Gratitude() {
  const router = useRouter();
  const [textInputs, setTextInputs] = useState<string[]>(["", "", ""]);
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

  const handleAddTextBox = () => {
    setTextInputs((prev) => [...prev, ""]);
  };

  const handleInputChange = (text: string, index: number) => {
    const updatedInputs = [...textInputs];
    updatedInputs[index] = text;
    setTextInputs(updatedInputs);
  };

  const handleContinue = () => {
    console.log("Gratitude List:", textInputs);
    console.log(`Timer duration was: ${timerDuration}s`); // Log timer duration for debugging
    router.push("/journalPage"); // Navigate to the Journal Page
  };

  return (
    <View style={styles.container}>
      <Timer key={timerKey} />
      <Text style={styles.header}>
        List three things that you are grateful for:
      </Text>
      <Text style={styles.subHeader}>
        Click the plus button if you can think of more.
      </Text>

      {/* Scrollable area for text boxes and Add Button */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {textInputs.map((input, index) => (
          <View key={index} style={styles.textBoxContainer}>
            <Text style={styles.number}>{index + 1}.</Text>
            <TextBox
              boxHeight={20}
              boxWidth={300}
              color="#f8f9fa"
              value={input}
              onChangeText={(text) => handleInputChange(text, index)}
            />
          </View>
        ))}

        {/* Add Button placed directly below the last text box */}
        <AddButton onPress={handleAddTextBox} style={styles.addButton} />
      </ScrollView>

      {/* Continue Button */}
      <ContinueButton onPress={handleContinue} disabled={!timerEnded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 100,
  },
  textBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 20,
    width: "-90%",
  },
  number: {
    fontSize: 18,
    marginRight: 10,
  },
  addButton: {
    marginTop: 5,
  },
});

export default Gratitude;
