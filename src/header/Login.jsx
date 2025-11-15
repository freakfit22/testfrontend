
import React, { useState } from 'react';
import axios from 'axios';
import cardBackground from '../assets/benefits/card-3.svg';
import Button from '../components/subComponents/Button';
import ForgotPassword from '../header/ForgotPassword';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Spinner from "../components/Spinner"; // update path as needed


const Login = ({ closeModal, openRegisterModal, setIsAuthenticated, openLoginModal }) => {
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const toggleForgotPasswordModal = (e) => {
    e.preventDefault();
    setForgotPasswordModal(!forgotPasswordModal);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const trimmedPhoneNumber = phoneNumber.trim();

    try {
      const response = await axios.post(`${baseUrl}/login/`, {
        username: trimmedPhoneNumber,
        password: password,
      });

      if (response.status === 200 && response.data.access && response.data.refresh) {
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);

        setIsAuthenticated(true);
        closeModal();
        window.location.reload();

      } else {
        setError(response.data.message || 'Invalid phone number or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
        onClick={handleBackdropClick}
      >
        <div
          className="relative p-6 sm:p-8 md:p-12 w-11/12 max-w-[320px] sm:max-w-md mx-auto rounded-lg shadow-lg bg-opacity-80"
          style={{
            backgroundImage: `url(${cardBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full transition-all"
          >
            ✕
          </button>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Sign In</h2>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-2">
              <label className="block text-white text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none bg-black bg-opacity-40 text-white text-xs sm:text-sm"
                style={{ backdropFilter: 'blur(10px)' }}
                required
              />
            </div>

            {/* Password Field With Eye Icon */}
            <div className="mb-2 relative">
              <label className="block text-white text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none bg-black bg-opacity-40 text-white text-xs sm:text-sm pr-10"
                style={{ backdropFilter: 'blur(10px)' }}
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 sm:top-10 text-white cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error && <div className="text-red-500 text-xs mb-2">{error}</div>}

            <div className="mb-1">
              <button
                type="button"
                onClick={toggleForgotPasswordModal}
                className="text-purple-300 underline hover:text-purple-500 text-xs sm:text-sm"
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex items-center justify-between">
              <Button className="w-full bg-transparent text-sm sm:text-lg px-2 py-1 sm:py-2" type="submit">
                Sign In
              </Button>
            </div>
          </form>

          <div className="text-center mt-3 sm:mt-4 text-white text-xs sm:text-sm">
            Don't have an account?{' '}
            <button onClick={openRegisterModal} className="text-purple-300 underline">
              Register here
            </button>
          </div>
        </div>
      </div>

      {forgotPasswordModal && <ForgotPassword closeModal={toggleForgotPasswordModal} />}
    </>
  );
};

export default Login;

