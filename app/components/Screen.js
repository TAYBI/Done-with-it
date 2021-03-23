import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constant from "expo-constants";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight + 5,
    flex: 1,
  },
});

export default Screen;
