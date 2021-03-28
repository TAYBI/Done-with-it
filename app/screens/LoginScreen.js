import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values.email, values.password)}
        validationSchema={validationSchema}
      >
        <>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            placeholder="Email"
          />

          <AppFormField
            autoCorrect={false}
            autoCapitalize="none"
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
          />

          <SubmitButton text="login" color="primary" />
        </>
      </AppForm>
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
  text: {
    color: "red",
  },
});

export default LoginScreen;
