import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

interface TimerProps {
  initialTime: number; //initial time duration in seconds
  onTimerEnd?: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimerEnd }) => {
  const [timeInSeconds, setTime] = useState<number>(initialTime);

  useEffect(() => {
    let timer: number | undefined;
    if (timeInSeconds > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); // 1000 milliseconds = 1 second intervals
    } else if (timeInSeconds === 0) {
      if (onTimerEnd) {
        onTimerEnd();
      }
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timeInSeconds, onTimerEnd]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{timeInSeconds}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(56, 193, 234, 0.64)",
  },
  timerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffff",
  },
});

export default Timer;
