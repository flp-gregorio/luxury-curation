import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
    return (
        <nav className="bg-transparent flex justify-between items-center p-4">
            <div className="text-[#c4b5a2] font-bold text-lg">ATELIER NOIR (ART / DESIGN / LUXURY)</div>
            <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#c4b5a2]">ART</a>
                <a href="#" className="text-white hover:text-[#c4b5a2]">COLLECTIBLES</a>
                <a href="#" className="text-white hover:text-[#c4b5a2]">FURNITURE</a>
                <a href="#" className="text-white hover:text-[#c4b5a2]">WATCHES</a>
                <a href="#" className="text-white hover:text-[#c4b5a2]">AUTOMOTIVE</a>
                <a href="#" className="text-white hover:text-[#c4b5a2]">MISCELLANEA</a>
            </div>
            <div className="flex space-x-4">
                <i className="fas fa-search text-white"></i>
                <i className="fas fa-user text-white"></i>
                <button className="text-[#c4b5a2] border border-[#c4b5a2] px-4 py-1">PRIVATE ACCESS</button>
            </div>
        </nav>
    );
};

const HeroSection = () => {
    return (
        <section className="flex justify-between items-center p-8">
            <div className="w-1/2">
                <h1 className="text-[#c4b5a2] text-6xl font-serif">EXCEPTIONAL ARTIFACTS. TIMELESS VALUE.</h1>
                <p className="mt-4 text-lg">Descubra uma coleção única de arte e luxo que transcende o tempo.</p>
                <button className="bg-[#c4b5a2] text-black px-6 py-3 mt-8">EXPLORE COLLECTION -></button>
            </div>
            <div className="w-1/2">
                <div className="bg-black p-8 rounded-lg relative">
                    <img src="https://via.placeholder.com/400" alt="Hero Image" className="rounded-lg"/>
                    <div className="absolute bottom-4 right-4 text-[#c4b5a2]">01 / 06</div>
                </div>
            </div>
        </section>
    );
};

const CuratedSelection = () => {
    return (
        <section className="p-8">
            <h2 className="text-[#c4b5a2] text-3xl font-bold">CURATED SELECTION</h2>
            <hr className="border-b border-[#c4b5a2] my-4"/>
            <a href="#" className="text-[#c4b5a2] hover:text-white">VIEW ALL -></a>
            <div className="grid grid-cols-4 gap-8 mt-8">
                <div className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition duration-300">
                    <h3 className="text-[#c4b5a2] text-xl font-bold">AUTOMOTIVE</h3>
                    <p className="mt-2">Descubra veículos de luxo exclusivos.</p>
                </div>
                <div className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition duration-300">
                    <h3 className="text-[#c4b5a2] text-xl font-bold">SCULPTURES</h3>
                    <p className="mt-2">Explore esculturas de arte contemporânea.</p>
                </div>
                <div className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition duration-300">
                    <h3 className="text-[#c4b5a2] text-xl font-bold">RARE TIMEPIECES</h3>
                    <p className="mt-2">Conheça relógios de luxo raros.</p>
                </div>
                <div className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition duration-300">
                    <h3 className="text-[#c4b5a2] text-xl font-bold">COLLECTOR'S FURNITURE</h3>
                    <p className="mt-2">Adquira móveis de colecionador premium.</p>
                </div>
            </div>
        </section>
    );
};

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CuratedSelection />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
