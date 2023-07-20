import * as React from "react";
import { useState } from "react";
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
import { FormControl, Input, InputLabel, Menu, Select } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { MapContainer, TileLayer } from "react-leaflet";

const roles = [
  {
    value: "Citizen",
    label: "Citizen || नागरिक ",
  },
  {
    value: "Driver",
    label: "Driver || सवारी चालक",
  },
  // {
  //   value: "Staff",
  //   label: "Staff || कर्मचारी ",
  // },
];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Garbage Tracking System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [role, setRole] = useState(""); // for role selection

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  //this is for fetch address of respective users
  const showLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  function success(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = lng;
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
                  label="Select Your Role"
                  defaultValue="EUR"
                  autoFocus
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
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  disabled
                  id="latitude"
                  name="latitude"
                  label="latitude"
                  autoComplete="off"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // InputProps={{
                  //   readOnly: true,
                  // }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  disabled
                  id="longitude"
                  label="longitude"
                  name="longitude"
                  autoComplete="off"
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
                  sx={{p:1.9}}
                >
                  Fetch
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="standard-number"
                  label="Citizenship NO:"
                  name="number"
                  type="number"
                  autoComplete="off"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  // variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
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
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Remember Me"
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
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
