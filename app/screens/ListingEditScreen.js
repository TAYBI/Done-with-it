import React from "react";
import { StyleSheet } from "react-native";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import LoginButton from "../components/LoginButton";
import Screen from "../components/Screen";

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppTextInput style={styles.margin} placeholder="Title" />
      <AppTextInput placeholder="Price" />
      <AppPicker placeholder="Category" />
      <AppTextInput placeholder="Description" />
      <LoginButton text="Post" color="primary" />
    </Screen>
  );
}

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
