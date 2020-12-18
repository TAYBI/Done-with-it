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
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "tomato",
          flexGrow: 1,
          height: 100,
          width: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          height: 100,
          width: 100,
        }}
      ></View>
      {/* <View
        style={{
          backgroundColor: "green",
          height: 300,
          width: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "orange",
          height: 100,
          width: 100,
        }}
      ></View> */}
    </View>
  );
}
