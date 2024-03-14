import React from "react";
import { View } from "react-native";
import SignInForm from "../components/SignInForm";
import { LinearGradient } from "expo-linear-gradient";

function LoginScreen() {
  return (
    <LinearGradient colors={["#74f0d1", "#413ccc"]}>
      <View>
        <SignInForm />
      </View>
    </LinearGradient>
  );
}

export default LoginScreen;
