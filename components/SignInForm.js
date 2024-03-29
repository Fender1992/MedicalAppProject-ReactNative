import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";

function SignInForm() {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Input
          label="Email Address"
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
        <PrimaryButton>Submit</PrimaryButton>
      </View>
    </View>
  );
}

export default SignInForm;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#D4FFFF",
    elevation: 20,
    shadowColor: "#5D59C4",
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 200,
  },
});
