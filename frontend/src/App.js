import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";

import Experience from "./components/Experience";
import Contact from "./components/Contact";
import LoginForm from "./components/Login";
import Signup from "./components/Signup"
import AOS from "aos";
import "aos/dist/aos.css";
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Router >
      <div >
        
        <Routes>
          <Route path="/" element={<div><Navbar class="animate__animated animate__bounce" /><Home dataaos="flip-left" /> <About dataaos="zoom-in-down" /> <SocialLinks  /><Experience dataaos="fade-left"   /><Contact dataaos="fade-up" /></div>} />
     
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/signupForm" element={<Signup />} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
