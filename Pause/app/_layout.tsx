import { Stack } from "expo-router";
import { useAuth, AuthProvider } from '@/contexts/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name = "logsPage" />
      </Stack>
    </AuthProvider>
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="logsPage" options={{ title: "Logs" }} />
      <Stack.Screen name="feelingsWheelPage" options={{ title: "Feelings Wheel" }} />
      <Stack.Screen name="journalPage" options={{ title: "Journal" }} />
      <Stack.Screen name="grounding" options={{ title: "Grounding Exercise" }} />
    </Stack>
  );
}
