//IMPORT SECTION START
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import React from "react";
import "./styles.css";

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/> 
        </Routes>
    </Router>
  );
}

export default App;
