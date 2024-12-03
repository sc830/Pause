import React from 'react';
import { Image, Pressable } from 'react-native';

import reusedStyles from '../constants/reusedStyles';
import settingsIcon from '../assets/images/menu.png';

interface MenuButtonProps {
  onPress?: () => void;
  style?: object;
  altText?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  onPress,
  style,
  altText = "Whoops, we forgot to fill in the alt text.",
}) => {
  return (
    <Pressable
      style={[reusedStyles.menuButton, style]} // Use menuButton style from reusedStyles
      onPress={onPress}
    >
      <Image
        source={settingsIcon}
        style={{ width: 50, height: 50 }}
        resizeMode="contain"
        accessible
        accessibilityLabel={altText}
      />
    </Pressable>
  );
};

export default MenuButton;
