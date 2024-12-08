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
import { useTimerContext } from "@/components/Timer";

const SettingsPage = () => {
  const router = useRouter();
  const {
    isTimerVisible,
    setIsTimerVisible,
    timerDuration,
    setTimerDuration,
    isVariableTimer,
    setIsVariableTimer,
  } = useTimerContext();

  const [inputDuration, setInputDuration] = useState(
    timerDuration !== null ? timerDuration.toString() : "0" // Provide fallback for null
  );

  const toggleShowTimer = () => {
    setIsTimerVisible((prev) => !prev);
  };

  const toggleVariableTimer = () => {
    setIsVariableTimer((prev) => !prev);

    if (!isVariableTimer) {
      const manualDuration = parseInt(inputDuration, 10);
      if (isNaN(manualDuration) || manualDuration < 20) {
        alert("Timer duration must be at least 20 seconds.");
        setInputDuration("20");
        setTimerDuration(20);
      } else {
        setTimerDuration(manualDuration);
      }
    }
  };

  const handleTimerDurationChange = () => {
    const duration = parseInt(inputDuration, 10);
    if (!isNaN(duration) && duration >= 20) {
      setTimerDuration(duration);
    } else {
      alert("Timer duration must be at least 20 seconds.");
      setInputDuration(timerDuration?.toString() || "20");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>

      {/* Monthly Notifications */}
      <View style={styles.toggleRow}>
        <Text style={styles.label}>Monthly Notifications</Text>
        <Switch
          value={false}
          onValueChange={() => {}}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#f5dd4b"}
        />
      </View>

      {/* Show Timer Option */}
      <View style={styles.toggleRow}>
        <Text style={styles.label}>Show Timer</Text>
        <Switch
          value={isTimerVisible}
          onValueChange={toggleShowTimer}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isTimerVisible ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      {/* Variable Timer */}
      <View style={styles.toggleRow}>
        <Text style={styles.label}>Variable Timer</Text>
        <Switch
          value={isVariableTimer}
          onValueChange={toggleVariableTimer}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isVariableTimer ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      {/* Timer Duration Input (Manual Mode Only) */}
      {!isVariableTimer && (
        <View style={styles.durationContainer}>
          <Text style={styles.label}>Timer Duration (in seconds)</Text>
          <TextInput
            style={styles.input}
            value={inputDuration}
            onChangeText={setInputDuration}
            placeholder="Enter duration"
            keyboardType="numeric"
            onBlur={handleTimerDurationChange}
          />
        </View>
      )}

      {/* Log Out Button */}
      <StyledButton
        text="Log Out"
        buttonHeight={80}
        buttonWidth={300}
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
    backgroundColor: "#fff",
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
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 10,
    fontSize: 18,
    borderRadius: 5,
    width: 200,
  },
});

export default SettingsPage;
