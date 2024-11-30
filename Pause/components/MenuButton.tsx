
import React from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';

import colors from '../constants/Colors'
import reusedStyles from '../constants/reusedStyles'
import settingsIcon from '../assets/images/menu.png';

// types of expected props
interface MenuButtonProps {
  onPress?: () => any,
  style?: object,
  altText?: string,
}

const MenuButton: React.FC<MenuButtonProps> =  ({
  onPress,
  style,
  altText = "Whoops, we forgot to fill in the alt text.",
}) => {
  return (
    <Pressable style={[reusedStyles.menuButton, style]} onPress={onPress}>
      <Image source={settingsIcon} style={{ width: 50, height: 50}} resizeMode="contain" accessible={true} accessibilityLabel={altText} />
    </Pressable>
  );
}

export default MenuButton;