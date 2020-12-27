import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={() => <View style={{ width: 0 }} />}
    >
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.listionCard}>
          <Image style={styles.imageProfile} source={image} />
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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
  title: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  subTitle: {
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.medium,
  },
});

export default ListItem;
