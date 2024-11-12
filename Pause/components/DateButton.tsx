import React, { useState } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function SelectableButton(props: { 
  onPress?: () => void; 
  initialText?: string; 
  selectedText?: string;
}) {
  const { onPress, initialText = 'Select a Date', selectedText = 'Date Selected' } = props;
  const [isSelected, setIsSelected] = useState(false);

  // Handle button press
  const handlePress = () => {
    setIsSelected(!isSelected);
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable style={[styles.button, isSelected && styles.buttonSelected]} onPress={handlePress}>
      <Text style={styles.text}>{isSelected ? selectedText : initialText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#4f7bbd',
    height: 50,
    width: 200,
  },
  buttonSelected: {
    backgroundColor: '#2e5a8a', // Changes color when selected
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
