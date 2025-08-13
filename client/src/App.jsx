import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React from "react";

import Home from "./Pages/LandingPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import UserHome from "./Pages/Home";
import Footer from "./components/Footer";
import AIDamageDetection from "./components/AIDamageDetection";
import ScanPage from "./Pages/ScanPage";
import TutorialsPage from "./Pages/TutorialsPage";
import ProfilePage from "./Pages/ProfilePage";
import Contact from "./Pages/Contact";
import Tutorial from "./Pages/Tutorial";
import Community from "./Pages/Community";
import FluidCursor from "./components/FluidCursor";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <FluidCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <UserHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-damage-detection"
          element={
            <ProtectedRoute>
              <AIDamageDetection />
            </ProtectedRoute>
          }
        />

        <Route
          path="/scan"
          element={
            <ProtectedRoute>
              <ScanPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tutorials/:objectName"
          element={
            <ProtectedRoute>
              <TutorialsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tutorial"
          element={
            <ProtectedRoute>
              <Tutorial />
            </ProtectedRoute>
          }
        />
        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
