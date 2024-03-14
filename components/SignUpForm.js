import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { UserContext } from "../store/context/Users-context";

function SignUpForm() {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    zipCode: "",
    phoneNumber: "",
  });

  const { addUser } = useContext(UserContext); // Assuming addUser is a function defined in your context to add a user

  const handleChange = (name, value) => {
    setInputValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(inputValues); // Here, you can replace console.log with any action, like calling addUser from context
    // addUser(inputValues);
  };

  return (
    <View style={style.formContainer}>
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
          placeholder: "mm/dd/yyyy",
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
    </View>
  );
}

export default SignUpForm;

const style = StyleSheet.create({
  formContainer: {
    padding: 15,
  },
  title: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#413ccc",
  },
});
