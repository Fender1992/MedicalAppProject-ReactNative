import { ScrollView, StyleSheet, View } from "react-native";
import SignUpForm from "../components/SignUpForm";

function RegisterScreen() {
  return (
    <ScrollView>
      <SignUpForm />
    </ScrollView>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
    fontSize: 30,
  },
});
