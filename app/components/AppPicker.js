import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, placeholder }) {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("Category");

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={25}
              color={colors.medium}
            />
          )}
          <Text style={[defaultStyles.text, styles.text]}>
            {category ? category : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={27}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.type}
            renderItem={({ item }) => (
              <PickerItem
                key={item.value}
                text={item.label}
                onPress={() => {
                  setVisible(false);
                  setCategory(item.label);
                  // console.log(item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 60,
    borderRadius: 35,
    flexDirection: "row",
    padding: 15,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
