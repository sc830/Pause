/*  logsPage.tsx

    Screen 5

    Functions: 
        Allows User to View App Usage History
        Requires user to slecet a date of interest
*/

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import MenuButton from "@/components/MenuButton";
import DateButton from "@/components/DateButton";
import SettingsButton from "@/components/SettingsButton";
import JournalButton from "@/components/JournalButton";
import MonthlyProgressButton from "@/components/MonthlyProgressButton";

export default function LogsPage() {
  const [dates, setDates] = useState<string[]>([]); // Store dates
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility
  const router = useRouter(); // Initialize router for navigation

  // Temporary placeholder dates for testing until Firebase is connected
  useEffect(() => {
    const placeholderDates = ["2024-11-19", "2024-11-20", "2024-11-21"];
    setDates(placeholderDates);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Choose A Date to View Past Responses:
      </Text>
      <MenuButton style={styles.menuButton} onPress={toggleDropdown} />

      {/* Dropdown Menu */}
      {showDropdown && (
        <View style={styles.dropdown}>
          {/* Navigate to Settings Page */}
          <SettingsButton
            onPress={() => router.push("/settingsPage")}
            style={styles.dropdownButton}
          />
          {/* Navigate to Journal Page */}
          <JournalButton
            onPress={() => router.push("/journalPage")}
            style={styles.dropdownButton}
          />{" "}
          <MonthlyProgressButton
            onPress={() => console.log("Monthly Progress Pressed")}
            style={styles.dropdownButton}
          />
        </View>
      )}

      {/* Render Date Buttons */}
      <FlatList
        data={dates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DateButton
            date={item}
            onPress={() => console.log(`View activities for ${item}`)}
            style={styles.dateButton}
          />
        )}
        contentContainerStyle={styles.dateButtonList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
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
  dateButtonList: {
    marginTop: -90,
    width: "100%",
    alignItems: "center",
  },
  dateButton: {
    marginVertical: 10,
    width: "100%",
    alignSelf: "center",
  },
});
