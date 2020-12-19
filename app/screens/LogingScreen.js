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

export default function LoginScreen() {
  return (
    <ImageBackground source={bg} style={styles.image}>
      <SafeAreaView>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <Text>sell items you don't nees anymore</Text>
        </View>
        <View style={styles.btnRed}></View>
        <View style={styles.btnGreen}></View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: "column-reverse",
  },
  header: {
    position: "relative",
    top: -400,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  button: {
    width: "100%",
    height: 70,
  },
  btnGreen: {
    width: "100%",
    height: 70,
    alignSelf: "flex-end",
    backgroundColor: "green",
  },
  btnRed: {
    width: "100%",
    height: 70,
    alignSelf: "flex-end",
    backgroundColor: "red",
  },
});
