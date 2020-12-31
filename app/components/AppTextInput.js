import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={27}
          color={colors.medium}
        />
      )}
      <TextInput
        clearButtonMode="always"
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 60,
    borderRadius: 35,
    flexDirection: "row",
    padding: 15,
  },
  icon: {
    marginRight: 5,
  },
});

export default AppTextInput;
