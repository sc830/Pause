/*  TitleBar.tsx

  Props: 

  Exports: 

  Functions:  

  Usage:

  References:
  
*/
//const { width, height } = Dimensions.get('window');
//import { useSafeAreaInsets } from 'react-native-safe-area-context';
// style fixes
//#endregion

import React, { useState } from 'react';
import { View, SafeAreaView, Dimensions, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, reusedStyles, values } from '@/constants';

// types of expected props
interface HeaderProps {
  title: string;
  color?: string;
  textColor?: string;
}
  
const TitleBar: React.FC<HeaderProps> = ({ 
    title = "Page Title",
    color = colors.yellow,                // default color yellow
    textColor = colors.black,             // default text color black
   }) => {

  const { width, height } = Dimensions.get('window');
  const insets = useSafeAreaInsets();     // Get safe area insets
  const barHeight = height*.1 + insets.top;       // 10% screen height + safe area top inset
  const barWidth = width * values.componentWidth;            // calculate width of component space
  const leftPosition = (width*(1-values.componentWidth))/2;    // calculate left margin
  
  return (
    <View style={[styles.titleBar, {backgroundColor: color, height:barHeight, width:barWidth}]}>
      <SafeAreaView>
        <Text style={[styles.titleText, {color: textColor, paddingTop: 8, marginBottom:12}]}>{title}</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBar: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomLeftRadius: values.borderRadius,
    borderBottomRightRadius: values.borderRadius,
  },
  titleText: {
    alignItems: 'center',
    letterSpacing: 1.5,
    justifyContent: 'center',
    fontSize: 36,
    fontWeight: 100,
  },
});

export default TitleBar;