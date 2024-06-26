import { StyleSheet, ImageBackground } from "react-native";
import LandingScreen from "./screens/LandingScreen";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import { UserHomeScreen } from "./screens/UserHomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import MapScreen from "./screens/MapScreen";
import UserContextProvider from "./store/context/Users-context";
import AuthContextProvider, { AuthContext } from "./store/auth.context";
import { useContext } from "react";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AuthContextProvider>
      <UserContextProvider>
        <LinearGradient
          colors={["#413ccc", "#74f0d1"]}
          style={styles.rootScreen}
        >
          <ImageBackground
            source={require("./assets/images/backgroundImg.webp")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImg}
          >
            <NavigationContainer>
              <MainNavigation />
            </NavigationContainer>
          </ImageBackground>
        </LinearGradient>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <UserContextProvider>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#B7B5F5",
          drawerStyle: { backgroundColor: "#D7D6EE" },
          headerStyle: { backgroundColor: "#413ccc" },
          headerTintColor: "white",
          headerRight: () => (
            <Ionicons
              name="exit-outline"
              size={24}
              color="white"
              onPress={authCtx.logout}
            />
          ),
        }}
      >
        <Drawer.Screen
          name="Home"
          component={UserHomeScreen}
          options={{
            drawerLabel: "User Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Maps"
          component={MapScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="map" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </UserContextProvider>
  );
}

function AuthStack() {
  return (
    <UserContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={LandingScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />

        <Stack.Screen
          name="Sign-up"
          component={RegisterScreen}
          options={{
            drawerLabel: "Sign Up",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            drawerLabel: "Login",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="pencil-outline" color={color} size={size} />
            ),
          }}
        />
      </Stack.Navigator>
    </UserContextProvider>
  );
}

function MainNavigation() {
  const authCtx = useContext(AuthContext);

  // return authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />;
  if (authCtx.isAuthenticated) {
    return <AuthenticatedStack />;
  } else {
    return <AuthStack />;
  }
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.4,
  },
});
