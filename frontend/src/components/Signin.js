//
import React, { useState } from "react";
import axios from "axios";
import * as Components from "../SigninCss";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from "@mui/material";


function Signin() {
  const [signIn, setSignIn] = useState(true);
  const [userType, setUserType] = useState(""); //declaration outside the component

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("userType", userType);
    const serializedData = Object.fromEntries(formData.entries());

    try {
      let endpoint = "";
      if (userType === "public") {
        endpoint = "http://localhost:8000/signup/public/";
      } else if (userType === "staff") {
        endpoint = "http://localhost:8000/signup/staff/";
      } else if (userType === "officer") {
        endpoint = "http://localhost:8000/signup/officer/";
      }

      const response = await axios.post(endpoint, formData);
      console.log(response.data);
      // Handle success response here

      // Reset the form
      form.reset();
    } catch (error) {
      console.log(error);
      // Handle error response here
    }
  };

  //Handle SignIn

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("userType", userType);
    const serializedData = Object.fromEntries(formData.entries());

    try {
      let endpoint = "";
      if (userType === "public") {
        endpoint = "http://localhost:8000/signin/public/";
      } else if (userType === "staff") {
        endpoint = "http://localhost:8000/signin/staff/";
      } else if (userType === "officer") {
        endpoint = "http://localhost:8000/signin/officer/";
      }

      const response = await axios.post(endpoint, formData);
      console.log(response.data);
      // Handle success response here

      // Reset the form
      form.reset();
    } catch (error) {
      console.log(error);
      // Handle error response here
    }
  };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSignUp} method="POST">
          <Components.Title>Create Account</Components.Title>

          <label htmlFor="userType" >WHO ARE YOU?:</label>
          <select id="userType" name="userType" value={userType} onChange={(e) => setUserType(e.target.value)} >
            {/* <option value="">Select User Type</option> */}
            <option value="officer">Government</option>
            <option value="public">Public</option>
            <option value="staff">Employee</option>
          </select>
           {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Who Are You?*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Who Are You?"
          onChange={handleChange}
          sx={{margin:"7px"}}
        >
          <MenuItem value={10}>Citizen</MenuItem>
          <MenuItem value={20}>Officer</MenuItem>
          <MenuItem value={30}>Staff</MenuItem>
        </Select>
      </FormControl> */}

          <Components.Input type="text" placeholder="Name" name="name" />
          <Components.Input type="text" placeholder="Address" name="address" />
          <Components.Input type="email" placeholder="Email" name="email" />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
          />
          <Components.Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <Components.Input
            type="number"
            placeholder="Citizenship No"
            name="citizenshipNo"
          />
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSignIn} method="POST">
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => setSignIn(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>नमस्कार, सचेत नागरिक</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => setSignIn(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Signin;
