import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React from 'react';

import Home from "./Pages/LandingPage"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import UserHome from "./Pages/Home"
import Footer from "./components/Footer";
import AIDamageDetection from './components/AIDamageDetection';
import ScanPage from "./Pages/ScanPage";
import TutorialsPage from "./Pages/TutorialsPage";
import ProfilePage from "./Pages/ProfilePage";
import Contact from "./Pages/Contact"
import Tutorial from "./Pages/Tutorial"
import Community from "./Pages/Community"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />

        <Route path='/ai-damage-detection' element={<AIDamageDetection />} />

        <Route path="/scan" element={<ScanPage />} />
        <Route path="/tutorials/:objectName" element={<TutorialsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/community" element={<Community />} />

      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
