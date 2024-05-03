import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../store/context/Users-context";
import { Login } from "../util/auth";
import { AuthContext } from "../store/auth.context";

function SignInForm() {
  const navigate = useNavigation();
  const { user } = useContext(UserContext);
  const authCtx = useContext(AuthContext);

  const [signInValue, setSignInValue] = useState({
    email: user?.email || "",
    password: user?.password || "",
  });

  useEffect(() => {
    if (authCtx.isAuthenticated) {
      navigate("Home");
    }
  }, [authCtx.isAuthenticated, navigate]);

  function handleChange(field, value) {
    setSignInValue((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    const { email, password } = signInValue;

    const emailValid = email.trim().length > 0;
    const passwordValid = password.trim().length > 0;
    // const userData = {
    //   email,
    //   password,
    // };

    if (!emailValid || !passwordValid) {
      Alert.alert("Invalid credentials!");
      return false;
    }

    try {
      const response = await Login({ username: email, password });
      // const { jwtToken: token } = await Login({ username: email, password });
      // authCtx.authenticate(token);
      if (response.jwtToken) {
        authCtx.authenticate(response.jwtToken);
        navigate("Home");
      } else {
        console.log("Received response:", response);
        throw new Error("Token not received");
      }

      console.log("Logged in user data:", user);
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
