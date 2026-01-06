
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
      <nav className="w-full max-w-[1000px] bg-white/60 backdrop-blur-md border border-white/40 rounded-full px-6 py-2 flex items-center justify-between shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group shrink-0">
          <div className="w-7 h-7 bg-[#FF5C35] rounded-lg flex flex-col items-center justify-center rotate-3 shadow-sm group-hover:rotate-12 transition-transform">
             <div className="w-3 h-[1.8px] bg-white -rotate-45 translate-y-[0.8px]"></div>
             <div className="w-3 h-[1.8px] bg-white -rotate-45 translate-y-[3.5px]"></div>
          </div>
          <span className="text-lg font-extrabold text-[#1A1A1A] tracking-tight">CorePay</span>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-[13px] font-bold text-gray-500 group-hover:text-black transition-colors">Features</span>
            <svg className="w-2.5 h-2.5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <a href="#" className="text-[13px] font-bold text-gray-500 hover:text-black transition-colors">Pricing</a>
          <a href="#" className="text-[13px] font-bold text-gray-500 hover:text-black transition-colors">Blogs</a>
          <a href="#" className="text-[13px] font-bold text-gray-500 hover:text-black transition-colors">FAQs</a>
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-[13px] font-bold text-gray-500 group-hover:text-black transition-colors">More</span>
            <svg className="w-2.5 h-2.5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="text-[13px] font-bold text-gray-500 hover:text-black transition-colors">Login</button>
          <button className="bg-[#FF5C35] text-white px-5 py-2 rounded-full text-[13px] font-bold hover:bg-[#ff4a1d] transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#FF5C35]/20">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
