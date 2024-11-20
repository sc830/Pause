import React from 'react';
import { Text, Pressable } from 'react-native';

import reusedStyles from '../constants/reusedStyles'; // Import reused styles

interface DateButtonProps {
  onPress?: () => void; // Explicit type for onPress
  title?: string; // Title for the button
}

const DateButton: React.FC<DateButtonProps> = ({
  onPress,
  title = 'November 2024', // Default title
}) => {
  return (
    <Pressable
      style={[reusedStyles.dateButton]} // Use dateButton style from reusedStyles
      onPress={onPress}
    >
      <Text style={reusedStyles.textStyle}>{title}</Text> {/* Use shared textStyle */}
    </Pressable>
  );
};

export default DateButton;
