import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/Logo.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Column 1: Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-blue-600">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          {/* Column 2: Hamburger Menu (for Mobile and Tablet Devices) */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Column 2: Routes (for Large Devices) */}
          <div className="hidden lg:flex space-x-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-200 text-black px-4 py-2 rounded-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-200 text-black px-4 py-2 rounded-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg'
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-200 text-black px-4 py-2 rounded-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg'
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/custom"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-200 text-black px-4 py-2 rounded-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg'
              }
            >
              Custom
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-200 text-black px-4 py-2 rounded-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg'
              }
            >
              Blog
            </NavLink>
          </div>

          {/* Column 3: Sign Up and Login (for Large Devices) */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-200 text-black px-4 py-2 rounded-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg'
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-200 text-black px-4 py-2 rounded-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg'
              }
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block bg-gray-200 text-black font-semibold px-3 py-2 rounded-lg'
                  : 'block text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-lg'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block bg-gray-200 text-black font-semibold px-3 py-2 rounded-lg'
                  : 'block text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-lg'
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/categories"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block bg-gray-200 text-black font-semibold px-3 py-2 rounded-lg'
                  : 'block text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-lg'
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/custom"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block bg-gray-200 text-black font-semibold px-3 py-2 rounded-lg'
                  : 'block text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-lg'
              }
            >
              Custom
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block bg-gray-200 text-black font-semibold px-3 py-2 rounded-lg'
                  : 'block text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-lg'
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block bg-gray-200 text-black font-semibold px-3 py-2 rounded-lg'
                  : 'block text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-lg'
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block bg-gray-200 text-black font-semibold px-3 py-2 rounded-lg'
                  : 'block text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-lg'
              }
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;