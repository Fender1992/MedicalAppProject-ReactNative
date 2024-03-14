import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SignUpScreen from "./SignUpScreen";

function LandingScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("Sign-up");
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Medicine Your Way</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={pressHandler}>Get Started</PrimaryButton>
        <PrimaryButton>Login</PrimaryButton>
      </View>
    </View>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 150,
    marginHorizontal: 20,
    backgroundColor: "#D4FFFF",
    padding: 16,
    borderRadius: 8,
    elevation: 20,
    shadowColor: "#5D59C4",
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#5D59C4",
  },
  buttonsContainer: {
    backgroundColor: "#D4FFFF",
    elevation: 20,
    shadowColor: "#5D59C4",
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
