import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

export default function FeelingsWheelPage() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedSubFeeling, setSelectedSubFeeling] = useState<string | null>(null);
  const [finalFeeling, setFinalFeeling] = useState<string | null>(null);

  // Reset selections
  const resetSelection = () => {
    setSelectedEmotion(null);
    setSelectedSubFeeling(null);
    setFinalFeeling(null);
  };

  return (
    <View style={styles.container}>
      {/* Display the Feelings Wheel image */}
      <Image
        source={require('./Feelings+Wheel_Color.jpg')} // Replace with the path to your image
        style={styles.wheelImage}
        resizeMode="contain"
      />

      {/* Instruction or final selection */}
      {!finalFeeling ? (
        <Text style={styles.instruction}>
          {selectedEmotion
            ? selectedSubFeeling
              ? `Choose a deeper feeling for "${selectedSubFeeling}"`
              : `Choose a feeling related to "${selectedEmotion}"`
            : 'Choose an emotion from the center of the wheel'}
        </Text>
      ) : (
        <Text style={styles.instruction}>
          You selected: {finalFeeling}. Press Reset to start over.
        </Text>
      )}

      {/* Buttons for selecting emotions, sub-feelings, and deeper feelings */}
      <View style={styles.buttonsContainer}>
        {!selectedEmotion &&
          ['Angry', 'Happy', 'Sad', 'Disgusted', 'Surprised', 'Bad', 'Fearful'].map((emotion) => (
            <Pressable
              key={emotion}
              style={styles.button}
              onPress={() => setSelectedEmotion(emotion)}
            >
              <Text style={styles.buttonText}>{emotion}</Text>
            </Pressable>
          ))}
        {selectedEmotion && !selectedSubFeeling &&
          (selectedEmotion === 'Angry'
            ? ['Frustrated', 'Mad', 'Aggressive']
            : selectedEmotion === 'Happy'
            ? ['Content', 'Proud', 'Joyful']
            : selectedEmotion === 'Sad'
            ? ['Hurt', 'Lonely', 'Depressed']
            : selectedEmotion === 'Disgusted'
            ? ['Disapproving', 'Disappointed', 'Awful']
            : selectedEmotion === 'Surprised'
            ? ['Shocked', 'Confused', 'Amazed']
            : selectedEmotion === 'Bad'
            ? ['Stressed', 'Tired', 'Bored']
            : ['Scared', 'Anxious', 'Insecure']
          ).map((subFeeling) => (
            <Pressable
              key={subFeeling}
              style={styles.button}
              onPress={() => setSelectedSubFeeling(subFeeling)}
            >
              <Text style={styles.buttonText}>{subFeeling}</Text>
            </Pressable>
          ))}
        {selectedSubFeeling && !finalFeeling &&
          (selectedSubFeeling === 'Frustrated'
            ? ['Bitter', 'Annoyed']
            : selectedSubFeeling === 'Content'
            ? ['Satisfied', 'Relaxed']
            : selectedSubFeeling === 'Hurt'
            ? ['Embarrassed', 'Abandoned']
            : selectedSubFeeling === 'Disapproving'
            ? ['Judgmental', 'Dismissive']
            : selectedSubFeeling === 'Shocked'
            ? ['Astonished', 'Dismayed']
            : selectedSubFeeling === 'Stressed'
            ? ['Overwhelmed', 'Anxious']
            : ['Nervous', 'Weak']
          ).map((finalFeelingOption) => (
            <Pressable
              key={finalFeelingOption}
              style={styles.button}
              onPress={() => setFinalFeeling(finalFeelingOption)}
            >
              <Text style={styles.buttonText}>{finalFeelingOption}</Text>
            </Pressable>
          ))}
        {finalFeeling && (
          <Pressable style={styles.button} onPress={resetSelection}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wheelImage: {
    width: '90%',
    height: '50%',
  },
  instruction: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4f7bbd',
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
