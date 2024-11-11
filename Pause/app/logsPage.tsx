import { Text, View, StyleSheet } from "react-native";
import MenuButton from '@/components/MenuButton';

export default function logsPage() {
  return (
    <View style={styles.container}>
    <MenuButton style={styles.menuButton} onPress={() => console.log('Menu Pressed')} />
    {/* Other content for your screen */}
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
menuButton: {
  position: 'absolute',
  top: 20,         // Distance from the top of the screen
  right: 20,       // Distance from the right edge of the screen
},
});