interface EmotionConfig {
  [key: string]: number; // Emotion names with intensity/negativity scores
}

const emotionWeights: EmotionConfig = {
  Happy: 1,
  Sad: 2,
  Disgusted: 3,
  Angry: 4,
  Fearful: 4,
  Bad: 3,
  Surprised: 2,
};

export function magicSauceAlg(selectedEmotion: string, timeTaken: number): number {
  const baseTime = emotionWeights[selectedEmotion] || 1; // Default weight is 1 for undefined emotions
  const scaledTime = Math.min(Math.max(timeTaken * 0.5, 20), 120); // Scale time between 20s and 120s
  const calculatedTime = baseTime * scaledTime;

  return Math.round(Math.min(Math.max(calculatedTime, 20), 120)); // Ensure the time is within bounds
}
