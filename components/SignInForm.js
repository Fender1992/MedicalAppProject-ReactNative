import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "./Input";

function SignInForm() {
  return (
    <View>
      <View>
        <Input
          label="Email"
          textInputConfig={{
            keyboardType: "email-address",
          }}
        />
        <Input
          label="Password"
          textInputConfig={{
            keyboardType: "default",
            maxLength: 14,
            minLength: 6,
          }}
        />
      </View>
    </View>
  );
}

export default SignInForm;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    backgroundColor: "#D4FFFF",
    width: "100%",
    height: 100,
  },
});
