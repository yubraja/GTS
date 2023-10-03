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
import { Formik, Field, ErrorMessage, Form } from 'formik'; // Import Formik components
import { toast } from 'react-toastify';
import { red } from '@mui/material/colors';
import { style } from '@mui/system';
style({
ErrorMessage: {
    color: red,
  },
});


const defaultTheme = createTheme();

export default function Signnn() {
  const navigate = useNavigate();

  // Define your validation schema
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is Required';
    }
    return errors;
  };

  // Custom function to display toasts
  const showToast = (message, isError = false) => {
    toast[isError ? 'error' : 'success'](message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000/login', values, {
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
    } finally {
      setSubmitting(false); // Ensure that form submission is complete
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
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate} // Use the validate function
        onSubmit={handleSubmit}
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
                <Form>
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
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <ErrorMessage name="password" component="div" className="error" />
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
                        {"Don't have an account?"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Formik>
    </Box>
  );
}
