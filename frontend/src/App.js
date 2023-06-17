import React from "react";
// import * as Components from "./Components";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="content">
          <Topbar />
        </main>
        <Signin />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
