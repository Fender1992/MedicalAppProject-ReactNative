import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
  jwtToken: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(jwtToken) {
    setAuthToken(token);
    isAuthenticated(true);
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    jwtToken: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
