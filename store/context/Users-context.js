import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
  user: {
    firstName: "",
    lastName: "",
    dob: Date,
    address: "",
    zipCode: Number,
    phoneNumber: Number,
  },
  //   addUser: (user) => {},
});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  function addUser(user) {
    setUser((user) => [...user, user]);
  }

  function deleteUser(user) {
    setUser((user) => user.filter((user) => user.lastName !== user.lastName));
  }

  const value = {
    user: user,
    addUser: addUser,
    deleteUser: deleteUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
