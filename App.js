import React from "react";
import { ScrollView, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginButton from "./app/components/LoginButton";
import Card from "./app/components/Card";

import image from "./app/assets/jacket.jpg";
import image2 from "./app/assets/couch.jpg";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <ViewImageScreen />;
}
