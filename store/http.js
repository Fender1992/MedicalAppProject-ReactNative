import axios from "axios";

const BACKEND_URL =
  "https://medical-app-react-native-default-rtdb.firebaseio.com";

export async function fetchUsers() {
  try {
    //switch to fetch and pass body
    const response = await axios.get(BACKEND_URL + "/users.json");

    const users = [];

    for (const key in response.data) {
      const userData = {
        //adjust user data to match .net api
        userId: key,
        firstName: response.data[key].firstName,
        lastName: response.data[key].lastName,
        dob: response.data[key].dob,
        address: response.data[key].address,
        password: response.data[key].password,
        phoneNumber: response.data[key].phoneNumber,
        email: response.data[key].email,
      };
      users.push(userData);
      // console.log(userData.firstName);
    }
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error to handle it in the calling component
  }
}
