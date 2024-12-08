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
  altText = "Menu icon",
}) => {
  return (
    <Pressable
      style={[reusedStyles.menuButton, style]} // Use menuButton style from reusedStyles
      onPress={onPress}
    >
      <Image
        source={settingsIcon}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
        accessible
        accessibilityLabel={altText}
      />
    </Pressable>
  );
};

export default MenuButton;
