import logo2 from "../assets/logo2.png";
export default function Footer() {
  return (
    <footer className="bg-[#1b2023] text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <img className="h-20 w-20 cursor-pointer" src={logo2} alt="Logo" />
              <span className="pt-4 ml-2 text-3xl font-bold">Freak Fit</span>
            </div>
            <p className="text-base text-white/80 leading-relaxed mt-2">
              FreakFit is a trusted online fitness platform helping 5,000+ clients
              achieve real results through structured programs in Zumba, Dance
              Fitness, Strength Training, Yoga, and Face Yoga. Guided by certified
              trainers, we focus on safe, effective, and enjoyable sessions—empowering
              individuals to lose weight, build strength, and sustain a healthier
              lifestyle.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-base text-white/80">
              <li>Zumba + Other Activities</li>
              <li>Weekend Yoga Sessions</li>
              <li>Weekly Diet Consultation</li>
              <li>Totally Live Session</li>
              <li>Flexible Time-Slots</li>
            </ul>
          </div>

          {/* Contact / Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-base text-white/80">
              <li>Email: freakfit22@gmail.com</li>
              <li>Phone: +91 95286 25403</li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Freak Fit. All rights reserved.
        </div>
      </div>
    </footer>
  );  
}  
