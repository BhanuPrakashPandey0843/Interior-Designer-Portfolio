'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const furnitureImages = [
  {
    src: '/furniture/one.jpeg',
    label: 'Statement Piece',
    caption: 'The hero furniture — centrepiece that anchors the entire space with presence and purpose.',
  },
  {
    src: '/furniture/two.jpeg',
    label: 'Detailing & Craft',
    caption: 'Precision joinery and considered material selection elevate everyday function.',
  },
  {
    src: '/furniture/three.jpeg',
    label: 'Spatial Harmony',
    caption: 'Each piece is composed to complement the surrounding architecture seamlessly.',
  },
  {
    src: '/furniture/four.jpeg',
    label: 'Material Palette',
    caption: 'Curated textures and finishes that age gracefully over time.',
  },
  {
    src: '/furniture/five.jpeg',
    label: 'Finished Space',
    caption: 'The full composition — form, function and feeling held in perfect balance.',
  },
];

export const FurnitureDesignGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? 0 : (i - 1 + furnitureImages.length) % furnitureImages.length
    );
  const next = () =>
    setLightboxIndex((i) =>
      i === null ? 0 : (i + 1) % furnitureImages.length
    );

  return (
    <div className="space-y-6 sm:space-y-10">

      {/* ── Header ────────────────────────────────── */}
      <div className="border-b border-border pb-6 sm:pb-8">
        <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-2">
          Project — Furniture Design
        </p>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gradient mb-3 sm:mb-4">
          Bespoke Furniture Design
        </h2>
        <p className="text-sm sm:text-base opacity-80 max-w-2xl leading-relaxed">
          The furniture showroom features a sculptural shell-like exterior that draws visitors into a calm, open interior.The layout is thoughtfully organized into curated zones, allowing each furniture piece to be experienced in a realistic, setting. Natural materials, soft lighting, and subtle detailing create a warm and minimal atmosphere, balancing functionality with quiet visual appeal. The space is designed to feel open, making the showroom both inviting and easy to navigate.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {['Private Client', '2024', 'Custom Pieces', 'Contemporary Furniture'].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero image (one.jpeg) ─────────────────── */}
      <div
        className="relative w-full rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
        style={{ aspectRatio: '16/9' }}
        onClick={() => openLightbox(0)}
      >
        <img
          src={furnitureImages[0].src}
          alt={furnitureImages[0].label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary/90 mb-1">
            {furnitureImages[0].label}
          </p>
          <p className="text-sm sm:text-lg font-medium max-w-md leading-snug">
            {furnitureImages[0].caption}
          </p>
        </div>

        {/* Expand badge */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium">
            <ZoomIn size={12} /> Expand
          </span>
        </div>

        {/* Image count badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
            1 / {furnitureImages.length}
          </span>
        </div>
      </div>

      {/* ── 2 × 2 grid (images 2–5) ──────────────── */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {furnitureImages.slice(1).map((img, i) => (
          <div
            key={img.src}
            className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg"
            style={{ aspectRatio: '4/3' }}
            onClick={() => openLightbox(i + 1)}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Hover full overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Caption */}
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 text-white">
              <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-widest text-primary/80 mb-0.5">
                {img.label}
              </p>
              <p className="text-[11px] sm:text-sm font-medium leading-snug line-clamp-2 opacity-90">
                {img.caption}
              </p>
            </div>

            {/* Expand badge */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md flex items-center gap-1">
                <ZoomIn size={9} /> View
              </span>
            </div>

            {/* Index badge */}
            <div className="absolute top-2 left-2">
              <span className="bg-black/40 text-white/80 text-[10px] px-1.5 py-0.5 rounded font-medium">
                {i + 2} / {furnitureImages.length}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Highlights grid ───────────────────────── */}
      <div className="border-t border-border pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Project Highlights
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {[
            { label: 'Custom Joinery',       icon: '🪵' },
            { label: 'Material Selection',   icon: '🎨' },
            { label: 'Spatial Harmony',      icon: '📐' },
            { label: 'Functional Elegance',  icon: '✨' },
            { label: 'Handcrafted Details',  icon: '🤝' },
            { label: 'Client Collaboration', icon: '💬' },
          ].map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 bg-muted/40 hover:bg-primary/10 rounded-lg px-3 py-2.5 transition-colors duration-200 group/h"
            >
              <span className="text-base group-hover/h:scale-110 transition-transform">{h.icon}</span>
              <span className="text-xs sm:text-sm font-medium">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ──────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/96 z-[9999] flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/25 rounded-full transition-all"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <X size={20} className="text-white" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 p-2.5 bg-white/10 hover:bg-white/25 rounded-full transition-all"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={22} className="text-white" />
          </button>

          {/* Image + caption */}
          <div
            className="flex flex-col items-center gap-4 max-w-[88vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={furnitureImages[lightboxIndex].src}
              alt={furnitureImages[lightboxIndex].label}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              style={{ transition: 'opacity 0.25s ease' }}
            />
            <div className="text-center text-white px-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                {furnitureImages[lightboxIndex].label}
              </p>
              <p className="text-sm opacity-75">{furnitureImages[lightboxIndex].caption}</p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 p-2.5 bg-white/10 hover:bg-white/25 rounded-full transition-all"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={22} className="text-white" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-5 flex gap-2">
            {furnitureImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === lightboxIndex
                    ? 'w-5 h-2 bg-primary'
                    : 'w-2 h-2 bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
