'use client';

import Image from 'next/image';
import { ImageViewer } from '@/components/image-viewer';

export function ModularKitchenCaseStudy() {
  return (
    <div className="w-full space-y-20 animate-fade-in-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient mb-4">
          Modular Kitchen 3 BHK
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A sophisticated modular kitchen design with minimal, functional layout using clean lines and a muted green and white palette with textured backsplash tiles.
        </p>
      </div>

      {/* Main Image */}
      <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden group">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_3f5a7f681b7a447fb853dc40b72784e3~mv2-HVZ99L7ORZxsTv7nklyanzmrRtxCms.png"
          alt="Modular Kitchen 3D View"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Design Overview */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold">Design Overview</h2>
          <p className="text-base leading-relaxed opacity-90">
            This modular kitchen is designed with a minimal, functional layout using clean lines and a muted green and white palette. Textured backsplash tiles add subtle detail, while open shelves and under-cabinet lighting enhance usability. The breakfast counter offers a compact dining space, and built-in appliances ensure efficiency.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Warm ceiling lighting and soft materials create a calm, practical atmosphere that maximizes both form and function. The design emphasizes workflow efficiency while creating a beautiful, modern kitchen space suitable for contemporary living.
          </p>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_e5c6b4d397b244b7a3e0e50944243877~mv2-UPji6FGIhSjPdmBk0pLFo682xVChCi.png"
            alt="Kitchen 3D Perspective"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Design Process */}
      <div className="space-y-12">
        <h2 className="font-serif text-3xl font-bold text-center">Design Process</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mood Board */}
          <div className="group cursor-pointer">
            <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_6eb67fdbf32a443596012e50bc236919~mv2-oIdk9nObKeoeyJNwOaJwpHAHbPAzcE.jpeg"
                alt="Mood Board"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            </div>
            <h3 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">Mood Board</h3>
            <p className="text-sm opacity-75 mt-2">
              The space planning ensures a seamless workflow with clear zoning for preparation, cooking, and cleaning areas.
            </p>
          </div>

          {/* Floor Plan */}
          <div className="group cursor-pointer">
            <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_0d95916b85c6423ab192b21b742ac9d7~mv2-K1InBbFeLcKNlsvUkMfJb3TCbWvKj6.jpg"
                alt="Floor Plan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            </div>
            <h3 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">Floor Plan</h3>
            <p className="text-sm opacity-75 mt-2">
              Efficient layout combining storage, seating, and work zones for smooth kitchen functionality.
            </p>
          </div>

          {/* Elevation Detail */}
          <div className="group cursor-pointer">
            <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_3cbf800a1bc94040b769d79b386c4114~mv2-btkMvmarXqxNYTu2Bn2sN9xFoKlnei.jpg"
                alt="2D Elevation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            </div>
            <h3 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">2D Elevation</h3>
            <p className="text-sm opacity-75 mt-2">
              2D elevations highlight clean lines and clear dimensions for a clear visual of the kitchen design.
            </p>
          </div>

          {/* Elevation Detail 2 */}
          <div className="group cursor-pointer">
            <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_bdfcb7695472406496584d6f47ed5551~mv2-tI5ukaJKTWHJ-gLZ6yKh2ZV.jpg"
                alt="Cabinet Details"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            </div>
            <h3 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">3D Work</h3>
            <p className="text-sm opacity-75 mt-2">
              3D views showcase material depth, lighting, and spatial flow, bringing the kitchen design to life.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 space-y-8">
        <h2 className="font-serif text-3xl font-bold">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Color Palette & Materials
            </h3>
            <p className="opacity-85">
              Muted green and white color scheme with textured backsplash tiles for subtle visual interest. Warm ceiling lighting and soft materials create a calm, practical atmosphere.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Functional Layout
            </h3>
            <p className="opacity-85">
              Clear zoning for preparation, cooking, and cleaning areas. Breakfast counter offers compact dining space with built-in appliances ensuring efficiency.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Storage Solutions
            </h3>
            <p className="opacity-85">
              Open shelves and under-cabinet lighting enhance usability. Intelligent storage solutions maximize functionality while maintaining clean aesthetics.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Lighting Design
            </h3>
            <p className="opacity-85">
              Warm ceiling lighting combined with under-cabinet lighting creates multiple layers of illumination for both task and ambient needs.
            </p>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold">Project Specifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 space-y-2">
            <p className="text-sm opacity-75">Space Area</p>
            <p className="font-semibold text-xl">250 sq ft</p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2">
            <p className="text-sm opacity-75">Kitchen Type</p>
            <p className="font-semibold text-xl">Modular L-Shape</p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2">
            <p className="text-sm opacity-75">Design Style</p>
            <p className="font-semibold text-xl">Modern Minimal</p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2">
            <p className="text-sm opacity-75">Primary Colors</p>
            <p className="font-semibold text-xl">Green & White</p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2">
            <p className="text-sm opacity-75">Key Materials</p>
            <p className="font-semibold text-xl">Wood, Tile, Metal</p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2">
            <p className="text-sm opacity-75">Appliances</p>
            <p className="font-semibold text-xl">Built-in Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
}
