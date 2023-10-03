// import React, { useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {Formik} from 'formik';

// const defaultTheme = createTheme();

// export default function Signnn() {
//   // const { setIsAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const [dataRegister, setDataRegister] = useState({
//     email: "",
//     password: "",
//   });

//   console.log(dataRegister);
//   const changeValue = (e) => {
//     const { name, value } = e.target;
//     setDataRegister({ ...dataRegister, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let currentDash;
//     let response;
//      response = await axios.post(
//         "http://localhost:5000/login",
//         dataRegister,
//         {
//           withCredentials: true, //yo pathaune vaneko when we need cookie and userid
//         }
//       );
   
      
//      if(response.data.msg.includes("success")){
//       toast.success(response.data.msg, {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 3000,
//       });
//     } 
//     if(response.data.msg.includes("invalid"))
//     {
//       toast.error(response.data.msg, {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 3000,
//       });
//     }
     

//       const user = await axios.get(
//         "http://localhost:5000/userDetail",{
//           withCredentials:true
//         }
//       );

//       if (user) {
//         // Successful login
//         const role= user.data.result.role;
//        // console.log(response.data.result.role)
       
//         if (role === "Citizen") {
//           currentDash = "/userDash";
//         } else if (role === "Driver") {
//           currentDash = "/driverDash";
//         } else {
//           currentDash = "/adminDash";
//         }
//       }
//       navigate(currentDash, { replace: true });
  
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
//     {/* Formk tag setup  */}
//     <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >


    
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
//                 "url(https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=800)",
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
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={dataRegister.email}
//                   onChange={changeValue}
//                   autoFocus
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
//                   value={dataRegister.password}
//                   onChange={changeValue}
//                 />

//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign In
//                 </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link href="/forgetps" variant="body2">
//                       Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="/signup" variant="body2">
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   sx={{ textDecoration: "none", color: "white", mt: 3, mb: 2 }}
//                 >
//                   <Link
//                     component="button"
//                     variant="body2"
//                     sx={{ textDecoration: "none", color: "white" }}
//                   >
//                     {"Sign In with Google! "}
//                   </Link>
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </ThemeProvider>
//       </Formik>
//     </Box>
//   );
// }
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

const defaultTheme = createTheme();

export default function Signnn() {
  const navigate = useNavigate();

  const [dataRegister, setDataRegister] = React.useState({
    email: '',
    password: '',
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setDataRegister({ ...dataRegister, [name]: value });
  };

  // Custom function to display toasts
  const showToast = (message, isError = false) => {
    toast[isError ? 'error' : 'success'](message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    try {
      const response = await axios.post('http://localhost:5000/login', dataRegister, {
        withCredentials: true,
      });

      if (response.data.msg.includes('success')) {
        showToast(response.data.msg); // Display success toast
      } else {
        showToast(response.data.msg, true); // Display error toast
      }

      const user = await axios.get('http://localhost:5000/userDetail', {
        withCredentials: true,
      });

      if (user) {
        let currentDash;
        const role = user.data.result.role;

        if (role === 'Citizen') {
          currentDash = '/userDash';
        } else if (role === 'Driver') {
          currentDash = '/driverDash';
        } else {
          currentDash = '/adminDash';
        }

        navigate(currentDash, { replace: true });
      }
    } catch (error) {
      console.error('Login error:', error);
      showToast('An error occurred during login', true); // Display error toast for network errors or other issues
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        margin: '75px',
        padding: '23px',
      }}
    >
      {/* Formik tag setup */}
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <Grid container component="main" sx={{ height: '80vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={dataRegister.email}
                    onChange={changeValue}
                    autoFocus
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
                    value={dataRegister.password}
                    onChange={changeValue}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/forgetps" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ textDecoration: 'none', color: 'white', mt: 3, mb: 2 }}
                  >
                    <Link
                      component="button"
                      variant="body2"
                      sx={{ textDecoration: 'none', color: 'white' }}
                    >
                      {'Sign In with Google! '}
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Formik>
    </Box>
  );
}
