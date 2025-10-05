import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Hero";
import ProgramSection from "./sections/ProgramSection";
import LevelUp from "./sections/LevelUp";
import PersonalTrainer from "./sections/PersonalTrainer";
import PricingSection from "./sections/PricingSection";
import MemberUsSection from "./sections/MemberUsSection";
import ChooseSection from "./sections/ChooseSection";
import AnimatedLogo from "./components/AnimatedLogo";
import Login from "./login/Login";
import Register from "./login/Register";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const showExtraSections = location.pathname === "/";

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#1f252b] z-50">
        <AnimatedLogo />
      </div>
    );
  }

  return (
    <div className="bg-[radial-gradient(circle_at_top_left,_#a885b9_-20%,_#1f252b_20%)]">
      <Header
        openLogin={() => {
          setIsLoginOpen(true);
          setIsRegisterOpen(false);
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Login Modal */}
      {isLoginOpen && (
        <Login
          onClose={() => setIsLoginOpen(false)}
          openRegister={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
        />
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <Register
          onClose={() => setIsRegisterOpen(false)}
          openLogin={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
        />
      )}

  

      {showExtraSections && (
        <>
          <div className="md:bg-transparent bg-[#1f252b] text-white">
            <ProgramSection />
          </div>
          <LevelUp />
          <PersonalTrainer />
          <PricingSection />
          <MemberUsSection />
          <ChooseSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
