
import React, { useState, useEffect } from 'react';

const DayOne: React.FC = () => {
  const [tapCount, setTapCount] = useState(0);
  const [isFullyOpen, setIsFullyOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handleTap = () => {
    if (tapCount < 3) {
      setTapCount(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (tapCount === 3) {
      // Logic for the final reveal
      const openTimer = setTimeout(() => {
        setIsFullyOpen(true);
      }, 500);

      const quoteTimer = setTimeout(() => {
        setShowQuote(true);
      }, 1500);

      const finalTimer = setTimeout(() => {
        setShowFinal(true);
      }, 4000);

      localStorage.setItem('mellony_rose_completed', 'true');

      return () => {
        clearTimeout(openTimer);
        clearTimeout(quoteTimer);
        clearTimeout(finalTimer);
      };
    }
  }, [tapCount]);

  // Bloom stage calculations for the SVG
  const getScale = () => {
    if (tapCount === 0) return 0.85;
    if (tapCount === 1) return 0.92;
    if (tapCount === 2) return 1.0;
    return 1.1;
  };

  const getOpacity = () => {
    if (tapCount === 0) return 0.4;
    if (tapCount === 1) return 0.6;
    if (tapCount === 2) return 0.8;
    return 1.0;
  };

  return (
    <div 
      className="relative w-full max-w-lg flex flex-col items-center justify-center px-6 min-h-[80vh] select-none cursor-pointer"
      onClick={handleTap}
    >
      {/* Central Asset: The Blooming Rose SVG */}
      <div className="relative mb-24 transition-all duration-1000 ease-out" style={{ transform: `scale(${getScale()})` }}>
        {/* Glow behind the rose */}
        <div 
          className="absolute inset-0 bg-[#9e1b32] rounded-full blur-[100px] transition-opacity duration-[2000ms]" 
          style={{ opacity: tapCount * 0.05 + (isFullyOpen ? 0.1 : 0) }}
        />
        
        <div 
          className="relative transition-all duration-1000 ease-in-out"
          style={{ 
            opacity: getOpacity(),
            filter: tapCount === 0 ? 'grayscale(0.5) brightness(0.6)' : 'none'
          }}
        >
          <svg 
            width="200" 
            height="200" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_15px_rgba(158,27,50,0.3)]"
          >
            {/* Stem */}
            <path 
              d="M50 95C50 95 48 80 50 65" 
              stroke="#1a0505" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              className="opacity-80"
            />
            
            {/* Petals - Outer Left */}
            <path 
              d="M48 65C40 65 30 55 35 40C40 25 50 30 50 45" 
              fill="#5c0b0b" 
              className={`transition-all duration-1000 ${tapCount > 0 ? 'translate-x-[-2px] rotate-[-5deg]' : ''}`}
            />
            {/* Petals - Outer Right */}
            <path 
              d="M52 65C60 65 70 55 65 40C60 25 50 30 50 45" 
              fill="#5c0b0b" 
              className={`transition-all duration-1000 ${tapCount > 0 ? 'translate-x-[2px] rotate-[5deg]' : ''}`}
            />
            
            {/* Middle Petals */}
            <path 
              d="M50 62C44 62 38 52 42 42C46 32 50 35 50 45" 
              fill="#7a0d0d" 
              className={`transition-all duration-1000 ${tapCount > 1 ? 'translate-x-[-3px] scale-105' : ''}`}
            />
            <path 
              d="M50 62C56 62 62 52 58 42C54 32 50 35 50 45" 
              fill="#7a0d0d" 
              className={`transition-all duration-1000 ${tapCount > 1 ? 'translate-x-[3px] scale-105' : ''}`}
            />
            
            {/* Core */}
            <path 
              d="M50 60C48 60 45 55 46 48C47 41 50 42 50 45C50 42 53 41 54 48C55 55 52 60 50 60Z" 
              fill="#9e1b32" 
              className={`transition-all duration-1000 ${tapCount > 2 ? 'scale-110' : ''}`}
            />
          </svg>
        </div>

        {/* Muted Instructions - Only visible at very start, then vanishes */}
        {tapCount === 0 && (
          <div className="absolute -bottom-16 w-full text-center fade-in">
            <p className="text-[10px] tracking-[0.6em] uppercase text-[#D4AF37]/30 animate-pulse">
              Tap for magic
            </p>
          </div>
        )}
      </div>

      {/* Reveal Area */}
      <div className="h-48 flex flex-col items-center justify-start text-center w-full">
        {showQuote && (
          <div className="fade-in space-y-8 max-w-xs transition-opacity duration-1000">
            <p className="font-serif text-xl md:text-2xl text-white/90 tracking-wide leading-relaxed">
              “You don’t need an audience.”
            </p>
            <p className="font-serif text-lg md:text-xl text-[#9e1b32] tracking-[0.15em] opacity-80 italic">
              “You just need the moment.”
            </p>
          </div>
        )}

        {showFinal && (
          <div className="fade-in mt-16 flex flex-col items-center space-y-4 opacity-0 animate-[fadeIn_2s_ease-out_forwards]">
            <div className="w-8 h-px bg-[#D4AF37]/20 mb-4" />
            <h2 className="font-serif text-xl text-[#D4AF37]/80 tracking-[0.4em] uppercase">
              Happy Rose Day 🌹
            </h2>
            <p className="text-[10px] tracking-[0.2em] text-gray-600 opacity-60">
              ✨ 🥀 ✨
            </p>
          </div>
        )}
      </div>

      {/* Footer Vignette (Internal) */}
      <div className="mt-12 w-px h-12 bg-gradient-to-b from-[#9e1b32]/20 to-transparent opacity-40" />
    </div>
  );
};

export default DayOne;
