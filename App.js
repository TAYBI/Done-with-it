import React, { useState } from "react";
import { View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

const categories = [
  {
    type: "type1",
    label: "Category1",
  },
  {
    type: "type2",
    label: "Category2",
  },
  {
    type: "type3",
    label: "Category3",
  },
];

export default function App() {
  const [category, setCategory] = useState("Category");

  return (
    <Screen style={{ padding: 10, paddingTop: 40 }}>
      <AppPicker
        setCategory={setCategory}
        placeholder="Category"
        items={categories}
        icon="apps"
      />
      <View style={{ height: 15 }} />
      <AppTextInput icon="key" secureTextEntry placeholder="Password" />
    </Screen>
  );
}
