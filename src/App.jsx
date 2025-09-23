import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Hero";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProgramSection from "./sections/ProgramSection";
import LevelUp from "./sections/LevelUp";
import PersonalTrainer from "./sections/PersonalTrainer";
import PricingSection from "./sections/PricingSection";
import MemberUsSection from "./sections/MemberUsSection";
import ChooseSection from "./sections/ChooseSection";
import PersonalTrainerSection from "./sections/TrainingAbout";

function App() {
  const location = useLocation();

  // Only show sections/footer on specific routes
  const showExtraSections = location.pathname === "/" ;

  return (
    <div className="bg-[radial-gradient(circle_at_top_left,_#a885b9_-20%,_#1f252b_20%)]">
      {/* ✅ Header always visible */}
      <Header />

      {/* ✅ Page-specific content */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/product" element={<Product />} /> */}
      </Routes>

      {/* ✅ Conditional sections and footer */}
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
          {/* <PersonalTrainerSection /> */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
