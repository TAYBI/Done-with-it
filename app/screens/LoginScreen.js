import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import LoginButton from "../components/LoginButton";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

import * as Yup from "yup";
import AppErrorMessage from "../components/AppErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values.email, values.password)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              placeholder="Email"
            />

            <AppErrorMessage visible={touched.email} error={errors.email} />

            <AppTextInput
              autoCorrect={false}
              autoCapitalize="none"
              icon="lock"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              placeholder="Password"
              secureTextEntry
            />

            <AppErrorMessage
              visible={touched.password}
              error={errors.password}
            />
            {/* {errors.password && (
              <Text style={[defaultStyles.text, styles.text]}>
                {errors.password}
              </Text>
            )} */}

            <LoginButton
              onPress={handleSubmit}
              style={{ marginTop: 10 }}
              text="login"
              color="primary"
            />
          </>
        )}
      </Formik>
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
