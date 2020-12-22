import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function LoginButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, { backgroundColor: colors[props.color] }]}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // flex: 1,
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
