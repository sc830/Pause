/*  gratitude.tsx
    Functions:
        Prompts user to practice gratitude
        Requires user to input three things they are grateful for
        AddButton is used to insert more text boxes if desired
        Continue button is used to navigate to the next screen

    Example reference: https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
*/

import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import TextBox from "@/components/TextBox";
import ContinueButton from "@/components/ContinueButton";
import AddButton from "@/components/AddButton";

export default function Gratitude() {
  const [textBoxes, setTextBoxes] = useState([
    <TextBox key={0} />,
    <TextBox key={1} />,
    <TextBox key={2} />,
  ]);

  const AddTextBox = () => {
    setTextBoxes((originalTextBoxes) => [
      ...originalTextBoxes,
      <TextBox key={originalTextBoxes.length} />,
    ]);
  };

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
        <Text>What are you grateful for?</Text>
        {textBoxes}
        <AddButton onPress={AddTextBox} />
        <ContinueButton />
      </View>
    </TouchableWithoutFeedback>
  );
}
