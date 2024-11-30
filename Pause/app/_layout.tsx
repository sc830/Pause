import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="logsPage" options={{ title: "Logs" }} />
      <Stack.Screen name="feelingsWheelPage" options={{ title: "Feelings Wheel" }} />
      <Stack.Screen name="journalPage" options={{ title: "Journal" }} />
      <Stack.Screen name="grounding" options={{ title: "Grounding Exercise" }} />
    </Stack>
  );
}
