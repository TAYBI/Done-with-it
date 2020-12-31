import React from "react";
import { Text, TouchableOpacity } from "react-native";

import globalStyle from "../config/styles";

function PickerItem({ text, onPress }) {
  return (
    <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
      <Text style={globalStyle.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default PickerItem;
