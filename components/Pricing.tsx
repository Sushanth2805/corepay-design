
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Simple, honest pricing</h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">Choose a plan that works for you. No hidden fees, cancel any time.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:border-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 font-medium mb-8">For small teams getting started.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black">$0</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-10">
              {['Up to 5 employees', 'Core payroll features', 'Standard support'].map(item => (
                <li key={item} className="flex items-center gap-3 font-medium">
                  <span className="text-green-400">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl border border-white/20 font-bold hover:bg-white hover:text-black transition-all">Get Started</button>
          </div>

          {/* Pro */}
          <div className="bg-[#FF5C35] p-10 rounded-[40px] border-2 border-black transform md:-translate-y-8 neobrutal-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold">Pro</h3>
              <span className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Popular</span>
            </div>
            <p className="text-white/80 font-medium mb-8">Best for scaling startups.</p>
            <div className="flex items-baseline gap-1 mb-8 text-black">
              <span className="text-5xl font-black">$29</span>
              <span className="font-bold">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 text-white font-bold">
              {['Unlimited employees', 'Advanced compliance', 'Priority support', 'Custom reporting'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-black">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-black text-white rounded-2xl font-bold transition-all hover:scale-105">Upgrade Now</button>
          </div>

          {/* Enterprise */}
          <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:border-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-400 font-medium mb-8">Custom tools for global scale.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black">Custom</span>
            </div>
            <ul className="space-y-4 mb-10">
              {['Global mobility assistance', 'Dedicated account manager', 'API access', 'SLA guarantees'].map(item => (
                <li key={item} className="flex items-center gap-3 font-medium">
                  <span className="text-green-400">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl border border-white/20 font-bold hover:bg-white hover:text-black transition-all">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
