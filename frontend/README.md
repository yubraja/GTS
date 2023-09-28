# React Admin Dashboard

import { Component, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/AdminSidebar";
import AdminDash from "./scenes/dashboard/adminDash.jsx";
import UserDash from "./scenes/dashboard/userDash.jsx";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Signnn from "./components/Signnn";
import Signup from "./components/signup";
import ForgetPS from "./components/ForgetPS";
import Map from "./scenes/map";
import ProtectedRoute from "./ProtectedRoute";
import Dustbin from "./scenes/dustbinn";
import UserSidebar from "./scenes/global/UserSidebar";
import AdminSidebar from "./scenes/global/AdminSidebar";

<<<<<<< HEAD
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState();
  const location = useLocation();

  const showSidebarAndTopbar =
    location.pathname !== "/" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/forgetps";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div style={{ display: "flex" }}>
          {showSidebarAndTopbar &&
          
          // if admin show admin sidebar else user sidebar
          location.pathname === "/adminDash"? (
            <AdminSidebar />
          ) : (
            <UserSidebar />
          )}
          <main style={{ flex: 1 }}>
            {showSidebarAndTopbar && <Topbar />}
            {/* 
            <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="/" element={<Signnn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgetps" element={<ForgetPS />} />
              <Route path="/adminDash" element={<AdminDash />} />
              <Route path="/userDash" element={<UserDash />} />
              <Route path="/dustbin" element={<Dustbin />} />
              <Route path="/map" element={<Map />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              {/* <Route path="/dustbin" element={<ProtectedRoute Component={Dustbin} />} />
              <Route path="/dash" element={<ProtectedRoute Component={Dashboard} />} />
              <Route path="/map" element={<ProtectedRoute Component={Map} />} />
              <Route path="/form" element={<ProtectedRoute Component={Form} />} />
              <Route path="/bar" element={<ProtectedRoute Component={Bar} />} />
              <Route path="/pie" element={<ProtectedRoute Component={Pie} />} />
              <Route path="/line" element={<ProtectedRoute Component={Line} />} />
              <Route path="/faq" element={<ProtectedRoute Component={FAQ} />} />
              <Route path="/calendar" element={<ProtectedRoute Component={Calendar} />} />
              <Route path="/geography" element={<ProtectedRoute Component={Geography} />} /> */}
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
=======
For all related questions and discussions about this project, check out the discord: https://discord.gg/2FfPeEk2mX
 

 Eh okay!
>>>>>>> 8a827c1e399fce63f9a3033e920b86e06f3965ca
