import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import React from 'react';
import Home from "./Pages/LandingPage"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import UserHome from "./Pages/Home"

import Footer from "./components/Footer";
import ScanPage from "./Pages/ScanPage";
import TutorialsPage from "./Pages/TutorialsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/scan" element={<ScanPage />} />
        <Route path="/tutorials/:objectName" element={<TutorialsPage />} /> 
      </Routes>

      <Toaster />
    </>
  )
};

export default App
