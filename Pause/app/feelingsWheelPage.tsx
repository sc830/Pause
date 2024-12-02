import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import wheelImage from '../assets/images/feelingsWheel.jpg';
import Timer from '../components/Timer'; // Import Timer Component
import ContinueButton from '../components/ContinueButton';

const FeelingsWheelPage: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedSubFeeling, setSelectedSubFeeling] = useState<string | null>(null);
  const [finalFeeling, setFinalFeeling] = useState<string | null>(null);

  const router = useRouter(); // Hook for navigation

  const resetSelection = () => {
    setSelectedEmotion(null);
    setSelectedSubFeeling(null);
    setFinalFeeling(null);
  };

  const handleContinue = () => {
    if (finalFeeling) {
      console.log(`Proceeding with selected feeling: ${finalFeeling}`);
      router.push('/mindfulnessPage'); // Navigate to the Mindfulness Page
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
  <View style={styles.masterContainer}>
    <View style={styles.container}>
      <Timer initialTime={20} /> {/* Add Timer at the top */}
        <View style={styles.columnContainer}>
          <View style={[styles.columnSubContainer, {flex:3}]}>
            <Image source={wheelImage} style={styles.wheelImage} resizeMode="contain" />
          </View>
          <View style={[styles.columnSubContainer, {flex:2}]}>
              <View style={styles.instructionContainer}>
                {!finalFeeling ? (
                  selectedEmotion ? (
                    selectedSubFeeling ? (
                      <>
                        <Text style={styles.instruction}>
                          The last two emotions come from the outside of the wheel.
                        </Text>
                        <Text style={styles.instruction}>
                          Click on the emotion that best describes the feeling you previously selected: "{selectedSubFeeling}".
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text style={styles.instruction}>
                          The following list of emotions come from the middle of the wheel.
                        </Text>
                        <Text style={styles.instruction}>
                          Click on the emotion that best describes the feeling you previously selected: "{selectedEmotion}".
                        </Text>
                        
                      </>
                    )
                  ) : (
                    <>
                      <Text style={styles.instruction}>
                        Tier 1: Basic Emotion Category
                      </Text>
                      <Text style={styles.instruction}>
                        Select a category of emotion from the center of the wheel.
                      </Text>
                    </>
                  )
                ) : (
                  <>
                    <Text style={styles.instruction}>
                      After completing the feelings wheel activity, it seems that you may be feeling:
                    </Text>
                    <Text style={[styles.instruction, styles.boldText]}>{finalFeeling}.</Text>
                    <Text style={styles.instruction}>
                      Identifying your feelings is an important step in regulating your emotions. Well done!
                    </Text>
                    <Text style={styles.instruction}>
                      Press the reset button if you'd like to go through the feelings wheel again or click continue to progress through the application.
                    </Text>
                    
                  </>
                )}
              </View>
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
          </View>
        </View>
      <View style={styles.rowContainer}>
        <ContinueButton onPress={handleContinue} />
      </View>
    </View>
  </View>
);

};

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 20
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20
  },
  columnContainer: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  columnSubContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  rowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  wheelImage: {
    flex: 1,
    aspectRatio: 1.2
  },
  instructionContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  instruction: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    lineHeight: 22,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 50,
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
    flex: 1,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});

export default FeelingsWheelPage;
