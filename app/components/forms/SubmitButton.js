import { useFormikContext } from "formik";
import React from "react";
import LoginButton from "../LoginButton";

function SubmitButton({ text, color }) {
  const { handleSubmit } = useFormikContext();

  return (
    <LoginButton
      onPress={handleSubmit}
      style={{ marginTop: 10 }}
      text={text}
      color={color}
    />
  );
}

export default SubmitButton;
