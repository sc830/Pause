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

  // Scale time more softly, avoiding immediate aggressive clamping
  let scaledTime = timeTaken * 0.5;

  if (scaledTime < 20) {
    scaledTime = 20 + (scaledTime / 2); // Adjust low times gently
  } else if (scaledTime > 120) {
    scaledTime = 120 - ((scaledTime - 120) / 2); // Adjust high times gently
  }

  // Final calculated time with emotion weighting
  const calculatedTime = baseTime * scaledTime;

  // Final clamping to ensure safety
  return Math.round(Math.min(Math.max(calculatedTime, 20), 120));
}
