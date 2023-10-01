import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import AdminSidebar from './scenes/global/AdminSidebar';
import Topbar from './scenes/global/Topbar';
import AdminDash from './scenes/dashboard/adminDash';
import UserDash from './scenes/dashboard/userDash';
import DriverDash from './scenes/dashboard/driverDash';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Dustbin from './scenes/dustbinn';
import Geography from './scenes/geography';
import Error from './components/Error';
import Calendar from './scenes/calendar/calendar';
import Signnn from './components/Signnn';
import Signup from './components/signup';
import ForgetPS from './components/ForgetPS';
import UpdatePS from './components/UpdatePS';
import Map from './scenes/map';
import ProtectedRoute from './ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  const showSidebarAndTopbar =
    location.pathname !== '/' &&
    location.pathname !== '/signup' &&
    location.pathname !== '/forgetps' &&
    location.pathname !== '/updatePS' &&
    location.pathname !== '*';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />

        <div style={{ display: 'flex' }}>
          {showSidebarAndTopbar && <AdminSidebar />}
          <main style={{ flex: 1 }}>
            {showSidebarAndTopbar && <Topbar />}

            {/* routes are here */}
            <Routes>
<<<<<<< HEAD
              <Route path="/" element={<Signnn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgetps" element={<ForgetPS />} />
              <Route path="/updateps" element={<UpdatePS />} />
=======
              <Route path="/" element={<ProtectedRoute Component={Signnn} />} />
              <Route path="/signup" element={<ProtectedRoute Component={Signup} />} />
              <Route path="/forgetps" element={<ProtectedRoute Component={ForgetPS} />} />
              <Route path="/adminDash" element={<AdminDash />} />
              <Route path="/userDash" element={<UserDash />} />
              <Route path="/dustbin" element={<Dustbin />} />
              <Route path="/map" element={<Map />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              {/* <Route path="/faq" element={<FAQ />} /> */}
              <Route path="/calendar" element={<Calendar />} />
<<<<<<< Updated upstream
              {/* <Route path="/geography" element={<Geography />} /> */}
>>>>>>> 50b2adebbbf37599cb36a017175364c577a48113

              <Route path="/userDash" element={<ProtectedRoute Component={UserDash} />} />
              <Route path="/adminDash" element={<ProtectedRoute Component={AdminDash} />} />
              <Route path="/driverDash" element={<ProtectedRoute Component={DriverDash} />} />
              <Route path="/dustbin" element={<ProtectedRoute Component={Dustbin} />} />
              <Route path="/map" element={<ProtectedRoute Component={Map} />} />
<<<<<<< HEAD
              <Route path="/form" element={<ProtectedRoute Component={Form} />} />
=======
              <Route
                path="/form"
                element={<ProtectedRoute Component={Form} />}
              />
=======
          <Route path="/geography" element={<Geography />} /> 
            {/* <Route path="/dustbin" element={<ProtectedRoute Component={Dustbin} />} />
             {/* <Route path="/dash" element={<ProtectedRoute Component={Dashboard} />} /> 
             <Route path="/adminDash" element={<ProtectedRoute Component={AdminDash} />} />
              <Route path="/userDash" element={<ProtectedRoute Component={UserDash} />} />
              <Route path="/map" element={<ProtectedRoute Component={Map} />} /> 
              <Route path="/form" element={<ProtectedRoute Component={Form} />} />
>>>>>>> Stashed changes
>>>>>>> 50b2adebbbf37599cb36a017175364c577a48113
              <Route path="/bar" element={<ProtectedRoute Component={Bar} />} />
              <Route path="/pie" element={<ProtectedRoute Component={Pie} />} />
              <Route path="/line" element={<ProtectedRoute Component={Line} />} />
              <Route path="/faq" element={<ProtectedRoute Component={FAQ} />} />
<<<<<<< HEAD
              <Route path="/calendar" element={<ProtectedRoute Component={Calendar} />} />
              <Route path="/geography" element={<ProtectedRoute Component={Geography} />} />
              <Route path="/team" element={<ProtectedRoute Component={Team} />} />
              <Route path="/invoices" element={<ProtectedRoute Component={Invoices} />} />

              {/* Add a catch-all route for unmatched URLs */}
              <Route path="*" element={<Error />} />
=======
<<<<<<< Updated upstream
              <Route
                path="/calendar"
                element={<ProtectedRoute Component={Calendar} />}
              />
              <Route
                path="/geography"
                element={<ProtectedRoute Component={Geography} />}
              />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              {/* this routes are not hitted then we should show 404 page */}
              <Route path="*" element={<h1>404 Not Found</h1>} />
=======
              <Route path="/calendar" element={<ProtectedRoute Component={Calendar} />} />
              <Route path="/geography" element={<ProtectedRoute Component={Geography} />} /> 
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />*/}

>>>>>>> Stashed changes
>>>>>>> 50b2adebbbf37599cb36a017175364c577a48113
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
