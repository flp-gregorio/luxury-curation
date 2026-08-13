import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CuratedSelection from './components/CuratedSelection';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CuratedSelection />
    </div>
  );
};

export default App;
