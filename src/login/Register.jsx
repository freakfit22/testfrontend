


import React, { useState } from "react";
import { registerUser } from "../api/api";
import VerifyOTP from "./VerifyOTP"; // Import the OTP component

const Register = ({ onClose, openLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showOTP, setShowOTP] = useState(false); // State to toggle OTP modal

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const payload = {
      username: username.trim(),
      email: email.trim(),
      phone_number: phoneNumber.trim(),
      address: address.trim(),
      password: password,
    };

    try {
      const response = await registerUser(payload);

      // Since backend now only sends OTP, not the user object
      if (response.data?.message === "OTP sent to your phone") {
        setSuccess("OTP sent! Please verify your phone number.");
        setShowOTP(true); // Open OTP modal
      } else {
        setError("Unexpected response from server.");
      }

      console.log("✅ Backend response:", response.data);

    } catch (err) {
      console.error("Backend error:", err.response?.data);
      setError(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-lg flex justify-center items-center z-50">
        <div className="relative bg-gradient-to-r from-[#B08DC180] via-[#A3CBEC80] to-[#A3CBEC80] rounded-xl p-8 shadow-2xl border-2 border-white/30 ring-4 ring-[#A3CBEC]/50 z-10 w-80 md:w-96 lg:w-[450px]">
          {/* Close button */}
          <button
            className="absolute top-2 right-3 text-white text-xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="text-center text-white text-2xl font-bold mb-6">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="text-white font-semibold mb-1">
              Username <span className="text-red-300">*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
              className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
            />

            <label className="text-white font-semibold mb-1">
              Email <span className="text-red-300">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
            />

            <label className="text-white font-semibold mb-1">
              Phone Number <span className="text-red-300">*</span>
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Enter your phone number"
              className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
            />

            <label className="text-white font-semibold mb-1">
              Address <span className="text-red-300">*</span>
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter your address"
              className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
            />

            <label className="text-white font-semibold mb-1">
              Password <span className="text-red-300">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
            />

            <button
              type="submit"
              className="bg-white text-gray-800 font-bold py-2 rounded-md hover:bg-gray-100 transition mb-4"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="text-center mt-2 text-white">
            Already have an account?{" "}
            <button
              onClick={onClose}
              className="font-semibold underline hover:text-gray-200"
            >
              Login
            </button>
          </div>
        </div>
        {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        {success && <p className="text-green-400 text-center mt-2">{success}</p>}
      </div>

      {/* Show OTP Modal after successful registration */}
      {showOTP && (
        <VerifyOTP
          phoneNumber={phoneNumber}
          onClose={() => {
            setShowOTP(false); // close OTP modal
            onClose(); // close Register modal
            openLogin(); // open Login modal
          }}
        />
      )}
    </>
  );
};

export default Register;
