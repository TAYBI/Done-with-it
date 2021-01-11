import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={[defaultStyles.text, { color: "red" }]}>{error}</Text>;
}

export default AppErrorMessage;
