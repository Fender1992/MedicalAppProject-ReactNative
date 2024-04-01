import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { UserContext } from "../store/context/Users-context";

export function UserHomeScreen() {
  const navigate = useNavigation();
  const { user } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function getUser() {
      if (user?.firebaseId) {
        const users = await getUserInfo(user?.firebaseId);
        setUserInfo(users);
      }
    }

    if (user?.firebaseId) {
      getUser();
    }
  }, [user]);
  async function getUserInfo() {
    const response = await axios.get(
      `https://medical-app-react-native-default-rtdb.firebaseio.com/users.json`,
      {
        id: firebaseId,
        ...response.data,
      }
    );
    return response.data ? { id: firebaseId, ...response.data } : null;
  }
  //   const users = [];

  //   for (const i in userData.data) {
  //     users.push({
  //       id: i,
  //       firstName: userData.data[i].firstName,
  //       lastName: userData.data[i].lastName,
  //     });
  //   }
  //   return users;
  // }

  function mapHandler() {
    navigate.navigate("Maps");
  }

  return (
    <ImageBackground
      source={require("../assets/images/backgroundImg.webp")}
      resizeMode="cover"
      style={style.rootScreen}
      imageStyle={style.backgroundImg}
    >
      <ScrollView>
        <View>
          <Text style={style.welcomeMessage}>
            {" "}
            Welcome, {userInfo ? `${userInfo.firstName}` : "Loading..."}{" "}
          </Text>
          <Text style={style.message}>What Would you like to do?</Text>
        </View>
        <View style={style.optContainer}>
          <View style={style.options}>
            <Pressable
              onPress={mapHandler}
              android_ripple={{ color: "#5D59C4" }}
            >
              <Text style={style.label}>Schedule Appointment</Text>
            </Pressable>
          </View>
          <View style={style.options}>
            <Pressable android_ripple={{ color: "#5D59C4" }}>
              <Text style={style.label}>Labs</Text>
            </Pressable>
          </View>
          <View style={style.options}>
            <Pressable android_ripple={{ color: "#5D59C4" }}>
              <Text style={style.label}>My Info</Text>
            </Pressable>
          </View>
          <View style={style.options}>
            <Pressable android_ripple={{ color: "#5D59C4" }}>
              <Text style={style.label}>Order Equipment</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  welcomeMessage: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#413ccc",
  },
  message: {
    fontSize: 18,
    textAlign: "center",
  },
  options: {
    backgroundColor: "#413ccc",
    padding: 10,
    margin: 15,
    elevation: 20,
    shadowColor: "#5D59C4",
    borderRadius: 15,
  },
  optContainer: {
    padding: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.4,
  },
});
