
import React from 'react';
import { Text, Pressable } from 'react-native';

import reusedStyles from '../constants/reusedStyles'; // Import reused styles

interface DateButtonProps {
  onPress: () => void; // Explicit type for onPress
  date: string; // Date for the button
}

const DateButton: React.FC<DateButtonProps> = ({ onPress, date }) => {
  return (
    <Pressable
      style={[reusedStyles.dateButton]} // Use dateButton style from reusedStyles
      onPress={onPress}
    >
      <Text style={reusedStyles.textStyle}>{date}</Text> {/* Display the date */}
    </Pressable>
  );
};

export default DateButton;
