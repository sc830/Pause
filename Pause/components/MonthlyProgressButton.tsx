import React from 'react';
import { Image, Pressable } from 'react-native';

import reusedStyles from '../constants/reusedStyles'; // Import reused styles
import trophyIcon from '../assets/images/trophy.png'; // Update icon variable for clarity

interface MonthlyProgressButtonProps {
  onPress?: () => void; // Explicit type for onPress
  style?: object; // Optional style override
  altText?: string;
}

const MonthlyProgressButton: React.FC<MonthlyProgressButtonProps> = ({
   onPress, 
   style,
   altText = "Whoops, we forgot to fill in the alt text.",
  }) => {
  return (
    <Pressable
      style={[reusedStyles.monthlyProgressButton, style]} // Use monthlyProgressButton style from reusedStyles
      onPress={onPress}
    >
      <Image
        source={trophyIcon} // Use the correct icon
        style={{ width: 38, height: 38 }}
        resizeMode="contain"
        accessible
        accessibilityLabel={altText}
      />
    </Pressable>
  );
};

export default MonthlyProgressButton;
