import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.subTitle}>$100</Text>
      </View>
      <View style={styles.listionCard}>
        <Image
          style={styles.imageProfile}
          source={require("../assets/mosh.jpg")}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 16, textTransform: "capitalize" }}>
            Mosh hamadani
          </Text>
          <Text
            style={{
              fontSize: 16,
              textTransform: "capitalize",
              color: colors.medium,
            }}
          >
            5 Listing
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  imageProfile: {
    width: 64,
    height: 64,
    borderRadius: 45,
  },
  listionCard: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 15,
  },
  textContainer: {
    backgroundColor: colors.white,
    padding: 20,
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
