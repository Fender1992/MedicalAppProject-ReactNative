import React, { useState, useContext } from "react";
import { StyleSheet, Text, ScrollView, Alert } from "react-native";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../store/context/Users-context";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth.context";
import { useEffect } from "react";

function SignUpForm({ navigation }) {
  const navigate = useNavigation();
  const { user } = useContext(UserContext);
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [inputValues, setInputValues] = useState({
    // firstName: user?.firstName || "",
    // lastName: user?.lastName || "",
    // dob: user?.dob || "",
    // address: user?.address || "",
    password: user?.password || "",
    // phoneNumber: user?.phoneNumber || "",
    email: user?.email || "",
  });

  useEffect(() => {
    if (authCtx.isAuthenticated) {
      navigate("Home");
    }
  }, [authCtx.isAuthenticated, navigate]);

  function handleChange(field, value) {
    setInputValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    const { email, password } = inputValues;
    // const userData = {
    //   email,
    //   password,
    // };
    // const isValid = user.validate();
    // if (isValid) {
    // const firstNameValid = userData.firstName.trim().length > 0;
    // const lastNameValid = userData.lastName.trim().length > 0;
    const emailValid = inputValues.email.trim().length > 0;
    // const dobValid = userData.dob.toString() !== "Invalid Date";
    // const addressValid = userData.address.trim().length > 0;
    const passwordValid = inputValues.password.length >= 6;
    // const phoneNumberValid = userData.phoneNumber.length > 0;

    if (
      // !firstNameValid ||
      // !lastNameValid ||
      // !dobValid ||
      !emailValid ||
      // !addressValid ||
      !passwordValid
      // !phoneNumberValid
    ) {
      Alert.alert("Invalid input", "Please check user form!");
      return false;
    }

    try {
      setIsAuthenticating(true);
      const userData = await createUser(
        inputValues.email,
        inputValues.password
        // inputValues.firstName,
        // inputValues.lastName,
        // inputValues.address,
        // inputValues.dob,
        // inputValues.phoneNumber
      );
      if (userData.token) {
        authCtx.authenticate(userData.token);
        console.log("User created:", userData);
        setIsAuthenticating(false);
        navigate.navigate("Home");
      } else {
        setIsAuthenticating(false);
        console.error("Error creating user: Token not received");
        Alert.alert("Error", "Failed to create user account.");
      }
    } catch (error) {
      setIsAuthenticating(false);
      // console.error("Error creating user:", error);
      Alert.alert("Error", "Failed to create user account.");
    }
  }

  return (
    <ScrollView style={style.formContainer}>
      <Text style={style.title}>Registration Form</Text>
      {/* <Input
        label="First Name"
        value={inputValues.firstName}
        onChangeText={(value) => handleChange("firstName", value)}
        textInputConfig={{
          placeholder: "John",
        }}
      />
      <Input
        label="Last Name"
        value={inputValues.lastName}
        onChangeText={(value) => handleChange("lastName", value)}
        textInputConfig={{
          placeholder: "Doe",
        }}
      /> */}
      <Input
        label="Email"
        value={inputValues.email}
        onChangeText={(value) => handleChange("email", value)}
        textInputConfig={{
          placeholder: "youremail@gmail.com",
        }}
      />
      {/* <Input
        label="DOB"
        value={inputValues.dob}
        onChangeText={(value) => handleChange("dob", value)}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          keyboardType: "numeric",
        }}
      />
      <Input
        label="Address"
        value={inputValues.address}
        onChangeText={(value) => handleChange("address", value)}
        textInputConfig={{
          placeholder: "123 Street str",
        }}
      /> */}
      <Input
        label="Password"
        value={inputValues.password}
        onChangeText={(value) => handleChange("password", value)}
        secureTextEntry={true}
        textInputConfig={{
          minLength: 6,
        }}
      />
      {/* <Input
        label="Phone Number"
        value={inputValues.phoneNumber}
        onChangeText={(value) => handleChange("phoneNumber", value)}
        textInputConfig={{
          placeholder: "123-456-7890",
          maxLength: 14,
          keyboardType: "phone-pad",
        }}
      /> */}
      <PrimaryButton onPress={handleSubmit}>Submit</PrimaryButton>
    </ScrollView>
  );
}

export default SignUpForm;

const style = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    paddingBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#413ccc",
  },
});
