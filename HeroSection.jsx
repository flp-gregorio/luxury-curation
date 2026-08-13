import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#141414] text-white py-20 min-h-[80vh]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-8">
        {/* Left Column - Copy */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-serif leading-tight mb-6">EXCEPTIONAL ARTIFACTS. TIMELESS VALUE.</h2>
          <p className="text-gray-400 font-sans mb-8">Curated selection of rare art, iconic objects and extraordinary pieces for a discerning few.</p>
          <button className="border border-[#B89973] text-[#B89973] px-8 py-3 w-fit hover:bg-[#B89973] hover:text-black transition-colors duration-300">
            EXPLORE COLLECTION -&gt;
          </button>
        </div>

        {/* Right Column - Visual */}
        <div className="relative">
          <div className="bg-[#1a1a1a] w-full h-96 rounded-lg overflow-hidden flex items-center justify-center">
            <img 
              src="https://placehold.co/600x400/1a1a1a/B89973" 
              alt="Golden winged sculpture" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Pagination indicator */}
          <div className="absolute bottom-0 right-0 flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#B89973]' : 'bg-gray-700'}`}
                ></div>
              ))}
            </div>
            <span className="text-gray-500 text-sm">01 / 06</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
