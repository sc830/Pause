import { Text, View } from "react-native";
import menuButton from '@/components/menuButton';

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
            <menuButton/>
    </View>
  );
}
