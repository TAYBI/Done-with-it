import React from "react";
import { View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginButton from "./app/components/LoginButton";
import Card from "./app/components/Card";

import image from "./app/assets/jacket.jpg";

export default function App() {
  return <Card title="Red jaket for sale!" subTitle="$100" image={image} />;
}
