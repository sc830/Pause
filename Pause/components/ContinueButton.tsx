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
import { SafeAreaView, Dimensions, Text, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '@/constants/Colors';
import reusedStyles from '@/constants/reusedStyles';
import values from '@/constants/Values';

interface ContinueButtonProps {
  onPress?: () => void;
  text?: string;
  color?: string;
  disabled?: boolean; 
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  onPress,
  text = "Continue",
  color = colors.green,
  disabled = false, // Default to not disabled
}) => {
  const { width, height } = Dimensions.get('window');
  const insets = useSafeAreaInsets();                 // Get safe area insets
  const buttonHeight = height*.07 + insets.top;        // 10% screen height + safe area top inset
  const buttonWidth = width*values.componentWidth;                       // 90% width of screen
  const leftPosition = (width*.05)/2;                  // compute left margin

  return (
    <Pressable style={[styles.button, {backgroundColor: color, opacity: disabled ? 0.6 : 1 ,height: buttonHeight, width: buttonWidth, position: 'absolute', bottom:insets.bottom, marginBottom: 10}]}                
      onPress={!disabled ? onPress : undefined} >
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

export default ContinueButton;


