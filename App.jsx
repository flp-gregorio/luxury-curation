import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CuratedSelection from './CuratedSelection';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      <Navbar />
      <HeroSection />
      <CuratedSelection />
    </div>
  );
};

export default App;
