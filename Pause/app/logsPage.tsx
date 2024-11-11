import { Text, View } from "react-native";
import MenuButton from '@/components/MenuButton';

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
            <MenuButton/>
    </View>
  );
}
