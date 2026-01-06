
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white px-6 pt-24 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF5C35] rounded-lg flex items-center justify-center rotate-12">
                <div className="w-4 h-1 bg-white -rotate-45 translate-y-[-2px]"></div>
                <div className="w-4 h-1 bg-white -rotate-45 translate-y-[2px]"></div>
              </div>
              <span className="text-xl font-extrabold text-[#1A1A1A] tracking-tight">CorePay</span>
            </div>
            <p className="text-gray-500 font-medium max-w-sm leading-relaxed">
              Making global finance easy for everyone. We believe in a world without borders for money.
            </p>
            <div className="flex gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#FF5C35] hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold text-xs uppercase">S{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-6">Product</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="hover:text-black transition-colors cursor-pointer">Payroll</li>
              <li className="hover:text-black transition-colors cursor-pointer">HRIS</li>
              <li className="hover:text-black transition-colors cursor-pointer">Compliance</li>
              <li className="hover:text-black transition-colors cursor-pointer">Contractors</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="hover:text-black transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-black transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-black transition-colors cursor-pointer">Press</li>
              <li className="hover:text-black transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="hover:text-black transition-colors cursor-pointer">Privacy</li>
              <li className="hover:text-black transition-colors cursor-pointer">Terms</li>
              <li className="hover:text-black transition-colors cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-6">
          <p className="text-gray-400 font-medium text-sm">© 2024 CorePay Inc. All rights reserved.</p>
          <div className="flex gap-8 text-gray-400 font-medium text-sm">
            <span className="hover:text-black cursor-pointer">Status</span>
            <span className="hover:text-black cursor-pointer">Security</span>
            <span className="hover:text-black cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
