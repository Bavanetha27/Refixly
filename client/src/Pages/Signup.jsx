// src/Pages/Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import authBg from '../assets/auth-bg.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup Successful!');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-left flex flex-col-reverse md:flex-row items-center justify-center md:justify-end px-4 md:pr-20"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-md w-full px-10 py-12 backdrop-blur-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">Join the Family</h1>
        <p className="text-sm text-gray-500 mt-1">Create your account now</p>

        <form onSubmit={handleSignup} className="space-y-6 mt-6 text-left">
          <div className="relative">
            <span className="absolute left-3 top-4 text-gray-400"><FaUser /></span>
            <input
              type="email"
              placeholder="Username/email"
              className="w-full py-3 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-4 text-gray-400"><FaLock /></span>
            <input
                type={showPassword ? 'text' : 'password'} // toggle type
                placeholder="Password"
                className="w-full py-3 pl-10 pr-10 rounded-full border border-gray-300 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-4 text-gray-400 focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className="w-full py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900">
            Sign up
          </button>

          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
