
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Global Payroll",
      desc: "Hire and pay employees in 150+ currencies across the globe in seconds.",
      icon: "🌍"
    },
    {
      title: "Compliance Built-in",
      desc: "We handle local taxes, benefits, and labor laws automatically for you.",
      icon: "🛡️"
    },
    {
      title: "Instant Transfers",
      desc: "No more waiting for banks. Money moves at the speed of your business.",
      icon: "⚡"
    },
    {
      title: "Smart Reporting",
      desc: "Get insights into your global spending with automated reporting tools.",
      icon: "📊"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">Features for modern teams</h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl">Everything you need to manage international operations without ever leaving your dashboard.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border-2 border-black/5 transition-all hover:border-[#FF5C35] hover:shadow-xl group">
              <div className="text-4xl mb-6 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300 inline-block">
                {f.icon}
              </div>
              <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-3">{f.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
