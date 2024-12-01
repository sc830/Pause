import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext"; // Wrap the app in AuthProvider

export default function RootLayout() {
  return (
    <>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Welcome" }} />
          <Stack.Screen name="logsPage" options={{ title: "Logs" }} />
          <Stack.Screen name="logsSubpage" options={{ title: "Log Details" }} /> {/* Added subLogs */}
          <Stack.Screen
            name="feelingsWheelPage"
            options={{ title: "Feelings Wheel" }}
          />
          <Stack.Screen name="grounding" options={{ title: "Grounding" }} />
          <Stack.Screen name="gratitude" options={{ title: "Gratitude" }} />
          <Stack.Screen name="journalPage" options={{ title: "Journal" }} />
          <Stack.Screen
            name="settingsPage"
            options={{ title: "Settings" }}
          />
        </Stack>
      </AuthProvider>
    </>
  );
}
