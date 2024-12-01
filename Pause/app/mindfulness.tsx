/*  mindfulness.tsx

    Screen 2

    Functions: 
        Prompts user with mindfulness question
        Requires user input in TextBox
        Continue button is used to navigate to the next screen
*/

import { useRouter } from "expo-router";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import TextBox from "@/components/TextBox";
import ContinueButton from "@/components/ContinueButton";

export default function Mindfulness() {
  const router = useRouter();

  // Handle Continue button press
  const handleContinue = () => {
    router.push("/grounding"); // Navigate to the Grounding page
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}> Mindfulness Exercise</Text>
        <TextBox />
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
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
});
