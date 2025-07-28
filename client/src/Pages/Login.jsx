// src/Pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { FaUser, FaLock, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import authBg from '../assets/auth-bg.png';
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful!")
      navigate('/home');
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google login successful!")
      navigate('/home');
    } catch (error) {
      toast.error(error.message)
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast("Please enter your email address")
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Please check your inbox.")
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-left flex flex-col-reverse md:flex-row items-center justify-center md:justify-end px-4 md:pr-20"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-md w-full px-10 py-12 backdrop-blur-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome To Family</h1>
        <p className="text-sm text-gray-500 mt-1">A community of hundreds of members</p>

        <form onSubmit={handleLogin} className="space-y-6 mt-6 text-left">
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

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="w-full py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900">
            {isLoading ?
              <span className=' flex justify-center items-center'>
                <Loader2 className='animate-spin' />
              </span>
              :
              <span>Login</span>}
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 mt-3 py-3 border border-gray-400 rounded-full hover:bg-gray-100"
          >
            <FaGoogle /> Continue with Google
          </button>

          <p className="text-sm text-gray-600 text-center mt-4">
            Don’t have an account? <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
