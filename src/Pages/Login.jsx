import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { signInWithEmail, loginWtihGoogle } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const isAgreed = form.agree.checked;

        if(isAgreed == true){
            signInWithEmail(email, password)
                .then((result) => {
                    console.log(result);
                    alert('User Login Successfully.')
                })
                .catch(error => {
                    console.log(error);
                    alert('User Login Not Successfully.')
                })

        }
        else{
            alert('Please agree to the Terms & Policy to continue.')
        }
    }

    return (
        <div className="flex flex-row h-screen">
            {/* First Column: Login Form */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                <div className="w-full max-w-sm">
                    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                        <div className='mb-4'>
                            <h2 className="text-3xl font-semibold text-start">Welcome Back</h2>
                            <p className='text-start text-gray-400'>Enter your Credentials to access your account</p>
                        </div>
                        <form onSubmit={handleForm}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                                name='email'
                            />
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                                    name='password'
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
                                <input name='agree' type="checkbox" className="mr-2" />
                                I agree to the <span className='underline'> Terms & Policy</span>
                            </label>
                            <input className="w-full text-center bg-black text-white p-3 rounded-lg"
                                value={"Sign In"} type='submit'
                            />
                        </form>

                        {/* "Or" divider */}
                        <div className="relative flex py-4 items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-400">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        {/* Google and Apple Login Buttons */}
                        <button className="w-full p-3 rounded-lg border-2 flex items-center justify-center mb-4">
                            <FcGoogle className="mr-2 text-2xl" /> Sign in with Google
                        </button>
                        <button className="w-full p-3 rounded-lg border-2 flex items-center justify-center mb-4">
                            <FaApple className="mr-2 text-2xl" /> Sign in with Apple
                        </button>

                        <p className='py-3 text-center'>Have an account? <Link className='text-blue-500' to={"/signup"}>Sign Up</Link></p>
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

export default Login;