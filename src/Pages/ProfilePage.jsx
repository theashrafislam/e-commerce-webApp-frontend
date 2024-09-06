import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Profile = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = () => {
    logOutUser()
      .then(result => {
        navigate('/');
        alert('Log Out Successfully.')
      })
      .catch(error => {
        console.log(error);
        alert('Log Out Not Successfully.')
      })
  }

  return (
    <HelmetProvider>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Manage Your Profile | E-commerce WebApp</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL || '/user-profile.jpg'}
            alt="User Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
        </div>

        {/* User Information */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            {user?.displayName || 'No Name'}
          </h2>
          <p className="text-gray-500">{user?.email || 'johndoe@example.com'}</p>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogOut}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default Profile;
