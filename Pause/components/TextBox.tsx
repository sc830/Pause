/*  TextBox.tsx

  Props:  
    boxHeight - number (optional)
    boxWidth - number (optional)

  Export: styled text box component

  Functions:
    Accepts text input from user
    Brings up the virtual keyboard when clicked
    Adjusts user's view to ensure component is visible when the keyboard is shown

  Usage: wrap entire screen in TouchableWithoutFeedback to dismiss keyboard when user
  makes a new selection

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View>
        <SomeScreenComponent.../>
        <SomeScreenComponent.../>
            <TextBox/>
        <SomeScreenComponent.../>
        ...
      </View>
    </TouchableWithoutFeedback>

    Note: other parts of screen should be nested inside a <TouchableWithoutFeedback> component so that
    when the user clicks on another part of the screen, the virtual keyboard is dismissed.
    *requires imports: TouchableWithoutFeedback and Keyboard from react-native

  References:
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
import colors from '../constants/Colors'

// types of expected props
interface TextBoxProps {
  boxHeight?: number;
  boxWidth?: number;
  color?: string;
}
  
  const TextBox: React.FC<TextBoxProps> = ({ 
    // default values for props, if any
    boxHeight = 1500,
    boxWidth = 1000,
    color = colors.blue,
   }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        <TextInput
            style={[reusedStyles.textInputStyle, {height: boxHeight, width: boxWidth, backgroundColor: color}]}
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