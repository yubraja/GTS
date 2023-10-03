// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import { useState } from 'react';

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();


// export default function SignInSide() {
//     // const [dataRegister, setDataRegister] = useState({
//     //     email: "",
//     //     password: "",
//     //   });

//     //   const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setDataRegister({ ...dataRegister, [name]: value });
//     //   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email=data.get('email')
//     const response=await axios.post('http://localhost:5000/forgot/reset',{
//         email
//     }
//     )
//     if(response.data.msg==="code has been sent to your email"){
//         window.location.href='/updatePS'
//     }
//   };

//   return (
//     <Box
//     sx={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '80vh',
//       margin:'75px',
//       padding:'23px'
//     }}
//   >
//     <ThemeProvider theme={defaultTheme} >
//       <Grid container component="main" sx={{ height: '80vh', }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//             backgroundImage: 'url(https://images.pexels.com/photos/5474298/pexels-photo-5474298.jpeg?auto=compress&cs=tinysrgb&w=800)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 //onChange={handleChange}
//                 autoFocus
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onSubmit={handleSubmit}
//               >
//                 Send OTP
//               </Button>
//               <Grid container>
                
//                 <Grid item>
//                   <Link href="/signup" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
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
import { toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const defaultTheme = createTheme();

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const ForgetPS = () => {
  const navigate = useNavigate();

  const showToast = (message, isError = false) => {
    if (isError) {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000/forgot/reset', {
        email: values.email,
      });

      if (response.data.msg === 'otp has already sent') {
        showToast('Password reset code sent to your email');
        // Redirect to the updateOTP route after success
        navigate('/updatePS');
      } else {
        showToast('Email not found or code could not be sent', true);
      }
    } catch (error) {
      console.error('Password reset error:', error);
      showToast('An error occurred while sending the reset code', true);
    } finally {
      setSubmitting(false);
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
                Reset Password
              </Typography>
              <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form noValidate>
                    <Field
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <ErrorMessage name="email" component="div" className="error" />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      disabled={isSubmitting}
                    >
                      Send OTP
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="/signin" variant="body2">
                          Back to Sign In
                        </Link>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default ForgetPS