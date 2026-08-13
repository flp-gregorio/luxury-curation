import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#0a0a0a] p-4 border-b border-gray-800 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center px-8 py-6">
        {/* Left - Logo */}
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl">AN</h1>
          <span className="text-[#B89973] text-xs tracking-[0.2em] uppercase">ATELIER NOIR</span>
          <span className="text-gray-500 text-xs tracking-[0.2em] mt-1">ART / DESIGN / LUXURY</span>
        </div>

        {/* Center - Links */}
        <ul className="flex space-x-8">
          {['ART', 'COLLECTIBLES', 'FURNITURE', 'WATCHES', 'AUTOMOTIVE', 'MISCELLANEA'].map((item) => (
            <li key={item}>
              <a href="#" className="text-white hover:text-[#B89973] uppercase text-sm tracking-[0.2em]">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-[#B89973]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-white hover:text-[#B89973]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="border border-[#B89973] text-[#B89973] px-6 py-2 hover:bg-[#B89973] hover:text-black transition-colors duration-300">
            PRIVATE ACCESS
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
