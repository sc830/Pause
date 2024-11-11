import { Text, View } from "react-native";
import ContinueButton from '@/components/ContinueButton';

export default function logsPage() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
            <Text>This is the logs screen.</Text>
            <ContinueButton/>
    </View>
  );
}
