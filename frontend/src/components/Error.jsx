import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    opacity: 0, // Initially set opacity to 0
    transition: 'opacity 0.5s ease-in', // Add a transition effect
    '&.fade-in': {
      opacity: 1, // When the 'fade-in' class is added, set opacity to 1
    },
  },
  text: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
}));

const Error = () => {
  const classes = useStyles();

  // Add the 'fade-in' class after the component has mounted
  React.useEffect(() => {
    setTimeout(() => {
      const container = document.getElementById('error-container');
      if (container) {
        container.classList.add('fade-in');
      }
    }, 100); // Adjust the delay as needed
  }, []);

  return (
    <div id="error-container" className={`${classes.container}`}>
      <Box>
        <Typography className={classes.text}>Page Not Found 404</Typography>
      </Box>
    </div>
  );
};

export default Error;
