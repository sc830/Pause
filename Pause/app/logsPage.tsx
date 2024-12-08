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
import Colors from '@/constants/Colors';
import Values from '@/constants/Values';

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

      <Text style={styles.headerText}>
        Choose A Date to View Past Responses:
      </Text>

      {/* Render Date Buttons */}
      <FlatList
        data={dates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DateButton
            date={item}
            onPress={() => console.log(`View activities for ${item}`)}
            style={[styles.dateButton, {backgroundColor:Colors.green, height:60, width:400, marginVertical:5}]}
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
    backgroundColor: Colors.blue,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: 20,
    marginTop: 40,
  },
  menuButton: {
    position: "absolute",
    backgroundColor: Colors.green,
    zIndex: 10,
    top: 10,
    left: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: Colors.green,
    top: 39,
    left: 10,
    padding: 7,
    paddingTop: 30,
    borderRadius: Values.borderRadius,
    zIndex: 2,
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
