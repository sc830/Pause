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
import { Text, Pressable } from 'react-native';

import reusedStyles from '../constants/reusedStyles';

interface ContinueButtonProps {
  onPress?: () => void;
  text?: string;
  color?: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  onPress,
  text = "Continue",
  color = '#f1c40f', // Default to yellow-like color
}) => {
  return (
    <Pressable
      style={[reusedStyles.continueButton, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={reusedStyles.textStyle}>{text}</Text>
    </Pressable>
  );
};

export default ContinueButton;
