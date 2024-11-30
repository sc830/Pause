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
  );
}
