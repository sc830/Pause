import { Text, View } from "react-native";
import ContinueButton from '@/components/ContinueButton';
import TitleBar from '@/components/TitleBar';
import TextBox from '@/components/TextBox';

import { colors, reusedStyles, values } from '@/constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaProvider>
      <TitleBar title='Header'/>
        <View>
        </View>
      <ContinueButton/>
    </SafeAreaProvider>
  );
}
