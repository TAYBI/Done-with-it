import React from "react";
import bg from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import LoginButton from "../components/LoginButton";

export default function LoginScreen() {
  return (
    <ImageBackground blurRadius={3} source={bg} style={styles.image}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.text}>sell items you don't nees anymore</Text>
      </View>
      <View style={styles.btnContainer}>
        <LoginButton text="Login" />
        <LoginButton text="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  header: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    width: "100%",
    height: 70,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 30,
    paddingTop: 15,
    textAlign: "center",
    textTransform: "capitalize",
  },
  btnContainer: {
    width: "90%",
    height: 130,
    justifyContent: "space-between",
    bottom: 30,
  },
});
