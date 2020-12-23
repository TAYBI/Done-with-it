import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={30}
        color={colors.white}
      />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        size={30}
        color={colors.white}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    marginTop: 30,
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
