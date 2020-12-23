import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.subTitle}>$100</Text>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="mosh hamadani"
        subTitle="5 listing"
      />
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="mosh hamadani"
        subTitle="5 listing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  textContainer: {
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "700",
  },
});

export default ListingDetailsScreen;
