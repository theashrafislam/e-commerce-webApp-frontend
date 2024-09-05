import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-row h-screen">
            {/* First Column: Signup Form */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                <div className="w-full max-w-sm">
                    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                        <div className='mb-4'>
                            <h5 className='font-bold text-center'>Welcome to</h5>
                            <h2 className="text-center text-3xl font-bold">Furni<span className='text-[#1E99F5]'>Flex</span></h2>
                            <p className='text-center text-gray-400'>Signup for purchase you desire products</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <input
                                type="text"
                                placeholder="First Name (Optional)"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Last Name (Optional)"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                            />
                            <button
                                type="button"
                                onClick={handleTogglePassword}
                                className="absolute inset-y-0 right-0 bottom-3 flex items-center px-3 text-gray-600"
                            >
                                {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
                            </button>
                        </div>
                        <label className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            I agree to the <span className='underline'> Terms & Policy</span>
                        </label>
                        <button className="w-full bg-black text-white p-3 rounded-lg">
                            Sign Up
                        </button>

                        {/* "Or" divider */}
                        <div className="relative flex py-4 items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-400">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        {/* Google and Apple Login Buttons */}
                        <button className="w-full p-3 rounded-lg border-2 flex items-center justify-center mb-4">
                            <FcGoogle className="mr-2 text-2xl" /> Sign up with Google
                        </button>
                        <button className="w-full p-3 rounded-lg border-2 flex items-center justify-center mb-4">
                            <FaApple className="mr-2 text-2xl" /> Sign up with Apple
                        </button>

                        <p className='py-3 text-center'>Already have an account? <Link className='text-blue-500' to={"/login"}>Log In</Link></p>
                    </div>
                </div>
            </div>

            {/* Second Column: Image and Text */}
            <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-cover bg-center text-white p-8" style={{ backgroundImage: 'url(/login.png)' }}>
                <img src="/furniflex.png" alt="Logo" className="mb-6" />
                <p className="text-base text-gray-400 w-9/12 text-center">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
            </div>
        </div>
    );
};

export default Signup;