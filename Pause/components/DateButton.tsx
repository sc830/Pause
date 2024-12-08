
import React from 'react';
import { Text, Pressable,StyleProp, ViewStyle } from 'react-native';
import Colors from '@/constants/Colors';
import Values from '@/constants/Values';
import reusedStyles from '../constants/reusedStyles'; // Import reused styles

interface DateButtonProps {
  onPress: () => void; // Explicit type for onPress
  date: string; // Date for the button
  style?: StyleProp<ViewStyle>; 
}

const DateButton: React.FC<DateButtonProps> = ({ onPress, date, style }) => {
  return (
    <Pressable
      style={[reusedStyles.dateButton, style]} // Use dateButton style from reusedStyles
      onPress={onPress}
    >
      <Text style={reusedStyles.textStyle}>{date}</Text> {/* Display the date */}
    </Pressable>
  );
};

export default DateButton;
