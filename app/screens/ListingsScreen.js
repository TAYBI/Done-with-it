import React from "react";
import { FlatList, View } from "react-native";
import Card from "../components/Card";

const items = [
  {
    id: 1,
    title: "red jacket in a good condition!",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch to sell",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen() {
  return (
    <View style={{ padding: 5 }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`\$${item.price}`}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

export default ListingsScreen;
