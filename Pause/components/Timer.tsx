import React, { useState, useEffect, createContext, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '@/constants/Colors';

interface TimerProps {
  onTimerEnd?: () => void;
}

// Context for managing global timer state
interface TimerContextProps {
  isTimerVisible: boolean;
  setIsTimerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  timerDuration: number;
  setTimerDuration: React.Dispatch<React.SetStateAction<number>>;
  timerEnded: boolean; // Track if the timer has ended
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [timerDuration, setTimerDuration] = useState(15); // Default timer duration
  const [timerEnded, setTimerEnded] = useState(false); // New state for timer end

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

  useEffect(() => {
    setTime(timerDuration); // Reset timer whenever duration changes
    setTimerEnded(false); // Reset `timerEnded` when timer restarts
  }, [timerDuration, setTimerEnded]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (timeInSeconds > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (timeInSeconds === 0) {
      setTimerEnded(true); // Mark timer as ended
      if (onTimerEnd) onTimerEnd();
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isTimerVisible, timeInSeconds, setTimerEnded, onTimerEnd]);

  return (
    <View
      style={[
        styles.container,
        { opacity: isTimerVisible ? 1 : 0 }, // Make it fully transparent but still rendered
      ]}
    >
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
    backgroundColor: Colors.green,
  },
  timerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Timer;
