import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constant from "expo-constants";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
  },
});

export default Screen;
