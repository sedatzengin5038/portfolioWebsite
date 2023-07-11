import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import LoginForm from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<div><Navbar /><Home /><SocialLinks /><About /><Portfolio /><Experience /><Contact /></div>} />
     
          <Route path="/loginForm" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
