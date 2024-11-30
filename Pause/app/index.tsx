import React from 'react';
import { Text, View } from 'react-native';
import { useRouter } from 'expo-router'; // Use the router from Expo Router
import ContinueButton from '../components/ContinueButton';

const Index: React.FC = () => {
  const router = useRouter(); // Hook for navigation

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome to Pause. Let's get started!</Text>
      <ContinueButton onPress={() => router.push('/feelingsWheelPage')} />
    </View>
  );
};

export default Index;
