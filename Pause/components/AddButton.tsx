import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";
import plusIcon from "../assets/images/plus.png";

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
    height: 50,
    width: 50,
    margin: 10,
    backgroundColor: "#4f7bbd",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
