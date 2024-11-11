import { Text, View } from "react-native";
import ContinueButton from '@/components/ContinueButton';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <ContinueButton/>
    </View>
  );
}
