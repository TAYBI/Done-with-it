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
  return (
    <View
      style={
        {
          // backgroundColor: "#f8f4f4",
          // paddingTop: 40,
          // paddingBottom: 10,
        }
      }
    >
      <ListingDetailsScreen />
      {/* <ScrollView
        style={{
          backgroundColor: "#f8f4f4",
          // paddingVertical: 40,
        }}
        // contentContainerStyle={{ flex: 1 }}
      > */}
      {/* <Card title="Red jaket for sale!" subTitle="$100" image={image} />
        <Card
          title="Coath in greate condition!"
          subTitle="$900"
          image={image2}
        />
        <Card
          title="Coath in greate condition!"
          subTitle="$900"
          image={image2}
        />
        <Card title="Red jaket for sale!" subTitle="$100" image={image} /> */}
      {/* </ScrollView> */}
    </View>
  );
}
