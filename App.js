import { StyleSheet, ImageBackground } from "react-native";
import LandingScreen from "./screens/LandingScreen";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./screens/SignUpScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <LinearGradient colors={["#413ccc", "#74f0d1"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/backgroundImg.webp")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={LandingScreen} />
            <Stack.Screen name="Sign-up" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
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
