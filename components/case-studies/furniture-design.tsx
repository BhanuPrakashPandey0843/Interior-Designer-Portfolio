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

const threeDImages = [
  {
    id: 'imagea',
    title: 'Entrance Display',
    image: '/furniture/iamgea.jpeg',
    description: 'Entrance with Advertising unit and a Big display for single sofa chairs.'
  },
  {
    id: 'imageb',
    title: 'Chair Setup',
    image: '/furniture/imageb.jpeg',
    description: 'Single setup for chair.'
  },
  {
    id: 'imagec',
    title: 'Bedroom Setup',
    image: '/furniture/imagec.png',
    description: 'Setup of Bedroom.'
  },
  {
    id: 'imaged',
    title: 'Contemporary Showroom',
    image: '/furniture/imaged.png',
    description: 'A contemporary furniture showroom setup showcasing spatial planning.'
  },
  {
    id: 'imagee',
    title: 'Private Sitting Area',
    image: '/furniture/imagee.png',
    description: 'This is a private setup for the private sitting area with chairs and sofas.'
  },
  {
    id: 'imagef',
    title: 'Living Room Setup',
    image: '/furniture/imagef.png',
    description: 'Setup for living room.'
  },
  {
    id: 'imageg',
    title: 'Indoor-Outdoor Concept',
    image: '/furniture/iamgeg.png',
    description: 'Indoor–outdoor furniture showroom concept blending nature.'
  }
];

export const FurnitureDesignGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

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

      {/* 3D Visualizations Section */}
      <div className="border-t border-border pt-12 sm:pt-16 mt-12 sm:mt-16">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-4 uppercase tracking-wider">
            3D Visualizations
          </h2>
          <p className="text-sm sm:text-base opacity-70 max-w-2xl mx-auto">
            Explore our premium 3D rendered furniture designs and spatial planning concepts
          </p>
        </div>

        {/* 3D Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {threeDImages.map((item, index) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setFullscreenImage(item.image)}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="font-serif text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-70 leading-relaxed line-clamp-2 group-hover:opacity-90 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-3 sm:p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setFullscreenImage(null); }}
            className="absolute top-4 right-4 z-[10000] p-2 sm:p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all"
          >
            <X size={24} className="text-white" />
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
