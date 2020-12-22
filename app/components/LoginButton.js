import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function LoginButton(props) {
  let color = props.color == "secondary" ? colors.secondary : colors.primary;
  return (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
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
