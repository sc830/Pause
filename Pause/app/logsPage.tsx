import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MenuButton from '@/components/MenuButton';
import SettingsButton from '@/components/SettingsButton';
import JournalButton from '@/components/JournalButton';
import MonthlyProgressButton from '@/components/MonthlyProgressButton';

export default function LogsPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Choose A Date to View Past Responses and Journal Entries:</Text>
      <MenuButton style={styles.menuButton} onPress={toggleDropdown} />
    

      {/* Dropdown menu */}
      {showDropdown && (
        <View style={styles.dropdown}>
          <SettingsButton onPress={() => console.log('Settings Pressed')} />
          <JournalButton onPress={() => console.log('Journal Pressed')} />
          <MonthlyProgressButton onPress={() => console.log('Monthly Progress Pressed')} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    position: 'absolute',
    top: 40,            
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  menuButton: {
    position: 'absolute',
    top: 20,         // Distance from the top of the screen
    right: 20,       // Distance from the right edge of the screen
  },
  dropdown: {
    position: 'absolute',
    top: 80,          // Position dropdown below menu button
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,     // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
