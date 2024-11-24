/* ComponentArea.tsx

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
import { View, KeyboardAvoidingView, SafeAreaView, TextInput, Dimensions, StyleSheet, Text, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '@/constants/Colors';
import reusedStyles from '@/constants/reusedStyles';
import values from '@/constants/Values';

// types of expected props
interface ComponentAreaProps {
  boxHeight?: number;
  boxWidth?: number;
}
  
  const ComponentArea: React.FC<ComponentAreaProps> = ({ 
    // default values for props, if any
    boxHeight = Dimensions.get('window').height * .78,
    boxWidth = Dimensions.get('window').width * values.componentWidth,
   }) => {

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[styles.view, {height:boxHeight, width:boxWidth}]}>

    </View>
   );
  };

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 0,
    padding: 30,      
  }
});

export default ComponentArea;