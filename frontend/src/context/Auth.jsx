import React, { useState, createContext, Children } from "react";

export const AuthContext = createContext({});

const Auth = ({ Children }) => {
  const isTokenPresent =
    sessionStorage.getItem("token") || localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(isTokenPresent)
  );
  const [accessToken, setAccessToken] = useState(isTokenPresent);

  const signin = (accessToken, callback) => {
    setIsAuthenticated(true);
    setAccessToken(accessToken);
    sessionStorage.setItem("token", accessToken);
    localStorage.setItem("token", accessToken);
    callback();
  };
  const value = {
    isAuthenticated,
    setIsAuthenticated,
    accessToken,
    setAccessToken,
    signin,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>
    </>
  );
};

export default Auth;
