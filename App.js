import React from "react";
import { View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen style={{ padding: 10, paddingTop: 40 }}>
      <AppPicker icon="apps" placeholder="Category" />
      <View style={{ height: 15 }} />
      <AppTextInput icon="key" secureTextEntry placeholder="Password" />
    </Screen>
  );
}
