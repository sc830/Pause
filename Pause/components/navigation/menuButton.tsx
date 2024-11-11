import React from 'react';
import { Image, Text, StyleSheet, Pressable } from 'react-native';

import settingsIcon from '../assets/images/menu.png';

export default function menuButton(props: { onPress?: any; title?: String | undefined; }) {
  const { onPress, title = '' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image source={settingsIcon} style={{ width: 50, height: 50}} resizeMode="contain"/>
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
    backgroundColor: '#4f7bbd',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


