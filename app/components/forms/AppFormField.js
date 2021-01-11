import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";

function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();

  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        // keyboardType="email-address"
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        // placeholder="Email"
      />

      <AppErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;
