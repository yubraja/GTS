import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "./Dashboard";
import Team from "./Team";
import Invoices from "./Invoices";
// import Contacts from "./scenes/contacts";
import Bar from "./Bar";
import Form from "./Form";
import Line from "./Line";
import Pie from "./Pie";
import FAQ from "./Faq";
import Geography from "./Geography";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
// import Calendar from "./scenes/calendar/calendar";
// import Signin from "./scenes/signin";
import Map from "./Map";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
           
            <Routes>
              {/* <Route path="/" element={<Signin />} /> */}
              {/* <Route path="/"  element={<Login />}  /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/map" element={<Map />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// import React from 'react'
// import PrimarySearchAppBar from './nav'


// export default function Appdash() {
//   return (
//     <>
//       <PrimarySearchAppBar/>
//     </>
//   )
// }

