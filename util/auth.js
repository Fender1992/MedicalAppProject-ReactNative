import axios from "axios";

const API_KEY = "AIzaSyDCRsAmwU0c3XpKSFZMiAgkZQg5YVNzw_k";

const DATABASE_URL =
  "https://medical-app-react-native-default-rtdb.firebaseio.com/users.json";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  return response.data.idToken; // Directly return the token
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
  try {
    const token = await authenticate("signUp", email, password);

    const userDetails = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      dob: dob,
    };

    const userResponse = await axios.post(
      `${DATABASE_URL}?auth=${token}`,
      userDetails
    );
    return { userResponse: userResponse.data, token };
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw the error to handle it in the calling function
  }
}

export async function Login(email, password) {
  return await authenticate("signInWithPassword", email, password); // Return the token from authenticate
}
