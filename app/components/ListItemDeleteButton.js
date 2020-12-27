import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteButton() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color={colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    backgroundColor: colors.danger,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItemDeleteButton;
