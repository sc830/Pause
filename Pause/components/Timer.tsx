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
  timerEnded: boolean;
  setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTimerVisible, setIsTimerVisible] = useState(true);
  const [timerDuration, setTimerDuration] = useState(20); // Default timer duration
  const [timerEnded, setTimerEnded] = useState(false); // State to track if timer has ended

  return (
    <TimerContext.Provider
      value={{
        isTimerVisible,
        setIsTimerVisible,
        timerDuration,
        setTimerDuration,
        timerEnded,
        setTimerEnded,
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
  const { isTimerVisible, timerDuration, setTimerEnded } = useTimerContext();
  const [timeInSeconds, setTime] = useState(timerDuration);

  // Sync local state with global duration when timerDuration changes
  useEffect(() => {
    setTime(timerDuration);
    setTimerEnded(false); // Reset timerEnded when timer resets
  }, [timerDuration, setTimerEnded]);

  // Timer countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isTimerVisible && timeInSeconds > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (timeInSeconds === 0) {
      setTimerEnded(true); // Mark the timer as ended
      if (onTimerEnd) onTimerEnd(); // Trigger optional onTimerEnd callback
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerVisible, timeInSeconds, setTimerEnded, onTimerEnd]);

  // Hide the timer if it's not visible
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
    right: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    backgroundColor: "rgba(56, 193, 234, 0.64)",
  },
  timerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Timer;
