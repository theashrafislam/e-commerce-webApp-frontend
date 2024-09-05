import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
      <p className="text-2xl font-semibold text-gray-800">Oops! Page not found.</p>
      <p className="text-gray-500 mb-8">
        The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;