import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProtectedRoute = (props) => {


  const { Component } = props;
  const Navigate = useNavigate();

  const loginStatus=async()=>{
   const login= await axios.get(
      "http://localhost:5000/currentUser",{
        withCredentials:true
      }
     )
     if (login.data===false) {
      Navigate("/");
  }
}

  useEffect(()=>{
   loginStatus()
    }
    // else {
    //   Navigate("/userDash");
    // }
  );
  return (
    <>
      <Component/>
    </>
  );
};

export default ProtectedRoute;
