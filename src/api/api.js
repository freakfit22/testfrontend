

import axios from "axios";

// Create axios instance with base URL from .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json", // Force JSON
  },
});

// ================= API CALLS =================
export const registerUser = (userData) => {
  // Trim all string fields to prevent validation errors
  const payload = {
    username: userData.username?.trim(),
    email: userData.email?.trim(),
    phone_number: userData.phone_number?.trim(),
    address: userData.address?.trim(),
    password: userData.password, // password may contain spaces, leave as is
  };
  return api.post("/register/", payload);
};

export const verifyOTP = (otpData) => {
  const payload = {
    phone_number: otpData.phone_number?.trim(),
    otp: otpData.otp?.trim(),
  };
  return api.post("/verify-otp/", payload);
};

// Add this at the bottom of your api.js
export const loginUser = (credentials) => {
  const payload = {
    username: credentials.username?.trim(), // or phone_number if you login with phone
    password: credentials.password,
  };
  return api.post("/login/", payload);
};


// You can add more APIs like:
// export const loginUser = (credentials) => api.post("/login/", credentials);

export default api;
