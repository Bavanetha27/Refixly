// src/components/NavBar.jsx
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const NavBar = () => {
  const navigate = useNavigate();
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const target = document.getElementById('hero-section');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.intersectionRatio > 0.3); // 30% of hero still visible -> transparent
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);


  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err.message);
    }
  };

  const linkClass = ({ isActive }) =>
    isActive ? 'text-blue-400 underline' : 'hover:text-blue-300 transition';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 duration-750 text-white backdrop-blur-sm transition-colors ${overHero ? 'bg-transparent bsg-[#566ba0]/30' : 'bg-[#566ba0]/70'
        }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/">
          <h1 className={`text-2xl font-bold ${overHero ? 'text-blue-400' : 'text-white'}`}>Refixly</h1>
        </NavLink>

        <ul className="flex space-x-6 text-sm md:text-base font-medium items-center">
          <li>
            <NavLink to="/userdashboard" className={linkClass + ' tour-step-4'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload" className={linkClass + ' tour-step-5'}>
              Tutorial
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className={linkClass + ' tour-step-6'}>
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass + ' tour-step-7'}>
              Contact
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              aria-label="Logout"
              data-testid="logout-button"
              className="px-4 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition tour-step-8"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
