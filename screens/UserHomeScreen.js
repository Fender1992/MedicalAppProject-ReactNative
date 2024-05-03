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
import { fetchUsers } from "../store/http";

export function UserHomeScreen() {
  const navigate = useNavigation();
  const { user } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await fetchUsers();
        // console.log("Fetched Users:", users);
        if (user && user.userId) {
          const currentUser = users.find(
            (fetchedUser) => fetchedUser.userId === user.userId
          );
          console.log("Current user:", currentUser);
          setLoggedInUser(currentUser);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, [user]);

  // const users = userCtx.user.filter((user) => {});
  //   // async function getUser() {
  //   //   if (user?.firebaseId) {
  //   //     const users = await getUserInfo(user?.firebaseId);
  //   //     setUserInfo(users);
  //   //   }
  //   // }

  //   // if (user?.firebaseId) {
  //   //   getUser();
  //   // }
  //   async function getUserInfo() {
  //     if (user?.firebaseId) {
  //       const response = await axios.get(
  //         `https://medical-app-react-native-default-rtdb.firebaseio.com/users.json`
  //       );
  //       if (response.data) {
  //         setUserInfo({
  //           id: user.firebaseId,
  //           firstName: response.data.firstName,
  //         });
  //       }
  //     }
  //   }
  //   getUserInfo();
  // }, [user]);

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
            Welcome, {loggedInUser ? loggedInUser.firstName : "Loading..."}
            {}
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
