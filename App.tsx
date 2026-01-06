
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <TrustedBy />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
