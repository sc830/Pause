import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext"; // Wrap the app in AuthProvider
import { TimerProvider } from "@/components/Timer"; // Import TimerProvider


export default function RootLayout() {
  return (
    <>
      <AuthProvider>
        
        <TimerProvider> {/* Wrap the entire app in TimerProvider */}
          <Stack>
            <Stack.Screen name="index" options={{ title: "Welcome" }} />
            <Stack.Screen name="feelingsWheelPage" options={{ title: "Feelings Wheel" }} />
            <Stack.Screen name="mindfulnessPage" options={{ title: "Mindfulness" }} />
            <Stack.Screen name="grounding" options={{ title: "Grounding" }} />
            <Stack.Screen name="gratitude" options={{ title: "Gratitude" }} />
            <Stack.Screen name="logsPage" options={{ title: "Logs"}} />
            <Stack.Screen name="journalPage" options={{ title: "Journal"}} />
            <Stack.Screen name="settingsPage" options={{ title: "Settings"}} />
          </Stack>
        </TimerProvider>
      </AuthProvider>
    </>
  );
}
