import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const NavBar = () => {
  const navigate = useNavigate();
  const [overHero, setOverHero] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  // Get current user for profile picture
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle navbar transparency
  useEffect(() => {
    const target = document.getElementById('hero-section');
    if (!target) {
      setOverHero(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setOverHero(entry.intersectionRatio > 0.3);
    });
    observer.observe(target);
    
    // Clean up the observer when the component unmounts
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [navigate]); // Rerun when page location changes

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err.message);
    }
  };
  const handleDeleteAccount = async () => {// here added deleting account logic
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        await user.delete();
        await signOut(auth);
        alert("Your account has been deleted.");
        navigate('/');
      } catch (error) {
        if (error.code === 'auth/requires-recent-login') {
          const password = prompt("For security, please enter your password again to delete your account:");
          if (!password) return;

          const credential = EmailAuthProvider.credential(user.email, password);

          try {
            await reauthenticateWithCredential(user, credential);
            await user.delete();
            await signOut(auth);
            alert("Your account has been deleted.");
            navigate('/');
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
    isActive ? 'text-blue-400 underline' : 'hover:text-blue-300 transition';

  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 duration-300 text-white backdrop-blur-sm transition-colors ${
    overHero ? 'bg-transparent' : 'bg-[#1E293B]/70'
  }`}
  aria-label="Main Navigation"
>
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <NavLink to="/">
      <h1 className={`text-2xl font-bold ${overHero ? 'text-blue-400' : 'text-white'}`}>Refixly</h1>
    </NavLink>

    <ul className="flex space-x-6 text-sm md:text-base font-medium items-center">
      <li><NavLink to="/home" className={linkClass}>Home</NavLink></li>
      <li><NavLink to="/scan" className={linkClass}>Scan</NavLink></li>
      <li><NavLink to="/tutorial" className={linkClass}>Tutorial</NavLink></li>
      <li><NavLink to="/community" className={linkClass}>Community</NavLink></li>
      <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>

      {/* Profile Dropdown */}
      <li className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-10 h-10 rounded-full border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <img
            className="w-full h-full rounded-full object-cover"
            src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.email}&background=random`}
            alt="Profile"
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
            <NavLink
              to="/profile"
              onClick={() => setIsDropdownOpen(false)}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              My Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Logout
            </button>
            <button // here delete button added
              onClick={handleDeleteAccount}
              className="w-full text-left block px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300">
              Delete Account
            </button>
          </div>
        )}
      </li>
    </ul>
  </div>
</nav>

  );
};

export default NavBar;
