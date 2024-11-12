// Documentation
/*
  ContinueButton.tsx

  Props: 

  Export:

  Functions:

  Usage:

  References:
    Modified from examples:
      https://medium.com/@prathiba2796/custom-button-component-in-react-native-c823dcbc4ed3
      https://docs.expo.dev/ui-programming/react-native-styling-buttons/
    Referenced ChatGPT for props formatting

*/

import React from 'react';
import { Image, Text, StyleSheet, Pressable } from 'react-native';

import colors from '../constants/Colors'
import reusedStyles from '../constants/reusedStyles'

// types of expected props
interface ContinueButtonProps {
  onPress?: () => void;
  text?: string;
  color?: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  onPress,
  text = "Continue",
  color = colors.yellow
}) => {
  return (
    <Pressable style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
      <Text style={reusedStyles.textStyle}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 20,
    elevation: 3,
    height: 100,
    width: 100,
    margin: 0,
  }
});


