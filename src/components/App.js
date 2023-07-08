import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Houses from "./Houses";
import "./App.css";
import SignUp from "./SignUp";


function App() {
  const [user, setUser] = useState(null)
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/signup" element={<SignUp onLogin={setUser} />} />
        <Route exact path="/login" element={<Login onLogin={setUser} />} />
        <Route exact path="/housedetails" element={<Houses />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  </>
  )  
}

export default App;
