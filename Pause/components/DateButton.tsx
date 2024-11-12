import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function DateButton(props: { onPress?: any; title?: string }) {
  const { onPress, title = 'November 2024' } = props; // Default title if none is provided

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 20,
    backgroundColor: '#4f7bbd',
    //position: 'absolute',
    top: 100,
    //textAlign: 'center',
    //fontSize: 20,
    //fontWeight:
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
