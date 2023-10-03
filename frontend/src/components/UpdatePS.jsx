// import * as React from "react";
// import { useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const defaultTheme = createTheme();

// export default function SignInSide() {
//   const navigate = useNavigate();

//   // Define state variables for form inputs
//   const [otp, setOTP] = useState("");
//   const [password, setPassword] = useState("");
//   const [repassword, setRePassword] = useState("");

//   // Custom function to display toasts
//   const showToast = (message, isError = false) => {
//     toast[isError ? "error" : "success"](message, {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 3000,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/forgot/update", {
//         code: otp, // Make sure to send OTP and new password if needed
//         password: password, // Replace with your logic for sending OTP and password
//   });

//       if (response.data.msg.includes("success")) {
//         showToast(response.data.msg); // Display success toast
//         // Redirect to the updateOTP route after success
//         navigate("/");
//       } else {
//         showToast(response.data.msg, true); // Display error toast
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       showToast("An error occurred during login", true); // Display error toast for network errors or other issues
//       // Optionally, provide more specific error messages based on error types
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "80vh",
//         margin: "75px",
//         padding: "23px",
//       }}
//     >
//       <ThemeProvider theme={defaultTheme}>
//         <Grid container component="main" sx={{ height: "80vh" }}>
//           <CssBaseline />
//           <Grid
//             item
//             xs={false}
//             sm={4}
//             md={7}
//             sx={{
//               backgroundImage:
//                 "url(https://images.pexels.com/photos/5474298/pexels-photo-5474298.jpeg?auto=compress&cs=tinysrgb&w=800)",
//               backgroundRepeat: "no-repeat",
//               backgroundColor: (t) =>
//                 t.palette.mode === "light"
//                   ? t.palette.grey[50]
//                   : t.palette.grey[900],
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//           <Grid
//             item
//             xs={12}
//             sm={8}
//             md={5}
//             component={Paper}
//             elevation={6}
//             square
//           >
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign in
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 1 }}
//               >
//                 {/* Your form fields here */}
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="otp"
//                   label="OTP"
//                   type="text"
//                   id="otp"
//                   autoComplete="otp"
//                   autoFocus
//                   value={otp}
//                   onChange={(e) => setOTP(e.target.value)}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="repassword"
//                   label="Re-Entered Password"
//                   type="password"
//                   id="repassword"
//                   autoComplete="current-password"
//                   value={repassword}
//                   onChange={(e) => setRePassword(e.target.value)}
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Reset Password
//                 </Button>
//                 <Grid container>
//                   <Grid item>
//                     <Link to="/signup" variant="body2">
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </ThemeProvider>
//       <ToastContainer />
//     </Box>
//   );
// }
import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();

  // Define state variables for form inputs
  const [otp, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  // Custom function to display toasts
  const showToast = (message, isError = false) => {
    toast[isError ? "error" : "success"](message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/forgot/update",
        {
          code: otp,
          password: password,
        } // <-- Closing parenthesis was missing here
      );

      if (response.data.msg.includes("success")) {
        showToast(response.data.msg); // Display success toast
        // Redirect to the updateOTP route after success
        navigate("/");
      } else {
        showToast(response.data.msg, true); // Display error toast
      }
    } catch (error) {
      console.error("Login error:", error);
      showToast("An error occurred during login", true); // Display error toast for network errors or other issues
      // Optionally, provide more specific error messages based on error types
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        margin: "75px",
        padding: "23px",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "80vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://images.pexels.com/photos/5474298/pexels-photo-5474298.jpeg?auto=compress&cs=tinysrgb&w=800)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                {/* Your form fields here */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="otp"
                  label="OTP"
                  type="text"
                  id="otp"
                  autoComplete="otp"
                  autoFocus
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="repassword"
                  label="Re-Entered Password"
                  type="password"
                  id="repassword"
                  autoComplete="current-password"
                  value={repassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Reset Password
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <ToastContainer />
    </Box>
  );
}
