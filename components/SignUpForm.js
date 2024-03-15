import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function SignUpForm({ navigation }) {
  const navigate = useNavigation();
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    zipCode: "",
    phoneNumber: "",
  });

  function handleChange(field, value) {
    setInputValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  // function handleSubmit() {
  //   const userData = {
  //     firstName: inputValues.firstName,
  //     lastName: inputValues.lastName,
  //     dob: new Date(inputValues.dob),
  //     address: inputValues.dob,
  //     zipCode: inputValues.dob,
  //     phoneNumber: inputValues.phoneNumber,
  //   };
  //   console.log(userData);
  // }

  function handleSubmit() {
    const { dob, ...rest } = inputValues;
    // const formattedDob = dob ? new Date(dob) : null;
    const userData = {
      ...rest,
      dob: new Date(inputValues.dob),
    };
    navigate.navigate("Home");
    axios.post(
      "https://medical-app-react-native-default-rtdb.firebaseio.com/users.json",
      userData
    );
    console.log(userData);
  }

  return (
    <ScrollView style={style.formContainer}>
      <Text style={style.title}>Registration Form</Text>
      <Input
        label="First Name"
        value={inputValues.firstName}
        onChangeText={(value) => handleChange("firstName", value)}
      />
      <Input
        label="Last Name"
        value={inputValues.lastName}
        onChangeText={(value) => handleChange("lastName", value)}
      />
      <Input
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
      />
      <Input
        label="Zip Code"
        value={inputValues.zipCode}
        onChangeText={(value) => handleChange("zipCode", value)}
        textInputConfig={{ maxLength: 5, keyboardType: "numeric" }}
      />
      <Input
        label="Phone Number"
        value={inputValues.phoneNumber}
        onChangeText={(value) => handleChange("phoneNumber", value)}
        textInputConfig={{ maxLength: 10, keyboardType: "phone-pad" }}
      />
      <PrimaryButton onPress={handleSubmit}>Submit</PrimaryButton>
    </ScrollView>
  );
}

export default SignUpForm;

const style = StyleSheet.create({
  formContainer: {
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#413ccc",
  },
});
