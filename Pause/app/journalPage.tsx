/*  journalPage.tsx

    Screen 4

    Functions: 
        Prompts user to write a journal entry.
        Requires user input in TextBox
        Continue button is used to navigate to the next screen
*/

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextBox from '../components/TextBox';
import ContinueButton from '../components/ContinueButton';

const JournalPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Journal Entry</Text>

      {/* TextBox Component */}
      <TextBox
        boxHeight={20} // Adjust height to fit your layout
        boxWidth={500} // Dynamic width as percentage
        color="#f8f9fa" // Light background color
      />

      {/* Continue Button */}
      <ContinueButton onPress={() => console.log('Continue button pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default JournalPage;
