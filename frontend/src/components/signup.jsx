import React, { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roles = [
  {
    value: "Citizen",
    label: "Citizen || नागरिक",
  },
  {
    value: "Driver",
    label: "Driver || सवारी चालक",
  },
];

const defaultTheme = createTheme();

export default function SignUp() {
  const [dataRegister, setDataRegister] = useState({
    role: "Citizen", // Set the default role here
    firstName: "1",
    lastName: "2",
    password2: "12",
    latitude: "",
    longitude: "",
    number: "12",
    email: "b@gmail.com",
    password: "12",
  });

  const changeValue = (e) => {
    const { value, name } = e.target;
    e.preventDefault();
    console.log(value, name);
    setDataRegister({ ...dataRegister, [name]: value });
  };
  console.log(dataRegister);
  const handleSubmit = async (event) => {
    event.preventDefault();

<<<<<<< HEAD
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        dataRegister
      );
      //get response from backend
      const msg = response.data.msg;
      console.log(msg);
    } catch (error) {
      console.error("Registration failed:", error);
=======
  const handleSubmit = async (data) => {
<<<<<<< Updated upstream
    const response = await fetch("http://127.0.0.1:8000/api/user/signup/", {
=======
    const response = await fetch("http://localhost:8000/api/user/register/", {
>>>>>>> Stashed changes
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.body);

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error(response.statusText);
>>>>>>> 50b2adebbbf37599cb36a017175364c577a48113
    }
  };

  const showLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  function success(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    setDataRegister({
      ...dataRegister,
      latitude: lat,
      longitude: lng,
    });
  }

  function error(err) {
    if (err.code === 1) {
      alert("Please provide geolocation access!!");
    } else {
      alert("Cannot get current location");
    }
  }

  //toast message
  const notify = () => toast("Wow so easy!");

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 0, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-select-roles-native"
                  select
                  name="role"
                  label="Select Your Role"
                  defaultValue="Citizen"
                  autoFocus
                  onChange={changeValue}
                  value={dataRegister.role}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {roles.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
<<<<<<< HEAD
                  onChange={changeValue}
                  value={dataRegister.firstName}
                  label="First Name"
=======
                  label=" Name"
>>>>>>> 50b2adebbbf37599cb36a017175364c577a48113
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={changeValue}
                  value={dataRegister.lastName}
                  autoComplete="off"
                />
              </Grid> */}

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="latitude"
                  name="latitude"
                  label="latitude"
                  autoComplete="off"
                  onChange={changeValue}
                  value={dataRegister.latitude}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="longitude"
                  label="longitude"
                  name="longitude"
                  autoComplete="off"
                  onChange={changeValue}
                  value={dataRegister.longitude}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="contained"
                  bgcolor="primary"
                  onClick={showLocation}
                  sx={{ p: 1.9 }}
                >
                  Fetch
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="standard-number"
                  label={
                    dataRegister.role === "Citizen"
                      ? "Phone No"
                      : "License Number"
                  }
                  name="number"
                  type="number"
                  onChange={changeValue}
                  value={dataRegister.number}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={dataRegister.email}
                  onChange={changeValue}
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={dataRegister.password}
                  onChange={changeValue}
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={notify}
            >
              Sign Up
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              {/* Same as */}
              <ToastContainer />{" "}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
