
import React, { useState, useEffect } from 'react';

const DayOne: React.FC = () => {
  const [tapCount, setTapCount] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isFinalVisible, setIsFinalVisible] = useState(false);

  const handleTap = () => {
    if (tapCount < 3) {
      setTapCount(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (tapCount === 3) {
      // Reward patience: deliberate delays
      const textTimer = setTimeout(() => {
        setIsTextVisible(true);
      }, 1200);

      const finalTimer = setTimeout(() => {
        setIsFinalVisible(true);
      }, 4500);

      // Silent state persistence
      localStorage.setItem('mellony_rose_completed', 'true');

      return () => {
        clearTimeout(textTimer);
        clearTimeout(finalTimer);
      };
    }
  }, [tapCount]);

  return (
    <div className="container" onClick={handleTap}>
      {/* Interaction Stage: Rose Bloom */}
      <svg 
        viewBox="0 0 100 100" 
        className={`rose-svg stage-${tapCount}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stem: Constant */}
        <path 
          d="M50 95C50 95 48 80 50 65" 
          stroke="#0a0202" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        
        {/* Bloom Petals: Animated via CSS classes */}
        <path 
          className="petal petal-outer-l" 
          d="M48 65C40 65 30 55 35 40C40 25 50 30 50 45" 
          fill="#4a0808" 
        />
        <path 
          className="petal petal-outer-r" 
          d="M52 65C60 65 70 55 65 40C60 25 50 30 50 45" 
          fill="#4a0808" 
        />
        <path 
          className="petal petal-mid" 
          d="M50 62C40 62 35 50 42 42C46 32 50 35 50 45C50 35 54 32 58 42C65 50 60 62 50 62Z" 
          fill="#5c0b0b" 
        />
        <path 
          className="petal petal-core" 
          d="M50 60C48 60 45 55 46 48C47 41 50 42 50 45C50 42 53 41 54 48C55 55 52 60 50 60Z" 
          fill="#7a0d0d" 
        />
      </svg>

      {/* The Reveal */}
      <div className={`quote ${isTextVisible ? 'visible' : ''}`}>
        <p className="line-1">“You don’t need an audience.</p>
        <p className="line-2">You just need the moment.”</p>
      </div>

      {/* End in stillness */}
      <div className={`final-reveal ${isFinalVisible ? 'visible' : ''}`}>
        Happy Rose Day
      </div>
    </div>
  );
};

export default DayOne;
