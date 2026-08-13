import React from 'react';

const CuratedSelection = () => {
  const items = [
    {
      id: 1,
      title: 'Capricorn 01 Zagato',
      category: 'Automotive'
    },
    {
      id: 2,
      title: 'The Flight',
      category: 'Sculpture'
    },
    {
      id: 3,
      title: 'Grand Complications',
      category: 'Watches'
    },
    {
      id: 4,
      title: 'Iconic Design',
      category: 'Furniture'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-16 px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl font-serif">CURATED SELECTION</h2>
          <div className="flex-grow border-t border-gray-800 mx-6"></div>
          <a href="#" className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#B89973]">
            VIEW ALL -&gt;
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item) => (
            <div key={item.id} className="bg-[#141414] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-[#1a1a1a] h-64 flex items-center justify-center">
                <img 
                  src="https://placehold.co/600x400/1a1a1a/B89973" 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs mb-4">{item.category}</p>
                <a href="#" className="text-[#B89973] text-sm flex items-center justify-end">
                  →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedSelection;
