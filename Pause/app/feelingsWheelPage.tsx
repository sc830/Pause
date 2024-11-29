import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

import wheelImage from '../assets/images/feelingsWheel.jpg'; 
import ContinueButton from '../components/ContinueButton'; 
const FeelingsWheelPage: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedSubFeeling, setSelectedSubFeeling] = useState<string | null>(null);
  const [finalFeeling, setFinalFeeling] = useState<string | null>(null);

  const resetSelection = () => {
    setSelectedEmotion(null);
    setSelectedSubFeeling(null);
    setFinalFeeling(null);
  };

  const handleContinue = () => {
    if (finalFeeling) {
      console.log(`Proceeding with selected feeling: ${finalFeeling}`);
    } else {
      console.log('Please select a feeling before continuing.');
    }
  };

  const emotions = {
    Happy: {
      Playful: ['Aroused', 'Cheeky'],
      Content: ['Free', 'Joyful'],
      Interested: ['Curious', 'Inquisitive'],
      Proud: ['Successful', 'Confident'],
      Accepted: ['Respected', 'Valued'],
      Powerful: ['Courageous', 'Creative'],
      Peaceful: ['Loving', 'Thankful'],
      Trusting: ['Sensitive', 'Intimate'],
      Optimistic: ['Hopeful', 'Inspired'],
    },
    Sad: {
      Lonely: ['Isolated', 'Abandoned'],
      Vulnerable: ['Victimized', 'Fragile'],
      Despair: ['Grief', 'Powerless'],
      Guilty: ['Ashamed', 'Remorseful'],
      Depressed: ['Empty', 'Inferior'],
      Hurt: ['Disappointed', 'Embarrassed'],
    },
    Disgusted: {
      Disapproving: ['Judgmental', 'Embarrassed'],
      Disappointed: ['Appalled', 'Revolted'],
      Awful: ['Nauseated', 'Detestable'],
      Repelled: ['Horrified', 'Hesitant'],
    },
    Angry: {
      'Let down': ['Betrayed', 'Resentful'],
      Humiliated: ['Disrespected', 'Ridiculed'],
      Bitter: ['Indignant', 'Violated'],
      Mad: ['Furious', 'Jealous'],
      Aggressive: ['Provoked', 'Hostile'],
      Frustrated: ['Infuriated', 'Annoyed'],
      Distant: ['Withdrawn', 'Numb'],
      Critical: ['Skeptical', 'Dismissive'],
    },
    Fearful: {
      Scared: ['Helpless', 'Frightened'],
      Anxious: ['Overwhelmed', 'Worried'],
      Insecure: ['Inadequate', 'Inferior'],
      Weak: ['Worthless', 'Insignificant'],
      Rejected: ['Excluded', 'Persecuted'],
      Threatened: ['Nervous', 'Exposed'],
    },
    Bad: {
      Bored: ['Indifferent', 'Apathetic'],
      Busy: ['Pressured', 'Rushed'],
      Stressed: ['Overwhelmed', 'Out of Control'],
      Tired: ['Sleepy', 'Unfocused'],
    },
    Surprised: {
      Startled: ['Shocked', 'Dismayed'],
      Confused: ['Disillusioned', 'Perplexed'],
      Amazed: ['Astonished', 'Awe'],
      Excited: ['Eager', 'Energetic'],
    },
  };

  return (
    <View style={styles.container}>
      <Image
        source={wheelImage}
        style={styles.wheelImage}
        resizeMode="contain"
      />
      <Text style={styles.instruction}>
        {!finalFeeling
          ? selectedEmotion
            ? selectedSubFeeling
              ? `Choose a deeper feeling for "${selectedSubFeeling}"`
              : `Choose a feeling related to "${selectedEmotion}"`
            : 'Choose an emotion from the center of the wheel'
          : `You selected: ${finalFeeling}. Press Reset to start over.`}
      </Text>
      <View style={styles.buttonsContainer}>
        {!selectedEmotion &&
          Object.keys(emotions).map((emotion) => (
            <Pressable
              key={emotion}
              style={styles.button}
              onPress={() => setSelectedEmotion(emotion)}
            >
              <Text style={styles.buttonText}>{emotion}</Text>
            </Pressable>
          ))}
        {selectedEmotion && !selectedSubFeeling &&
          Object.keys(emotions[selectedEmotion as keyof typeof emotions]).map(
            (subFeeling) => (
              <Pressable
                key={subFeeling}
                style={styles.button}
                onPress={() => setSelectedSubFeeling(subFeeling)}
              >
                <Text style={styles.buttonText}>{subFeeling}</Text>
              </Pressable>
            )
          )}
        {selectedSubFeeling && !finalFeeling &&
          emotions[selectedEmotion as keyof typeof emotions][
            selectedSubFeeling as keyof typeof emotions[typeof selectedEmotion]
          ].map((deeperFeeling) => (
            <Pressable
              key={deeperFeeling}
              style={styles.button}
              onPress={() => setFinalFeeling(deeperFeeling)}
            >
              <Text style={styles.buttonText}>{deeperFeeling}</Text>
            </Pressable>
          ))}
        {finalFeeling && (
          <Pressable style={styles.button} onPress={resetSelection}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.continueButtonContainer}>
        <ContinueButton onPress={handleContinue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  wheelImage: {
    width: '90%',
    height: '70%',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 40,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4f7bbd',
    padding: 15,
    margin: 8,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  continueButtonContainer: {
    marginTop: 30, 
  },
});

export default FeelingsWheelPage;
