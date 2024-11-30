// Documentation
/*
  StyledButton.tsx

  Props: 

  Export:

  Functions:

  Usage:

  References:
    Modified from ContinueButton

*/

import React from 'react';
import { SafeAreaView, Dimensions, Text, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '@/constants/Colors';
import reusedStyles from '@/constants/reusedStyles';
import values from '@/constants/Values';

// types of expected props
interface StyledButtonProps {
  onPress?: () => void;
  buttonHeight?: number;
  buttonWidth?: number;
  text?: string;
  color?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  onPress,
  buttonHeight = 200,
  buttonWidth = 400,
  text = "Continue",
  color = colors.yellow,
}) => {

  return (
    <Pressable style={[styles.button, {backgroundColor: color, height: buttonHeight, width: buttonWidth, position: 'absolute'}]}     onPress={onPress}>
      <Text style={reusedStyles.buttonTextStyle}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: values.borderRadius,
    elevation: 3,
    margin: 0,
  }
});

export default StyledButton;

