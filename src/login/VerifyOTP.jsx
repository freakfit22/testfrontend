
import React, { useState } from "react";
import { verifyOTP } from "../api/api"; // import the API call

const VerifyOTP = ({ phoneNumber, onClose, openLogin }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await verifyOTP({
        phone_number: phoneNumber,
        otp,
      });

      setSuccess("OTP verified successfully!");
      console.log("✅ OTP Verified:", response.data);

      // Redirect to Login modal after 1 second
      setTimeout(() => {
        onClose();   // close OTP modal
        openLogin(); // open Login modal
      }, 1000);

    } catch (err) {
      setError(err.response?.data?.detail || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-lg flex justify-center items-center z-50">
      <div className="relative bg-gradient-to-r from-[#B08DC180] via-[#A3CBEC80] to-[#A3CBEC80] rounded-xl p-8 shadow-2xl border-2 border-white/30 ring-4 ring-[#A3CBEC]/50 z-10 w-80 md:w-96 lg:w-[450px]">
        <button
          className="absolute top-2 right-3 text-white text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-center text-white text-2xl font-bold mb-6">
          Verify OTP
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-white font-semibold mb-1">
            OTP <span className="text-red-300">*</span>
          </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            placeholder="Enter the OTP"
            className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-gray-800 font-bold py-2 rounded-md hover:bg-gray-100 transition mb-4"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <div className="text-center mt-2 text-white">
          Didn't receive OTP?{" "}
          <button
            onClick={() => console.log("Resend OTP logic")}
            className="font-semibold underline hover:text-gray-200"
          >
            Resend
          </button>
        </div>
      </div>
      {error && <p className="text-red-400 text-center mt-2">{error}</p>}
      {success && <p className="text-green-400 text-center mt-2">{success}</p>}
    </div>
  );
};

export default VerifyOTP;
