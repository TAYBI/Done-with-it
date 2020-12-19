import React from "react";
import bg from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";

export default function LoginScreen() {
  return (
    <ImageBackground source={bg} style={styles.image}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text>sell items you don't nees anymore</Text>
      </View>
      <View style={styles.btnRed}></View>
      <View style={styles.btnGreen}></View>
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
  btnGreen: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  btnRed: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
