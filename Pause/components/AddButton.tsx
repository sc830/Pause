import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";
import plusIcon from "../assets/images/plus.png";
import Colors from '@/constants/Colors';

export default function AddButton(props: { onPress?: () => void }) {
  const { onPress } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image source={plusIcon} style={styles.icon} resizeMode="contain" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 3,
    height: 60,
    width: 60,
    margin: 10,
    backgroundColor: Colors.green,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
