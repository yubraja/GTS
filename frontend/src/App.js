import { useState } from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
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
import Whoru from './components/Whoru'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);
  const location = useLocation();

  const showSidebarAndTopbar = location.pathname !== "/" && location.pathname!=='/signup' && location.pathname!=='/forgetps' && location.pathname!=='/Whoru';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div style={{ display: "flex" }}>
          {showSidebarAndTopbar && <Sidebar />}
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
              <Route path="/Whoru" element={<Whoru />} />
              <Route path="/forgetps" element={<ForgetPS />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/map" element={<Map />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
