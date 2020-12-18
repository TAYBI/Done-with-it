import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    // <View></View>
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: landscape ? "100%" : "30%",
          backgroundColor: "dodgerblue",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "#f1f1f1",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "white",
  },
});
