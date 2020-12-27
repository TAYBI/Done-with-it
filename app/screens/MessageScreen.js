import React, { useState } from "react";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const initMessages = [
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

function MessageScreen() {
  const [messages, setMessages] = useState(initMessages);
  const handleDelete = (item) => {
    // delete message from message
    // const newMessages = messages.filter((msg) => msg.id !== item.id);
    // setMessages(newMessages);
    setMessages(messages.filter((msg) => msg.id !== item.id));
  };

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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
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
