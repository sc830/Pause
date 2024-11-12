import React from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import settingsIcon from '../assets/images/diary.png';

export default function JournalButton(props: { onPress?: any; title?: String | undefined; style?: object }) {
  const { onPress, style } = props;
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Image source={settingsIcon} style={{ width: 40, height: 40 }} resizeMode="contain" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 50,
    //backgroundColor: '#4f7bbd',
  },
});