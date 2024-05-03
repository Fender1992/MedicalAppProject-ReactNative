import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
  // user: null,
  // addUser: () => {},
  // deleteUser: () => {},
  user: {
    userId: "",
    firstName: "",
    lastName: "",
    dob: new Date(),
    address: "",
    password: "",
    phoneNumber: "",
    email: "",
  },
  addUser: (newUser) => {},
  deleteUser: () => {},
});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    dob: new Date(),
    address: "",
    password: "",
    phoneNumber: "",
    email: "",
  });

  function addUser(newUser) {
    setUser(newUser);
  }

  function deleteUser(user) {
    setUser({});
  }

  const value = {
    user: user,
    addUser: addUser,
    deleteUser: deleteUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
