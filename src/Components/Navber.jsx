import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Column 1: Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink to="/" className="text-2xl font-bold text-blue-600">
                            MyLogo
                        </NavLink>
                    </div>

                    {/* Column 2: Routes */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Categories
                        </NavLink>
                        <NavLink
                            to="/custom"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Custom
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Blog
                        </NavLink>
                    </div>

                    {/* Column 3: Sign Up and Login */}
                    <div className="flex items-center space-x-4">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;