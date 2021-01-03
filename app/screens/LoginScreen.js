import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import AppTextInput from "../components/AppTextInput";
import LoginButton from "../components/LoginButton";
import Screen from "../components/Screen";

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />

      <AppTextInput
        autoCorrect={false}
        autoCapitalize="none"
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
      />
      <LoginButton
        onPress={() => console.log(email, password)}
        style={{ marginTop: 10 }}
        text="login"
        color="primary"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 40,
    marginTop: 40,
    alignSelf: "center",
  },
});

export default LoginScreen;
