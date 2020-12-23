import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.listionCard}>
      <Image style={styles.imageProfile} source={image} />
      <View style={{ paddingLeft: 10 }}>
        <Text style={{ fontSize: 16, textTransform: "capitalize" }}>
          {title}{" "}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textTransform: "capitalize",
            color: colors.medium,
          }}
        >
          {subTitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default ListItem;
