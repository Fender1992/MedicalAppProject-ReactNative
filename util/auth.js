import axios from "axios";
import { add } from "date-fns";

const API_URL = "AIzaSyDCRsAmwU0c3XpKSFZMiAgkZQg5YVNzw_k";
const DATABASE_URL =
  "https://medical-app-react-native-default-rtdb.firebaseio.com/users.json";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_URL}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}

export async function createUser(
  email,
  password,
  firstName,
  lastName,
  address,
  phoneNumber,
  dob
) {
  await authenticate("signUp", email, password);

  const userDetails = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    address: address,
    phoneNumber: phoneNumber,
    dob: dob,
  };

  const userResponse = await axios.post(DATABASE_URL, userDetails);
  return { authResponse: authResponse.data, userResponse: userResponse.data };
}

export async function Login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
