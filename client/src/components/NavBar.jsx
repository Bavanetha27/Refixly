import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  signOut,
  onAuthStateChanged,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../firebase";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const navigate = useNavigate();
  const [overHero, setOverHero] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const target = document.getElementById("hero-section");
    if (!target) {
      setOverHero(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setOverHero(entry.intersectionRatio > 0.3);
    });
    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      try {
        await user.delete();
        await signOut(auth);
        alert("Your account has been deleted.");
        navigate("/");
      } catch (error) {
        if (error.code === "auth/requires-recent-login") {
          const password = prompt(
            "For security, please enter your password again to delete your account:"
          );
          if (!password) return;

          const credential = EmailAuthProvider.credential(user.email, password);
          try {
            await reauthenticateWithCredential(user, credential);
            await user.delete();
            await signOut(auth);
            alert("Your account has been deleted.");
            navigate("/");
          } catch (reauthError) {
            console.error(reauthError);
            alert("Failed to reauthenticate and delete account.");
          }
        } else {
          console.error(error);
          alert("Failed to delete account.");
        }
      }
    }
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-500 underline"
      : "text-gray-900 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-300 transition";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 duration-300 backdrop-blur-sm transition-colors ${
        overHero ? "bg-transparent" : "bg-gray-100 dark:bg-gray-900"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <h1
            className={`text-2xl font-bold ${
              overHero ? "text-blue-400" : "text-gray-900 dark:text-white"
            }`}
          >
            Refixly
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex md:flex-row md:items-center md:space-x-6 text-sm md:text-base font-medium">
            <li>
              <NavLink to="/home" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/scan" className={linkClass}>
                Scan
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutorial" className={linkClass}>
                Tutorial
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" className={linkClass}>
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger & Profile */}
          <div className="flex items-center gap-4 pr-2 sm:pr-4">
            <button
              className="md:hidden text-gray-900 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="w-10 h-10 rounded-full border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-label="User menu"
              >
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={
                    user?.photoURL ||
                    `https://ui-avatars.com/api/?name=${user?.email}&background=random`
                  }
                  alt="Profile"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-100 dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
                  <NavLink
                    to="/profile"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-900 dark:text-gray-100 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-cyan-500 dark:hover:text-cyan-300"
                  >
                    My Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-gray-900 dark:text-gray-100 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-cyan-500 dark:hover:text-cyan-300"
                  >
                    Logout
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="w-full text-left block px-4 py-2 text-red-500 dark:text-red-400 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-300"
                  >
                    Delete Account
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with ThemeToggle */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-6 space-y-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <ul className="flex flex-col space-y-4" onClick={() => setIsMobileMenuOpen(false)}>
            <li>
              <NavLink to="/home" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/scan" className={linkClass}>
                Scan
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutorial" className={linkClass}>
                Tutorial
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" className={linkClass}>
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
