import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CuratedSelection from './components/CuratedSelection';

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
