import React from "react";
import { Platform, StatusBar, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f1f1f1",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 100,
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "dodgerblue",
          // height: 100,
          width: 100,
          alignSelf: "stretch",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          alignSelf: "flex-end",
          height: 100,
          width: 100,
        }}
      ></View>
    </View>
  );
}
