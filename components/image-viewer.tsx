'use client';

import { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface ImageViewerProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageViewer({ src, alt, className = '' }: ImageViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 75) {
      // Swiped left - could add navigation if needed
    }
    if (touchEnd - touchStart > 75) {
      // Swiped right
    }
  };

  return (
    <>
      <div className={`relative group cursor-pointer ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          onClick={() => setIsFullscreen(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
        
        {/* Overlay with icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
            <Maximize2 size={28} className="text-white" />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10 group"
            aria-label="Close fullscreen"
          >
            <X size={32} className="text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center animate-zoom-in">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Click to close hint */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm pointer-events-none animate-pulse">
            Click or press ESC to close
          </div>
        </div>
      )}
    </>
  );
}
