//
import React, { useEffect, useState } from "react";
import Signin from "./components/Signin";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Appdash"
import {  Route, Routes } from "react-router-dom";

import axios from "axios";

function App() {
  const [response, setresponse] = useState(null);

  useEffect(() => {
    async function getAllPublic() {
      try {
        const response = await axios.post("http://localhost:8000/signup/");
        console.log(response.data);
        setresponse(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPublic();
  }, []);

  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/dash" element={<Dashboard />} />
        {/* <Route path="/team" element={<Team />} />
        <Route path="/map" element={<Map />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/geography" element={<Geography />} /> */}
      </Routes>
    </>
  );
}

export default App;
