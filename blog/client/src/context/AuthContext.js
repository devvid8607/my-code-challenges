import axios from "axios";
import Cookies from "js-cookie";
import { useState, createContext, useEffect } from "react";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      {
        withCredentials: true,
      }
    );
    // Cookies.set("access_token", res.data.jwt);
    // console.log(res.data);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    console.log("in logout");
    const res = await axios.post("http://localhost:8800/api/auth/logout");
    Cookies.remove("access_token");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    console.log(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
