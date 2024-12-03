import React, { useState, useEffect, createContext, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

interface TimerProps {
  onTimerEnd?: () => void;
}

// Context for managing global timer state
interface TimerContextProps {
  isTimerVisible: boolean;
  setIsTimerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  timerDuration: number;
  setTimerDuration: React.Dispatch<React.SetStateAction<number>>;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [timerDuration, setTimerDuration] = useState(20); // Default timer duration

  return (
    <TimerContext.Provider
      value={{
        isTimerVisible,
        setIsTimerVisible,
        timerDuration,
        setTimerDuration,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }
  return context;
};

// Timer Component
const Timer: React.FC<TimerProps> = ({ onTimerEnd }) => {
  const { isTimerVisible, timerDuration } = useTimerContext();
  const [timeInSeconds, setTime] = useState(timerDuration);

  useEffect(() => {
    setTime(timerDuration); // Reset timer whenever duration changes
  }, [timerDuration]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isTimerVisible && timeInSeconds > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (timeInSeconds === 0 && onTimerEnd) {
      onTimerEnd();
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isTimerVisible, timeInSeconds, onTimerEnd]);

  if (!isTimerVisible) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{timeInSeconds}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    color: "#fff",
  },
});

export default Timer;
