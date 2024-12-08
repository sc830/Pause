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
  timerDuration: number | null;
  setTimerDuration: React.Dispatch<React.SetStateAction<number | null>>;
  timerEnded: boolean;
  setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
  isVariableTimer: boolean;
  setIsVariableTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTimerVisible, setIsTimerVisible] = useState(true);
  const [timerDuration, setTimerDuration] = useState<number | null>(null); // Initialize without a default
  const [timerEnded, setTimerEnded] = useState(false);
  const [isVariableTimer, setIsVariableTimer] = useState(false); // Toggle between manual and variable

  return (
    <TimerContext.Provider
      value={{
        isTimerVisible,
        setIsTimerVisible,
        timerDuration,
        setTimerDuration,
        timerEnded,
        setTimerEnded,
        isVariableTimer,
        setIsVariableTimer,
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
  const { isTimerVisible, timerDuration, setTimerEnded, isVariableTimer } = useTimerContext();
  const [timeInSeconds, setTime] = useState(timerDuration || 15);

  // Sync local state with global duration when timerDuration changes
  useEffect(() => {
    if (timerDuration !== null) {
      setTime(timerDuration);
      setTimerEnded(false); // Reset timerEnded when timer resets
    }
  }, [timerDuration, setTimerEnded]);

  // Timer countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (timeInSeconds > 0) {
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
