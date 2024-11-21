/*  mindfulness.tsx

    Functions: 
        Prompts user with mindfulness question
        Requires user input in TextBox
        Continue button is used to navigate to the next screen
*/

import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import TextBox from "@/components/TextBox";
import ContinueButton from "@/components/ContinueButton";

export default function Mindfulness() {
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
        <Text> Mindfulness Question</Text>
        <TextBox />
        <ContinueButton />
      </View>
    </TouchableWithoutFeedback>
  );
}
