/*  settingsPage.tsx

    Functions:
        - Allows user to manage monthly notifications
        - User can toggle timer visibility
        - User can toggle and set a variable timer
        - Includes navigation to journal and progress screens
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TextInput } from "react-native";
import StyledButton from "@/components/StyledButton";
import { useRouter } from "expo-router";
import { userSignOut } from "@/constants/firebase";
import { useTimerContext } from "@/components/Timer"; // Import TimerContext hook
import Colors from '@/constants/Colors';
import Values from '@/constants/Values';

const SettingsPage = () => {
  const router = useRouter();
  const {
    isTimerVisible,
    setIsTimerVisible,
    timerDuration,
    setTimerDuration,
  } = useTimerContext(); // Access timer context

  const [isVariableTimer, setIsVariableTimer] = useState(false);
  const [inputDuration, setInputDuration] = useState(timerDuration.toString()); // Sync input with the context

  const toggleShowTimer = () => {
    setIsTimerVisible((prev) => !prev);
  };

  const toggleVariableTimer = () => setIsVariableTimer((prev) => !prev);

  const handleTimerDurationChange = () => {
    const duration = parseInt(inputDuration, 10);
    if (isNaN(duration) || duration < 20) {
      alert("Timer duration must be at least 20 seconds.");
    } else {
      setTimerDuration(duration);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>

      {/* Monthly Notifications */}
      <View style={styles.toggleRow}>
        <Text style={[styles.label, {opacity:0.5}]}>Monthly Notifications</Text>
        <Switch
          value={false}
          onValueChange={() => {}}
          trackColor={{ false: "#6767", true: "#81b0ff" }}
          thumbColor={"#9A9A9A"}
        />
      </View>

      {/* Show Timer Option */}
      <View style={styles.toggleRow}>
        <Text style={styles.label}>Show Timer</Text>
        <Switch
          value={isTimerVisible}
          onValueChange={toggleShowTimer}
          trackColor={{ false: Colors.yellow, true: Colors.blue }}
          thumbColor={Colors.blue}
        />
      </View>

      {/* Variable Timer */}
      <View style={styles.toggleRow}>
        <Text style={styles.label}>Variable Timer</Text>
        <Switch
          value={isVariableTimer}
          onValueChange={toggleVariableTimer}
          trackColor={{ false: Colors.yellow, true: Colors.blue }}
          thumbColor={Colors.blue}
        />
      </View>

      {/* Timer Duration Input */}
      {!isVariableTimer && (
        <View style={styles.durationContainer}>
          <Text style={styles.label}>Timer Duration (in seconds)</Text>
          <TextInput
            style={styles.input}
            value={inputDuration}
            onChangeText={setInputDuration}
            placeholder="Enter duration"
            keyboardType="numeric"
            onBlur={handleTimerDurationChange} // Apply the change on blur
          />
        </View>
      )}

      {/* Log Out Button */}
      <StyledButton
        text="Log Out"
        buttonHeight={80}
        buttonWidth={300}
        color={Colors.blue}
        onPress={async () => {
          await userSignOut();
          router.push("/");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.green,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    margin: 20,
  },
  durationContainer: {
    marginTop: 0,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    borderRadius: 5,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default SettingsPage;
