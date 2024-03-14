import { StyleSheet, ImageBackground } from "react-native";
import LandingScreen from "./screens/LandingScreen";
import { LinearGradient } from "expo-linear-gradient";
import SignUpScreen from "./screens/SignUpScreen";

export default function App() {
  return (
    <LinearGradient colors={["#413ccc", "#74f0d1"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/backgroundImg.webp")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <LandingScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.4,
  },
});
