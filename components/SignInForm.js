import React, { useContext, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../store/context/Users-context";
import { Login } from "../util/auth";

function SignInForm() {
  const navigate = useNavigation();
  const { user } = useContext(UserContext);
  const [signInValue, setSignInValue] = useState({
    email: user?.email || "",
    password: user?.zipCode || "",
  });

  function handleChange(field, value) {
    setSignInValue((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    const { email, password } = signInValue;

    const userData = {
      email,
      password,
    };

    const emailValid = userData.email.trim().length > 0;
    const passwordValid = userData.password.trim().length > 0;
    if (!emailValid || !passwordValid) {
      Alert.alert("Invalid credentials!");
      return false;
    }

    try {
      await Login(signInValue.email, signInValue.password);
      navigate.navigate("Home");
    } catch (error) {
      console.log("Login Failed", error);
      Alert.alert(
        "Login failed",
        "Please check your credentials and try again."
      );
    }
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <Input
          label="Email Address"
          value={signInValue.email}
          onChangeText={(value) => handleChange("email", value)}
          textInputConfig={{
            keyboardType: "email-address",
          }}
        />
        <Input
          label="Password"
          value={signInValue.password}
          onChangeText={(value) => handleChange("password", value)}
          secureTextEntry={true}
          textInputConfig={{
            keyboardType: "default",
            minLength: 6,
          }}
        />
        <PrimaryButton onPress={handleSubmit}>Submit</PrimaryButton>
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
