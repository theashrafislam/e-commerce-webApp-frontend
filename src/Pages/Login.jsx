import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      {/* First Column: Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-100 p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-semibold mb-6 text-center">Welcome Back</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <label className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
              Sign In
            </button>
            <button className="w-full bg-gray-800 text-white p-3 rounded-lg flex items-center justify-center mt-4 hover:bg-gray-900">
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
          </div>
        </div>
      </div>
      
      {/* Second Column: Image and Text */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-500 text-white p-8">
        <img src="/path/to/your/logo.png" alt="Logo" className="mb-6" />
        <h1 className="text-4xl font-bold mb-4">Your Company</h1>
        <p className="text-lg">Experience the best service with us.</p>
      </div>
    </div>
  );
};

export default Login;