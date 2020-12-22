import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 80,
        backgroundColor: "#f8f4f4",
      }}
    >
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle} t>
            {subTitle}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 200,
  },
  image: {
    width: "100%",
    height: 210,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  textContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: colors.secondary,
  },
});

export default Card;