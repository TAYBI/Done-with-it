import React from "react";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteButton from "../components/ListItemDeleteButton";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    tittle: "t1",
    description: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    tittle: "t2",
    description: "d2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    tittle: "t3",
    description: "d3",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    tittle: "t4",
    description: "d4",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.tittle}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("selected: ", item)}
            renderRightActions={() => <ListItemDeleteButton />}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessageScreen;
