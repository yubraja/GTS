import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const Navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      Navigate("/");
    }
  });
  return (
    <>
      <Component/>

    </>
  );
};

export default ProtectedRoute;
