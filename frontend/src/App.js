import React from "react";
// import * as Components from "./Components";
import Signin from "./components/Signin";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Signin />
    
      {/* <Router>
        <Routes>
          <Route path="/">
            
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
