
import React from 'react';

const TrustedBy: React.FC = () => {
  const partners = ['Stripe', 'Airbnb', 'HubSpot', 'Microsoft', 'Uber', 'Amazon'];

  return (
    <section className="py-12 px-6 border-y border-black/5 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm mb-10">Trusted by the world's most innovative teams</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner) => (
            <span key={partner} className="text-2xl font-black text-gray-800 tracking-tighter">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
