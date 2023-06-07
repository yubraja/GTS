
import * as Components from "../SigninCss";
import React, { useState } from "react";
import axios from "axios";


function Signin() {
  const [signIn, setSignIn] = useState(true);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post("http://localhost:8000/signup/", formData);
      console.log(response.data);
      // Handle success response here

      // Reset the form
      form.reset();
    } catch (error) {
      console.log(error);
      // Handle error response here
    }
  }
    
    // Define the toggle function
  const toggle = (value) => {
    setSignIn(value);
  };

    return(
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSignUp}>
          <Components.Title>Create Account</Components.Title>

          <label for="cars">WHO ARE YOU?:</label>
          <select id="cars" name="cars">
            <option value="volvo">GOVERNMENT</option>
            <option value="saab">PUBLIC</option>
            <option value="fiat">EMPLOYEE</option>
          </select>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="text" placeholder="Address" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Input type="password" placeholder="Confirm Password" />
          <Components.Input type="number" placeholder="Citizenship No" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>नमस्कार, सचेत नागरिक</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
    
  );
 
}

export default Signin;
