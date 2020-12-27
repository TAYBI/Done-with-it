import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 85,
    backgroundColor: colors.danger,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItemDeleteAction;
