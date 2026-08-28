import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CuratedSelection from '../components/CuratedSelection';

const Landing = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-200 font-sans w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition / Features */}
      <section className="py-24 px-8 bg-[#0f0f0f] border-y border-[#1a1a1a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">A Nova Era do Colecionismo</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Acesso exclusivo às peças mais raras e desejadas do mundo. Curadoria especializada para os colecionadores mais exigentes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 text-[#A69076]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Autenticidade Garantida</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Cada peça passa por uma rigorosa verificação de procedência e autenticidade por nossos especialistas.</p>
            </div>
            <div className="p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 text-[#A69076]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Acesso Antecipado</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Membros recebem notificações prioritárias sobre novas aquisições antes de irem a público.</p>
            </div>
            <div className="p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 text-[#A69076]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Curadoria Global</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Buscamos incansavelmente ao redor do mundo pelos artefatos mais excepcionais e de valor histórico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Selection Section (Existing Component) */}
      <div className="py-8">
        <CuratedSelection />
      </div>

      {/* CTA Section */}
      <section className="py-24 px-8 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A69076] via-black to-black"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Pronto para iniciar sua coleção?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Junte-se a um grupo seleto de colecionadores e tenha acesso ao nosso portfólio restrito de peças extraordinárias.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/login" className="bg-[#A69076] text-white px-10 py-4 w-full sm:w-auto hover:bg-[#8B7355] transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold shadow-[0_0_20px_rgba(166,144,118,0.3)] hover:shadow-[0_0_30px_rgba(166,144,118,0.5)]">
              Criar Conta Exclusiva
            </Link>
            <Link to="/catalogo" className="border border-white/30 text-white px-10 py-4 w-full sm:w-auto hover:border-[#A69076] hover:text-[#A69076] transition-colors duration-300 text-xs tracking-[0.2em] uppercase">
              Explorar o Catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
