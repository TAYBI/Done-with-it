import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function LoginButton({ style, onPress, text, color }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LoginButton;
