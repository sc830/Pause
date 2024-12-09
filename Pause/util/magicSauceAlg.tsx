interface EmotionConfig {
  [key: string]: number; // Emotion names with intensity/negativity scores
}

const emotionWeights: EmotionConfig = {
  Happy: 1,
  Sad: 1.5,
  Disgusted: 1.5,
  Angry: 2.5,
  Fearful: 2.5,
  Bad: 1.5,
  Surprised: 1,
};

export function magicSauceAlg(selectedEmotion: string, timeTaken: number): number {
  const userAvgIDTime = 8;   // stand-in for user data

  const feelignWeight = emotionWeights[selectedEmotion] || 1; // Default weight is 1 for undefined emotions

  // compute scale based on user's typical ID time
  let scaledTime = (timeTaken/userAvgIDTime)*10;    // goal for avg time is 20 sec

  if (scaledTime < 15) {
    scaledTime = 10 + (scaledTime / 2); // adjust times below limit
  } else if (scaledTime > 120) {
    scaledTime = 120 - ((scaledTime - 120) / 2); // Adjust times above limit
  }

  // Final calculated time with emotion weighting
  const calculatedTime = feelignWeight * scaledTime;

  // clamp to max and min times
  return Math.round(Math.min(Math.max(calculatedTime, 15), 120));
}
