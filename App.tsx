
import React from 'react';
import DayOne from './components/DayOne';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a0505] text-gray-200 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0202] via-transparent to-[#0a0202] opacity-90 pointer-events-none" />
      
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* Branding - Minimal & Muted */}
      <header className="fixed top-0 left-0 w-full p-10 z-50 flex justify-center pointer-events-none">
        <h1 className="text-[10px] tracking-[0.8em] font-serif text-[#D4AF37] opacity-20 uppercase">Mellony</h1>
      </header>

      {/* Main Experience */}
      <main className="z-10 w-full flex flex-col items-center justify-center">
        <DayOne />
      </main>

      {/* Footer Vignette */}
      <div className="fixed bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </div>
  );
};

export default App;
