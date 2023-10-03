import React from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import {CssBaseline, ThemeProvider, } from '@mui/material';
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
              <Route path="/" element={<Signnn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgetps" element={<ForgetPS />} />
              <Route path="/updateps" element={<UpdatePS />} />

              <Route path="/userDash" element={<ProtectedRoute Component={UserDash} />} />
              <Route path="/adminDash" element={<ProtectedRoute Component={AdminDash} />} />
              <Route path="/driverDash" element={<ProtectedRoute Component={DriverDash} />} />
              <Route path="/dustbin" element={<ProtectedRoute Component={Dustbin} />} />
              <Route path="/map" element={<ProtectedRoute Component={Map} />} />
              <Route path="/form" element={<ProtectedRoute Component={Form} />} />
              <Route path="/bar" element={<ProtectedRoute Component={Bar} />} />
              <Route path="/pie" element={<ProtectedRoute Component={Pie} />} />
              <Route path="/line" element={<ProtectedRoute Component={Line} />} />
              <Route path="/faq" element={<ProtectedRoute Component={FAQ} />} />
              <Route path="/calendar" element={<ProtectedRoute Component={Calendar} />} />
              <Route path="/geography" element={<ProtectedRoute Component={Geography} />} />
              <Route path="/team" element={<ProtectedRoute Component={Team} />} />
              <Route path="/invoices" element={<ProtectedRoute Component={Invoices} />} />

              {/* Add a catch-all route for unmatched URLs */}
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
