'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export function FurnitureShowroomCaseStudy() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const openImage = (src: string) => setFullscreenImage(src);
  const closeImage = () => setFullscreenImage(null);

  return (
    <div className="w-full space-y-20 animate-fade-in-up">

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="text-center space-y-5">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gradient">
          Furniture Showroom
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The furniture showroom features a sculptural shell-like exterior that draws visitors into
          a calm, open interior. The layout is thoughtfully organized into curated zones, allowing
          each furniture piece to be experienced in a realistic setting. Natural materials, soft
          lighting, and subtle detailing create a warm and minimal atmosphere, balancing
          functionality with quiet visual appeal. The space is designed to feel open, making the
          showroom both inviting and easy to navigate.
        </p>
      </div>

      {/* ── DESIGN PROCESS ─────────────────────────────────────── */}
      <div className="space-y-16">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center uppercase tracking-widest text-gradient">
          Design Process
        </h2>

        {/* ── 1. MoodBoard ──────────────────────────────────────── */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">MoodBoard</h3>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-12">
            This highlights soft, shell-inspired curves and a blend of materials like wood, metal,
            fabric, and stone, creating an elegant and fluid showroom concept.
          </p>

          {/* Full-width mood board image */}
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ height: 'clamp(260px, 55vw, 560px)' }}
            onClick={() => openImage('/furniture/one.png')}
          >
            <img
              src="/furniture/one.png"
              alt="Furniture Showroom MoodBoard"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-end p-5 sm:p-8">
              <span className="text-white/80 text-xs sm:text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                MoodBoard — click to expand
              </span>
            </div>
          </div>
        </div>

        {/* ── 2. Furniture Layout ───────────────────────────────── */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">Furniture Layout</h3>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-12">
            Furniture layout designed for clarity, comfort, and efficient use of space, enhancing
            both function and flow.
          </p>

          {/* 3-image grid with captions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6">
            {[
              { src: '/furniture/two.png',   alt: 'Furniture Layout Plan 1', caption: '2D AutoCAD Floor Plan of the Showroom' },
              { src: '/furniture/three.png', alt: 'Furniture Layout Plan 2', caption: '2D Hatched Floor Plan of the Showroom' },
              { src: '/furniture/four.jpg',  alt: 'Furniture Layout Plan 3', caption: '3D View of the Floor Plan of the Showroom' },
            ].map((img, i) => (
              <div key={i} className="space-y-3">
                <div
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  style={{ height: 'clamp(180px, 28vw, 320px)' }}
                  onClick={() => openImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: 'scale(1)', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
                  <div className="absolute inset-0 flex items-end p-3">
                    <span className="text-white/70 text-xs bg-black/25 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      View full →
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Elevation ─────────────────────────────────────── */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">Elevation</h3>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-12">
            Elevations crafted to highlight proportions, material transitions, and clean detailing,
            offering a clear visual narrative of the design.
          </p>

          {/* Elevation images — stacked with captions */}
          <div className="space-y-8">

            {/* five.png */}
            <div className="space-y-3">
              <div
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ height: 'clamp(220px, 42vw, 480px)' }}
                onClick={() => openImage('/furniture/five.png')}
              >
                <img
                  src="/furniture/five.png"
                  alt="Bedroom Elevation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <span className="text-white/70 text-xs bg-black/25 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to expand
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground pl-1 leading-relaxed">
                Elevation of the per setups of the showroom — includes the section of bedrooms.
              </p>
            </div>

            {/* six.png */}
            <div className="space-y-3">
              <div
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ height: 'clamp(220px, 42vw, 480px)' }}
                onClick={() => openImage('/furniture/six.png')}
              >
                <img
                  src="/furniture/six.png"
                  alt="Living Room Elevation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <span className="text-white/70 text-xs bg-black/25 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to expand
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground pl-1 leading-relaxed">
                This is the separate living area elevation of the showroom.
              </p>
            </div>

            {/* eight.png */}
            <div className="space-y-3">
              <div
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ height: 'clamp(220px, 42vw, 480px)' }}
                onClick={() => openImage('/furniture/eight.png')}
              >
                <img
                  src="/furniture/eight.png"
                  alt="Kitchen Elevation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <span className="text-white/70 text-xs bg-black/25 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to expand
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground pl-1 leading-relaxed">
                This is the elevation of the kitchen setup of the showroom area.
              </p>
            </div>

            {/* last.png */}
            <div className="space-y-3">
              <div
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ height: 'clamp(220px, 42vw, 480px)' }}
                onClick={() => openImage('/furniture/last.png')}
              >
                <img
                  src="/furniture/last.png"
                  alt="Private Sitting Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <span className="text-white/70 text-xs bg-black/25 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to expand
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground pl-1 leading-relaxed">
                This is a private setup for the private sitting area which includes chairs and sofas.
              </p>
            </div>

          </div>
        </div>

        {/* ── 4. 3D Work ───────────────────────────────────────── */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">4</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">3D Work</h3>
          </div>
          {/* Description to be added */}

          {/* nine.png — entrance / reception vignette */}
          <div className="space-y-3">
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ height: 'clamp(260px, 55vw, 560px)' }}
              onClick={() => openImage('/furniture/nine.png')}
            >
              <img
                src="/furniture/nine.png"
                alt="3D Interior Sketch — Entrance & Reception"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-end p-5 sm:p-8">
                <span className="text-white/80 text-xs sm:text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Entrance &amp; Reception — click to expand
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground pl-1 leading-relaxed">
              This is a conceptual 3D interior sketch&thinsp;/&thinsp;design vignette, not a finished
              elevation. It is placed at the entrance of the showroom as it depicts the advertising
              unit and reception area.
            </p>
          </div>
        </div>

      </div>{/* end Design Process */}

      {/* ── Project Specifications ──────────────────────────────── */}
      <div className="space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center uppercase tracking-widest">
          Project Specifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Total Space',        value: '3,000 sq ft' },
            { label: 'Display Zones',      value: '8 – 10'      },
            { label: 'Primary Materials',  value: 'Wood · Metal · Fabric · Stone' },
            { label: 'Design Type',        value: 'Retail Showroom' },
          ].map((spec, i) => (
            <div
              key={i}
              className="border border-border rounded-xl p-5 space-y-2 hover:border-primary hover:shadow-lg transition-all group"
            >
              <p className="text-xs opacity-60 font-medium uppercase tracking-wide group-hover:opacity-100 transition-opacity">
                {spec.label}
              </p>
              <p className="font-serif text-base sm:text-lg font-bold text-gradient leading-tight">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Fullscreen Viewer ───────────────────────────────────── */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 animate-fade-in"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 z-[10000] p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all"
            aria-label="Close fullscreen"
          >
            <X size={22} className="text-white" />
          </button>
          <div
            className="max-w-[92vw] max-h-[90vh] flex items-center justify-center animate-zoom-in"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen view"
              className="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs text-center">
            Click anywhere or press ESC to close
          </p>
        </div>
      )}

    </div>
  );
}
