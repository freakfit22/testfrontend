

// import React, { useState } from "react";

// const Login = ({ onClose, openRegister }) => {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Phone: ${phone}\nPassword: ${password}`);
//   };

//   const handleRegister = () => {
//     alert("Redirect to Registration page");
//   };

//   const handleForgotPassword = () => {
//     alert("Redirect to Forgot Password page");
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-lg flex justify-center items-center z-50">
//   <div className="relative w-80">
//     {/* Backlight / Glow */}
//     <div className="absolute -inset-2 rounded-xl bg-white/10 blur-3xl"></div>

//     {/* Actual popup */}
// <div className="relative 
//                 bg-gradient-to-r 
//                 from-[#B08DC180]  /* 80 = 50% opacity */
//                 via-[#A3CBEC80] 
//                 to-[#A3CBEC80] 
//                 rounded-xl p-8 
//                 shadow-2xl border-2 border-white/30 
//                 ring-4 ring-[#A3CBEC]/50 z-10">      {/* Close button */}
//       <button
//         className="absolute top-2 right-3 text-white text-xl font-bold"
//         onClick={onClose}
//       >
//         &times;
//       </button>

//       <h2 className="text-center text-white text-2xl font-bold mb-6">
//         Login
//       </h2>

//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <label className="text-white font-semibold mb-1">
//           Phone Number <span className="text-red-300">*</span>
//         </label>
//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//           placeholder="Enter your phone number"
//             className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
//         />

//         <label className="text-white font-semibold mb-1">
//           Password <span className="text-red-300">*</span>
//         </label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           placeholder="Enter your password"
//             className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
//         />

//         <div className="text-right mb-4">
//           <button
//             type="button"
//             onClick={handleForgotPassword}
//             className="text-white text-sm underline hover:text-gray-200"
//           >
//             Forgot Password?
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="bg-white text-gray-800 font-bold py-2 rounded-md hover:bg-gray-100 transition mb-4"
//         >
//           Login
//         </button>
//       </form>

    
//          <div className="text-center mt-2">
//         <span className="text-white mr-2">Don't have an account?</span>
//           <button onClick={openRegister} className="text-white font-semibold underline hover:text-gray-200">
//             Register
//           </button>
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default Login;





import React, { useState } from "react";
import { loginUser } from "../api/api"; // import API call

const Login = ({ onClose, openRegister }) => {
  const [username, setUsername] = useState(""); // change from phone if backend uses username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await loginUser({ username, password });
      console.log("✅ Login successful:", response.data);

      // Save tokens in localStorage
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Close login modal
      onClose();
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-lg flex justify-center items-center z-50">
      <div className="relative w-80">
        {/* Backlight / Glow */}
        <div className="absolute -inset-2 rounded-xl bg-white/10 blur-3xl"></div>

        {/* Actual popup */}
        <div className="relative bg-gradient-to-r from-[#B08DC180] via-[#A3CBEC80] to-[#A3CBEC80] rounded-xl p-8 shadow-2xl border-2 border-white/30 ring-4 ring-[#A3CBEC]/50 z-10">
          {/* Close button */}
          <button className="absolute top-2 right-3 text-white text-xl font-bold" onClick={onClose}>
            &times;
          </button>

          <h2 className="text-center text-white text-2xl font-bold mb-6">Login</h2>

          {error && <p className="text-red-400 text-center mb-2">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="text-white font-semibold mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
              className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3CBEC]"
            />

            <label className="text-white font-semibold mb-1">Password</label>
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-2">
            <span className="text-white mr-2">Don't have an account?</span>
            <button onClick={openRegister} className="text-white font-semibold underline hover:text-gray-200">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
