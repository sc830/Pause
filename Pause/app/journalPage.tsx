import React from 'react';
import { Text, View } from 'react-native';
import ContinueButton from '../components/ContinueButton';

const Index: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <ContinueButton onPress={() => console.log('Continue button pressed')} />
    </View>
  );
};

export default Index;