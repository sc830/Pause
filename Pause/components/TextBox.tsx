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
import { View, KeyboardAvoidingView, SafeAreaView, TextInput, TextInputProps, Dimensions, StyleSheet, Text, Platform } from 'react-native';

import colors from '@/constants/Colors';
import reusedStyles from '@/constants/reusedStyles';
import values from '@/constants/Values';

// types of expected props
interface TextBoxProps extends TextInputProps {
  boxHeight?: number;
  boxWidth?: number;
  color?: string;
  text?: string;
  secure?: boolean;
}
  
  const TextBox: React.FC<TextBoxProps> = ({ 
    // default values for props, if any
    boxHeight = Dimensions.get('window').height * .5,
    boxWidth = Dimensions.get('window').width * values.componentWidth,
    color = colors.yellow,
    text = "Tap here to add text",
    secure = false,
    ...rest
   }) => {

    const { width, height } = Dimensions.get('window');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        <TextInput
            style={[reusedStyles.textInputStyle, {height: boxHeight, width: boxWidth, backgroundColor: color}]}
            placeholder={text}
            placeholderTextColor={colors.gray}
            multiline
            secureTextEntry={secure}
            {...rest}
        />
    </KeyboardAvoidingView>
   );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: colors.yellow,
    color: colors.black,
    borderColor: '#ffffff',
    borderRadius: values.borderRadius,
    borderWidth: 0,
    flex: 1,
    padding: 30,      
  }
});

export default TextBox;