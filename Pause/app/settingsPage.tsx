/*  settingsPage.tsx

    Functions:
        allows user to manage monthly notifications
        user has the ability to adjust timer settings
        menu button directs user to journal screen and progress screen
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TextInput, Pressable } from "react-native";
import MenuButton from "@/components/MenuButton";
import JournalButton from "@/components/JournalButton";
import MonthlyProgressButton from "@/components/MonthlyProgressButton";
import StyledButton from '@/components/StyledButton';
import { useRouter } from "expo-router";
import { userSignOut } from '@/constants/firebase'

const settingsPage = () => {
  const router = useRouter(); // Initialize router for navigation

  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [isVariableTimer, setIsVariableTimer] = useState(false);
  const [isTimerDuration, setIsTimerDuration] = useState("");
  const [isMonthlyNotifications, setIsMonthlyNotifications] = useState(false);
  const username = "username placeholder"; //to be replaced
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility

  const toggleShowTimer = () =>
    setIsTimerVisible((previousState) => !previousState);
  const toggleVariableTimer = () =>
    setIsVariableTimer((previousState) => !previousState);
  const toggleMonthlyNotifications = () =>
    setIsMonthlyNotifications((previousState) => !previousState);
  const toggleDropdown = () => {
    setShowDropdown((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      {/* Display Username */}
      <Text style={styles.headerText}>{username}</Text>
      <MenuButton style={styles.menuButton} onPress={toggleDropdown} />

      {/* Dropdown Menu */}
      {showDropdown && (
        <View style={styles.dropdown}>
          <JournalButton
            onPress={() => router.push("/journalPage")}
            style={styles.dropdownButton}
          />{" "}
          {/* Navigate to Journal Page */}
          <MonthlyProgressButton
            onPress={() => console.log("Monthly Progress Pressed")}
            style={styles.dropdownButton}
          />
        </View>
      )}

      {/* Monthly Notifications */}
      <View style={styles.toggleRow}>
        <Text style={styles.label}>Monthly Notifications</Text>
        <Switch
          value={isMonthlyNotifications}
          onValueChange={toggleMonthlyNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isMonthlyNotifications ? "#f5dd4b" : "#f4f3f4"}
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

      {/* Timer Duration Input */}
      {isVariableTimer && (
        <View style={styles.durationContainer}>
          <Text style={styles.label}>Timer Duration (in seconds)</Text>
          <TextInput
            style={styles.input}
            value={isTimerDuration}
            onChangeText={setIsTimerDuration}
            placeholder="Enter duration"
            keyboardType="numeric" //only numerical input
          />
        </View>
        
      )}

      {/* Log Out */}
      <View style={styles.toggleRow}>
        <StyledButton
          text = "Log Out"
          buttonHeight={80}
          buttonWidth={300}
          onPress={() => {
            handleLogOut(router);
        }}
        />
      </View>
    </View>
  );
};

const handleLogOut = async (router: any) => {
  await userSignOut();
  router.push('/');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    fontSize: 25,
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
  },
  menuButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  dropdown: {
    position: "absolute",
    top: 70,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownButton: {
    marginVertical: 5,
  },
});

export default settingsPage;
