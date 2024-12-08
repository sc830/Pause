import React from 'react';
import { Image, Pressable } from 'react-native';

import reusedStyles from '../constants/reusedStyles'; // Import reused styles
import settingsIcon from '../assets/images/settings.png'; // Import settings icon

interface SettingsButtonProps {
  onPress?: () => void; // Explicit type for onPress
  style?: object; // Optional style override
  altText?: string;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ 
  onPress, 
  style,
  altText = "Whoops, we forgot to fill in the alt text.",
}) => {
  return (
    <Pressable
      style={[reusedStyles.settingsButton, style]} // Use settingsButton style from reusedStyles
      onPress={onPress}
    >
      <Image
        source={settingsIcon}
        style={{ width: 38, height: 38 }}
        resizeMode="contain"
        accessible
        accessibilityLabel={altText}
      />
    </Pressable>
  );
};

export default SettingsButton;
