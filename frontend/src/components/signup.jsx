import React, { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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
    firstName: "",
    lastName: "",
    latitude: "",
    longitude: "",
    number: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeValue = (e) => {
    const { value, name } = e.target;
    e.preventDefault();
    console.log(value, name);
    setDataRegister({ ...dataRegister, [name]: value });
  };

  // herna ko lagi
  console.log(dataRegister);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;
    response = await axios.post(
      "http://localhost:5000/user/register",
      dataRegister,
      {
        withCredentials: true,
      }
    );
    //get response from backend
    console.log(response.data.msg)
    console.log("hello")

    if (response.data.msg.includes("success")) {
      toast.success(response.data.msg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
    if (response.data.msg.includes("invalid")) {
      toast.error(response.data.msg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  const showLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };
  console.log(showLocation);

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
                  onChange={changeValue}
                  value={dataRegister.firstName}
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              </Grid>

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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repassword"
                  label="Re-entered Password"
                  type="password"
                  id="repassword"
                  value={dataRegister.repassword}
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
            >
              Sign Up
              <ToastContainer />
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
