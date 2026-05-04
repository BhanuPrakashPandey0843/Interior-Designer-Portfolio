'use client';

import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Srestha Jyoti';

  useEffect(() => {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${!isVisible ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
        {/* Logo Icon */}
        <div className="splash-icon w-24 h-24 md:w-32 md:h-32">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="splashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a6b3a" />
                <stop offset="100%" stopColor="#c9a046" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Outer Circle */}
            <circle cx="100" cy="100" r="90" stroke="url(#splashGrad)" strokeWidth="2" opacity="0.3" />
            
            {/* Diamond Pattern - Pink */}
            <g filter="url(#glow)">
              <polygon points="100,40 130,70 100,100 70,70" fill="#1a6b3a" opacity="0.8" />
              <polygon points="100,100 130,130 100,160 70,130" fill="#1a6b3a" opacity="0.8" />
            </g>
            
            {/* Diamond Pattern - Gold */}
            <g filter="url(#glow)">
              <polygon points="60,70 80,90 60,110 40,90" fill="#c9a046" opacity="0.8" />
              <polygon points="140,70 160,90 140,110 120,90" fill="#c9a046" opacity="0.8" />
            </g>
            
            {/* Center Accent */}
            <circle cx="100" cy="100" r="20" fill="url(#splashGrad)" />
            <circle cx="100" cy="100" r="12" fill="#f4f8f4" />
            
            {/* Decorative dots */}
            <circle cx="100" cy="60" r="4" fill="#c9a046" opacity="0.6" />
            <circle cx="140" cy="100" r="4" fill="#c9a046" opacity="0.6" />
            <circle cx="100" cy="140" r="4" fill="#c9a046" opacity="0.6" />
            <circle cx="60" cy="100" r="4" fill="#c9a046" opacity="0.6" />
          </svg>
        </div>

        {/* Text with Typewriter Animation */}
        <div className="min-h-28 flex items-center justify-center px-6">
          <div className="typewriter-text text-4xl sm:text-5xl md:text-6xl text-center">
            {displayedText}
            {displayedText.length > 0 && displayedText.length < 'Srestha Jyoti'.length && (
              <span className="typewriter-cursor"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
