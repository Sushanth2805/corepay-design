
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-12 px-10">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Content */}
        <div className="lg:col-span-6 pt-8 relative">
          {/* Sparkle graphic */}
          <div className="absolute -top-6 -left-8">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14 10" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M4 16L12 14" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M2 30L10 24" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h1 className="text-[56px] md:text-[76px] font-extrabold text-[#1A1A1A] leading-[1.05] headline-tracking mb-8">
            Pay your team globally, without the headaches.
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-relaxed max-w-[440px] mb-12">
            A modern platform to send, manage, and track payments simple setup, transparent pricing, no surprises.
          </p>

          <div className="flex items-center gap-10">
            <button className="px-8 py-3.5 bg-[#FF5C35] text-white text-[16px] font-bold rounded-xl border-2 border-black neobrutal-shadow transition-all neobrutal-shadow-hover">
              Try for free
            </button>
            <button className="flex items-center gap-2 text-[16px] font-bold text-[#1A1A1A] group">
              How it works
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="lg:col-span-6 relative h-[500px]">
          {/* Back Card (White) */}
          <div className="absolute top-0 right-0 w-[420px] aspect-[1.58/1] bg-[#FDFBF7] rounded-[24px] border border-black p-10 transform rotate-[10deg] translate-x-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] z-0">
            <div className="flex justify-between items-start mb-12">
              <span className="text-gray-600 font-bold text-lg">Credit</span>
              <span className="text-3xl font-black italic text-gray-800">VISA</span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 text-2xl font-bold tracking-widest text-gray-700">
                <span>4802</span>
                <span>2215</span>
                <span>1183</span>
              </div>
              <p className="text-gray-500 text-lg font-bold">MELLISSA MCCARTHY</p>
            </div>
          </div>

          {/* Front Card (Orange) */}
          <div className="absolute top-32 right-12 w-[420px] aspect-[1.58/1] bg-[#FF5C35] rounded-[24px] border-2 border-black p-10 transform -rotate-[5deg] shadow-[24px_24px_0px_0px_rgba(0,0,0,0.08)] z-10">
            <div className="flex justify-between items-start mb-12">
              <span className="text-white/80 font-bold text-lg">Credit</span>
              <span className="text-3xl font-black italic text-white">VISA</span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 text-2xl font-bold tracking-widest text-white">
                <span>4802</span>
                <span>2215</span>
                <span>1183</span>
                <span>4289</span>
              </div>
              <p className="text-white text-lg font-bold">MELLISSA MCCARTHY</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
