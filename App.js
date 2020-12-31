import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

export default function App() {
  const [name, setName] = useState("");

  return (
    <Screen style={{ padding: 10, paddingTop: 40 }}>
      <AppTextInput icon="account" placeholder="Email / User ame" />
      <View style={{ height: 15 }} />
      <AppTextInput icon="key" secureTextEntry placeholder="Password" />
    </Screen>
  );
}
