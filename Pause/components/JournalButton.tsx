import React from 'react';
import { Image, Pressable } from 'react-native';

import reusedStyles from '../constants/reusedStyles'; // Import reused styles
import journalIcon from '../assets/images/diary.png'; // Update icon variable for clarity

interface JournalButtonProps {
  onPress?: () => void; // Explicit type for onPress
  style?: object; // Optional style override
  altText?: string;
}

const JournalButton: React.FC<JournalButtonProps> = ({
  onPress, 
  style,
  altText = "Whoops, we forgot to fill in the alt text.",
}) => {
  return (
    <Pressable
      style={[reusedStyles.journalButton, style]} // Use journalButton style from reusedStyles
      onPress={onPress}
    >
      <Image
        source={journalIcon} // Use the correct icon
        style={{ width: 38, height: 38 }}
        resizeMode="contain"
        accessible
        accessibilityLabel={altText}
      />
    </Pressable>
  );
};

export default JournalButton;
