// 
import React, { useEffect, useState } from "react";
// import * as Components from "./Components";
import Signin from "./components/Signin";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import axios from "axios";

function App() {
  const[response,setresponse]=useState(null)
  
  useEffect(()=>{
    async function getAllPublic(){try{
      const response = await axios.post("http://localhost:8000/signup/")
      console.log(response.data)
      setresponse(response.data)
    }catch(error){
      console.log(error)

    }
  }
  getAllPublic()


  },[])

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
