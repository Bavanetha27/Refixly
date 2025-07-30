import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React from 'react';


// Import Pages
import Home from "./Pages/LandingPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import UserHome from "./Pages/Home";
import ScanPage from "./Pages/ScanPage";
import TutorialsPage from "./Pages/TutorialsPage";
import ProfilePage from "./Pages/ProfilePage";
import Contact from "./Pages/Contact"
import Tutorial from "./Pages/Tutorial"
import Community from "./Pages/Community"
import Footer from "./components/Footer"


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
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/community" element={<Community />} />

      </Routes>

      <Toaster />
    </>
  );
}

export default App;
