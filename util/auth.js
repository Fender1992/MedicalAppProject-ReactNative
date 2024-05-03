import axios from "axios";

// const API_KEY = "AIzaSyDCRsAmwU0c3XpKSFZMiAgkZQg5YVNzw_k";

// const DATABASE_URL =
//   "https://medical-app-react-native-default-rtdb.firebaseio.com/users.json";

// //const LOGIN_URL = "https://localhost:7274/api/Auth/Login";

// async function authenticate(email, password) {
//   //const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
//   const url = `https://localhost:7274/api/Auth/Login`;

//   const response = await axios.post(url, {
//     email: email,
//     password: password,
//     returnSecureToken: true,
//   });
//   return response.data.idToken; // Directly return the token
// }

// export async function createUser(
//   email,
//   password,
//   firstName,
//   lastName,
//   address,
//   phoneNumber,
//   dob
// ) {
//   try {
//     const token = await authenticate("signUp", email, password);

//     const userDetails = {
//       email: email,
//       firstName: firstName,
//       lastName: lastName,
//       address: address,
//       phoneNumber: phoneNumber,
//       dob: dob,
//     };

//     const userResponse = await axios.post(
//       `${DATABASE_URL}?auth=${token}`,
//       userDetails
//     );

//     const getUserResponse = await axios.get(
//       `${DATABASE_URL}?auth=${token}&orderBy="email"&equalTo="${email}"`
//     );

//     return [{ getResponse: userData, postResponse: userResponse.data, token }];
//   } catch (error) {
//     console.error(
//       "Error creating user:",
//       error.response ? error.response.data : error.message
//     );
//     throw error; // Re-throw the error to handle it in the calling function
//   }
// }

// export async function Login(email, password) {
//   return await authenticate("signInWithPassword", email, password); // Return the token from authenticate
// }

export async function Login(credentials) {
  const { username, password } = credentials;
  try {
    const response = await fetch(
      "https://9355-2600-8803-2b10-9200-d956-739-821f-b9e4.ngrok-free.app/api/Auth/Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    // const data = await response.json();
    // console.log("Response Data:", data);

    if (!response.ok) {
      throw new Error(`Http error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response Data:", data);
    return data;
  } catch (error) {
    console.error("Network request failed", error);
    throw error;
  }
}
