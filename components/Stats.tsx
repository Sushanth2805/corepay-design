
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Countries supported', value: '40+' },
    { label: 'Satisfied Clients', value: '120+' },
    { label: 'Payments processed', value: '10k+' },
  ];

  return (
    <section className="px-10 mt-12 mb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#FF5C35] rounded-[28px] py-10 px-10 flex flex-col md:flex-row items-center justify-around gap-12 border-2 border-black/5 shadow-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <h3 className="text-[52px] md:text-[62px] font-extrabold text-[#1A1A1A] mb-1 leading-none tracking-tight">
                {stat.value}
              </h3>
              <p className="text-[17px] font-bold text-[#1A1A1A]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
