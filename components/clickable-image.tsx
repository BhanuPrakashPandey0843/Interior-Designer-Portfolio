'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface ClickableImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export function ClickableImage({
  src,
  alt,
  fill = false,
  className = '',
  width,
  height,
  style
}: ClickableImageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsFullscreen(false);
    }
  };

  return (
    <>
      <div 
        className="relative group cursor-pointer w-full h-full" 
        onClick={() => setIsFullscreen(true)}
        onKeyDown={handleEscape}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
          style={style}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
            <Maximize2 size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Close fullscreen"
          >
            <X size={32} className="text-white" />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Close hint */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm pointer-events-none animate-pulse">
            Click or press ESC to close
          </div>
        </div>
      )}
    </>
  );
}
