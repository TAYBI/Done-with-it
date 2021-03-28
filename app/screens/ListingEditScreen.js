import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import { AppForm, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().min(3).label("Category"),
  description: Yup.string().required().nullable().label("Description"),
});

const categories = [
  { label: "category1", value: 1 },
  { label: "category2", value: 2 },
  { label: "category3", value: 3 },
];

function ListingEditScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <>
          <Screen style={styles.container}>
            <AppTextInput name="title" placeholder="Title" />
            <AppTextInput
              maxLength={8}
              name="price"
              placeholder="Price"
              keyboardType="numeric"
            />
            <AppPicker
              items={categories}
              name="category"
              placeholder="Category"
            />
            <AppTextInput
              name="description"
              multiline
              numberOfLines={3}
              placeholder="Description"
            />
            <SubmitButton text="Post" color="primary" />
          </Screen>
        </>
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
