/*  TextBox.tsx
    Props:  
        boxHeight - number (optional)
        boxWidth - number (optional)
    Export: styled text box component

    Functions:
        Accepts text input from user
        Brings up the virtual keyboard when clicked
        Adjusts user's view to ensure component is visible when the keyboard is shown

    Note: other parts of screen should be nested inside a <TouchableWithoutFeedback> component so that
    when the user clicks on another part of the screen, the virtual keyboard is dismissed.
        ex:
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <TextBox/>
        </TouchableWithoutFeedback>
        *required imports: TouchableWithoutFeedback and Keyboard from react-native

    Altered from documentation example: https://reactnative.dev/docs/keyboardavoidingview
    Added props argument format from ChatGPT
        interface TextBoxProps {  }
        const TextBox: React.FC<TextBoxProps> = ({ })

    Used dynamic styling with props example from ChatGPT - style={[styles.textInput, { borderColor: borderColor }]}>
*/

import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';

import reusedStyles from '../constants/reusedStyles';

// types of expected props
interface TextBoxProps {
boxHeight?: number;
boxWidth?: number;
}
  
  const TextBox: React.FC<TextBoxProps> = ({ 
    // default values for props, if any
    boxHeight = 1500,
    boxWidth = 1000,
   }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        <TextInput
            style={[reusedStyles.textInputStyle, {height: boxHeight, width: boxWidth}]}
            placeholder="Tap here to add text" 
            placeholderTextColor='#b6b7b8'
            multiline
        />
    </KeyboardAvoidingView>
   );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default TextBox;