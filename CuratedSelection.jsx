import React from 'react';

const CuratedSelection = () => {
  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Seleção Cuidadosamente Curada</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#141414] p-6 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Item 1" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Item 1</h3>
            <p className="text-gray-300">Descrição do item 1.</p>
          </div>
          <div className="bg-[#141414] p-6 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Item 2" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Item 2</h3>
            <p className="text-gray-300">Descrição do item 2.</p>
          </div>
          <div className="bg-[#141414] p-6 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Item 3" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Item 3</h3>
            <p className="text-gray-300">Descrição do item 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedSelection;
