import { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-transparent text-2xl absolute md:top-8 w-full z-50 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4 md:space-x-6 ml-2 md:ml-12 ">
          <img src={logo2} alt="Logo" className="w-16 h-auto" />

          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Freak Fit
            </h1>
            <p className="text-xs md:text-sm text-white/70 -mt-1">
              the best way to get fit online
            </p>
          </div>
        </div>

        <nav className="space-x-18 md:text-2xl font-semibold  hidden md:flex">
          {/* <Link to="/" className="hover:underline hover:text-black">
            Home
          </Link> */}
          {/* <Link to="/product" className="hover:underline hover:text-black">
            Product
          </Link>
          <Link to="/contact" className="hover:underline hover:text-black">
            Contact
          </Link> */}

          {/* <Link
            to="/login"
            className="border border-white px-6 py-1 text-white md:ml-85 md:mr-50 font-medium hover:bg-white hover:text-black transition"
          >
            Login
          </Link> */}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden mr-6">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="focus:outline-none"
          >
            {/* <div className="flex flex-col space-y-1.5">
              <span className="w-8 h-0.5 bg-white ml-2"></span>
              <span className="w-6 h-0.5 bg-white ml-4"></span>
              <span className="w-4 h-0.5 bg-white ml-6"></span>
            </div> */}
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-transparent transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1f252b] text-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <div className="flex items-center space-x-4 md:space-x-6 ml-2 md:ml-12">
            <img
              src="src/assets/logo2.png"
              alt="Freak Fit Logo"
              className="w-12 md:w-16 h-auto"
            />

            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Freak Fit
              </h1>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-2xl"
          >
            &times;
          </button>
        </div>
        {/* <nav className="flex flex-col p-4 space-y-4 text-lg  font-medium">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>
            Product
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
        </nav> */}
      </div>
    </>
  );
};

export default Header;
