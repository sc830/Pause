import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import FeelingsWheelPage from './FeelingsWheelPage';
import Grounding from './Grounding';
import Gratitude from './Gratitude';
import JournalPage from './JournalPage';
import LogsPage from './LogsPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FeelingsWheel">
        {/* Define screens */}
        <Stack.Screen name="FeelingsWheel" component={FeelingsWheelPage} options={{ title: 'Feelings Wheel' }} />
        <Stack.Screen name="Grounding" component={Grounding} options={{ title: 'Grounding Exercise' }} />
        <Stack.Screen name="Gratitude" component={Gratitude} options={{ title: 'Gratitude' }} />
        <Stack.Screen name="Journal" component={JournalPage} options={{ title: 'Journal Entry' }} />
        <Stack.Screen name="Logs" component={LogsPage} options={{ title: 'Logs' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
