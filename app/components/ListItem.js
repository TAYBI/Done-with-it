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

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={() => <View style={{ width: 0 }} />}
    >
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.listionCard}>
          {IconComponent}
          {image && <Image style={styles.imageProfile} source={image} />}
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
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
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.medium,
    // width: "93%",
  },
});

export default ListItem;
