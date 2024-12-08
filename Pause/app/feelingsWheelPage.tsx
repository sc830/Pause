import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import wheelImage from '../assets/images/feelingsWheel.png';
import Timer, { useTimerContext } from "../components/Timer"; 
import ContinueButton from '../components/ContinueButton';
import { magicSauceAlg } from '../util/magicSauceAlg';

// constants
import Colors from '@/constants/Colors';
import values from '@/constants/Values';

const FeelingsWheelPage: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedSubFeeling, setSelectedSubFeeling] = useState<string | null>(null);
  const [finalFeeling, setFinalFeeling] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [selectionTime, setSelectionTime] = useState<number | null>(null);
  const [calculatedTime, setCalculatedTime] = useState<number | null>(null);
  const { setTimerDuration,isVariableTimer,timerDuration, } = useTimerContext();

  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      setStartTime(null);
      setSelectionTime(null);
      setCalculatedTime(null);
    }, [])
  );

  const resetSelection = () => {
    setSelectedEmotion(null);
    setSelectedSubFeeling(null);
    setFinalFeeling(null);
    setSelectionTime(null);
    setCalculatedTime(null);
  };

  const handleEmotionSelect = (emotion: string) => {
    if (!startTime) {
      const now = Date.now();
      setStartTime(now); // Start the timer on the first selection
      console.log(`Timer started at: ${now}`);
    }
    setSelectedEmotion(emotion); // Set the selected emotion
  };

  const handleFinalFeelingSelect = (feeling: string) => {
    setFinalFeeling(feeling); // Set the final feeling
  
    if (startTime) {
      const now = Date.now();
      const timeTaken = (now - startTime) / 1000; // Calculate the elapsed time in seconds
      setSelectionTime(timeTaken); // Save the elapsed time
      console.log(`Timer stopped at: ${now}`);
      console.log(`Time taken to select feeling: ${timeTaken} seconds`);
  
      if (selectedEmotion) {
        const calculatedTime = magicSauceAlg(selectedEmotion, timeTaken); // Calculate the dynamic timer duration
        setCalculatedTime(calculatedTime); // Save the calculated time
  
        if (isVariableTimer) {
          // Update the timer duration only if variable timer is enabled
          setTimerDuration(calculatedTime);
          console.log(`Variable Timer ON: Timer updated to ${calculatedTime} seconds`);
        } else {
          console.log(`Variable Timer OFF: Timer remains at ${timerDuration} seconds`);
        }
      }
    }
  };
  const handleContinue = () => {
    if (finalFeeling) {
      console.log(`Proceeding with selected feeling: ${finalFeeling}`);
      console.log(`Time taken to select first emotion: ${selectionTime} seconds`);
      console.log(`Adjusted time (magicSauceAlg): ${calculatedTime} seconds`);
      router.push('/mindfulnessPage');
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

      {/* Main Content */}
        <View style={styles.columnContainer}>
          <View style={[styles.columnSubContainer, { flex: 4 }]}>
            <Image source={wheelImage} style={styles.wheelImage} resizeMode="contain" />
          </View>
          <View style={[styles.columnSubContainer, {flex:3}]}>
              <View style={styles.instructionContainer}>
                {!finalFeeling ? (
                  selectedEmotion ? (
                    selectedSubFeeling ? (
                      <>
                        <Text style={styles.instructionHeader}>
                          3: Specific Emotion
                        </Text>
                        <Text style={styles.instruction}>
                          Last, choose a specific emotion from the outside of the wheel.
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text style={styles.instructionHeader}>
                          2: Narrow Emotion Category
                        </Text>
                          <Text style={styles.instruction}>
                            Select a more specific category of emotion from the middle of the wheel.
                          </Text>
                        
                      </>
                    )
                  ) : (
                    <>
                      <Text style={styles.instructionHeader}>
                        Stage 1: Basic Emotion Category
                      </Text>
                      <Text style={styles.instruction}>
                        Select a category of emotion from the center of the wheel.
                      </Text>
                    </>
                  )
                ) : (
                  <>
                    <Text style={styles.instruction}>
                      You've identified your current emotion as:
                    </Text>
                    <Text style={[styles.instruction, styles.boldText, {fontSize: 60, marginBottom: 50}]}>{finalFeeling}</Text>
                    <Text style={styles.instruction}>
                      Identifying your feelings is an important step in regulating your emotions. Well done!
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
                      onPress={() => handleEmotionSelect(emotion)}
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
                      onPress={() => handleFinalFeelingSelect(deeperFeeling)}
                    >
                      <Text style={styles.buttonText}>{deeperFeeling}</Text>
                    </Pressable>
                  ))}
                {finalFeeling && (
                  <View style={{alignContent:'center', }}>
                    <Pressable style={[styles.resetButton, {alignSelf:'center'}]} onPress={resetSelection}>
                      <Text style={styles.buttonText}>Change selection</Text>
                    </Pressable>
                    <Pressable style={[styles.resetButton, {alignSelf:'center'}]} onPress={handleContinue}>
                      <Text style={[styles.buttonText, {fontWeight: 500}]}>Continue</Text>
                    </Pressable>
                  </View>
                )}
              </View>
          </View>
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
    backgroundColor: Colors.blue,
    paddingVertical: 20
  },
  menuButton: {
    position: "absolute",
    top: 0,
    left: 5,
    zIndex: 10,
  },
  dropdown: {
    position: "absolute",
    top: 60,
    left: 5,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
     zIndex: 10,
  },
  dropdownButton: {
    marginVertical: 5,
   
  },
  
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    marginHorizontal: 20
  },
  columnContainer: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.blue
  },
  columnSubContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue
  },
  rowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue
  },
  wheelImage: {
    flex: 1,
    aspectRatio: 1.2
  },
  instructionContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  instructionHeader: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 600,
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  instruction: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    lineHeight: 22,
    marginHorizontal: 100,
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
    backgroundColor: Colors.green,
    borderRadius: values.borderRadius,
    padding: 15,
    margin: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: Colors.green,
    borderRadius: values.borderRadius,
    padding: 15,
    margin: 10,
    minWidth: 200,
    maxWidth: 400,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: '400',
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