// src/Pages/Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import authBg from '../assets/auth-bg.png';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react'


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };


  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Signup Successful!');
      navigate('/home');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false)
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success('Google signup successful!');
      navigate('/home');
    } catch (error) {
      toast.error(error.message);
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
              placeholder="johndoe123@gmail.com"
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
            {isLoading ?
              <span className=' flex justify-center items-center'>
                <Loader2 className='animate-spin' />
              </span>
              :
              <span>Sign up</span>}
          </button>

          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 mt-3 py-3 border border-gray-400 rounded-full hover:bg-gray-100"
          >
            <FaGoogle /> Continue with Google
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
