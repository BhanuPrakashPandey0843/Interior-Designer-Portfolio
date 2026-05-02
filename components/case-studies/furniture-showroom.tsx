'use client';

import { ImageViewer } from '@/components/image-viewer';

export function FurnitureShowroomCaseStudy() {
  const designElements = [
    {
      title: 'Shell-Inspired Curves',
      description: 'The sculptural exterior draws visitors in with organic, flowing forms that create visual interest and architectural distinction.'
    },
    {
      title: 'Curated Display Zones',
      description: 'Each furniture collection is placed in thoughtfully designed zones, allowing pieces to be experienced in realistic settings.'
    },
    {
      title: 'Natural Materials',
      description: 'Wood, metal, fabric, and stone blend seamlessly to create an elegant and fluid showroom concept.'
    },
    {
      title: 'Soft Lighting Design',
      description: 'Strategic lighting highlights each furniture piece and creates a warm, welcoming ambiance throughout the space.'
    },
    {
      title: 'Open Spatial Flow',
      description: 'The design emphasizes openness, making the showroom both inviting and easy to navigate for visitors.'
    },
    {
      title: 'Minimal Aesthetic',
      description: 'Clean lines and neutral finishes provide the perfect backdrop for high-end furniture displays and product showcase.'
    }
  ];

  return (
    <div className="w-full space-y-20 animate-fade-in-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient mb-4">
          Furniture Showroom
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A sophisticated showroom design featuring a sculptural shell-like exterior and curated interior zones showcasing contemporary furniture in an elegant, minimal aesthetic.
        </p>
      </div>

      {/* Design Philosophy */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 space-y-4">
        <h2 className="font-serif text-2xl font-bold">Design Philosophy</h2>
        <p className="text-base leading-relaxed">
          The furniture showroom features a sculptural shell-like exterior that draws visitors into a calm, open interior. The layout is thoughtfully organized into curated zones, allowing each furniture piece to be experienced in a realistic setting. Natural materials, soft lighting, and subtle detailing create a warm and minimal atmosphere, balancing functionality with quiet visual appeal. The space is designed to feel open, making the showroom both inviting and easy to navigate.
        </p>
      </div>

      {/* Main Image */}
      <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden group">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_6eb67fdbf32a443596012e50bc236919~mv2-oIdk9nObKeoeyJNwOaJwpHAHbPAzcE.jpeg"
          alt="Furniture Showroom Mood Board"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Design Elements Grid */}
      <div className="space-y-12">
        <h2 className="font-serif text-3xl font-bold text-center">Key Design Elements</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designElements.map((element, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300 hover:bg-primary/5"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mt-1">
                  {element.title}
                </h3>
              </div>
              <p className="text-sm opacity-75 leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Showroom Photography */}
      <div className="space-y-12">
        <h2 className="font-serif text-3xl font-bold text-center">Showroom Photography</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Showroom */}
          <div className="group space-y-4">
            <div className="relative h-80 rounded-xl overflow-hidden mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture_showroom-WPxkreQyfRyNFYpXXzO0INcx0tBhcO.jpg"
                alt="Furniture Showroom - Triangular Table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>
            <h3 className="font-serif text-xl font-bold">Minimalist Dining Setting</h3>
            <p className="text-sm opacity-75">
              The triangular dining table showcased with soft lighting, plant accent, and refined accessories demonstrates the minimalist aesthetic of the showroom.
            </p>
          </div>

          {/* Closeup Detail */}
          <div className="group space-y-4">
            <div className="relative h-80 rounded-xl overflow-hidden mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture_showroom2-ioYlt5FY1pQxcZFEiS09O1SIysKB5F.jpg"
                alt="Furniture Detail with Plant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>
            <h3 className="font-serif text-xl font-bold">Table Detail & Styling</h3>
            <p className="text-sm opacity-75">
              Close-up view highlighting the triangular form, natural wood grain, and careful placement of accessories that exemplify the showroom's curated approach.
            </p>
          </div>

          {/* Human Scale */}
          <div className="group space-y-4">
            <div className="relative h-80 rounded-xl overflow-hidden mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture_showroom3-dYFBVLyCQfs1VqhKo9gRXKwC4ClZ5j.jpg"
                alt="Human Using Furniture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>
            <h3 className="font-serif text-xl font-bold">Human Scale Experience</h3>
            <p className="text-sm opacity-75">
              Showcasing the furniture in real-world use, demonstrating comfort, proportions, and how pieces integrate into daily life and work spaces.
            </p>
          </div>

          {/* Technical Documentation */}
          <div className="group space-y-4">
            <div className="relative h-80 rounded-xl overflow-hidden mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture_showroom5-TxkeqDx1Pg5gJ8lX2k8BcBDXEyp0bL.jpg"
                alt="Structural Design Details"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>
            <h3 className="font-serif text-xl font-bold">Structural Design</h3>
            <p className="text-sm opacity-75">
              Technical drawings reveal the innovative triangular geometry and assembly logic that makes this furniture both structurally sound and visually striking.
            </p>
          </div>
        </div>
      </div>

      {/* Tri-Fam Dining Table Case Study */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 md:p-12 space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold">Tri-Fam Dining Table - Design Case Study</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture_showroom4-EiLrlKNOt7TSzy70rriCeBUatcbPkl.jpg"
              alt="Tri-Fam Dining Table Design Process"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-primary mb-2">Concept & Description</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                A beautifully crafted dining table designed to create an intimate dining experience for a family of three. With its unique triangular shape, this table provides a cozy and comfortable space for each family member to face one another, encouraging meaningful conversations and fostering a sense of togetherness during mealtime.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary mb-3">Design Highlights</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>Unique triangular geometry promotes face-to-face interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>Rounded corners for safety and comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>Absence of obstructive stances allows free movement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>Modern finish complements contemporary dining décor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>Perfect centerpiece for family gatherings</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary mb-2">Design Process</h3>
              <p className="text-sm opacity-90">
                5-step process from final ideation through real-life 3D prototyping, material sourcing, precise joinery, assembly, and final product delivery with team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div className="space-y-12">
        <h2 className="font-serif text-3xl font-bold text-center">Design Process & Documentation</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mood Board */}
          <div className="group space-y-4">
            <div className="relative h-72 rounded-xl overflow-hidden mb-4 bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_6eb67fdbf32a443596012e50bc236919~mv2-oIdk9nObKeoeyJNwOaJwpHAHbPAzcE.jpeg"
                alt="Mood Board"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-center">
                  <p className="text-lg font-semibold mb-2">Explore Materials</p>
                  <p className="text-sm">View Mood Board →</p>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-bold">Material Palette</h3>
            <p className="text-sm opacity-75">
              Carefully curated materials including natural wood finishes, stone textures, fabrics, and metallic accents create a cohesive design language.
            </p>
          </div>

          {/* Structural Details */}
          <div className="group space-y-4">
            <div className="relative h-72 rounded-xl overflow-hidden mb-4 bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture_showroom5-TxkeqDx1Pg5gJ8lX2k8BcBDXEyp0bL.jpg"
                alt="Structural Details"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-center">
                  <p className="text-lg font-semibold mb-2">Assembly Logic</p>
                  <p className="text-sm">View Details →</p>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-bold">Structural Design</h3>
            <p className="text-sm opacity-75">
              Innovative joinery and assembly techniques ensure durability while maintaining the clean, minimal aesthetic of the finished pieces.
            </p>
          </div>
        </div>
      </div>

      {/* Project Specifications */}
      <div className="space-y-8">
        <h2 className="font-serif text-3xl font-bold text-center">Project Specifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-border rounded-lg p-6 space-y-2 hover:border-primary hover:shadow-lg transition-all group">
            <p className="text-sm opacity-75 group-hover:opacity-100">Total Space</p>
            <p className="font-serif text-2xl font-bold text-gradient">3,000 sq ft</p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2 hover:border-primary hover:shadow-lg transition-all group">
            <p className="text-sm opacity-75 group-hover:opacity-100">Display Zones</p>
            <p className="font-serif text-2xl font-bold text-gradient">8-10</p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2 hover:border-primary hover:shadow-lg transition-all group">
            <p className="text-sm opacity-75 group-hover:opacity-100">Primary Materials</p>
            <p className="font-serif text-lg font-bold">Wood, Metal, Fabric</p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2 hover:border-primary hover:shadow-lg transition-all group">
            <p className="text-sm opacity-75 group-hover:opacity-100">Design Type</p>
            <p className="font-serif text-lg font-bold">Retail Showroom</p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 space-y-8">
        <h2 className="font-serif text-3xl font-bold">Key Features & Benefits</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Customer Experience
            </h3>
            <p className="opacity-85">
              Open and intuitive layout guides customers through various display zones, creating a memorable shopping experience with room settings they can visualize.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              Product Showcase
            </h3>
            <p className="opacity-85">
              Each furniture collection gets dedicated space with professional lighting and context, allowing customers to appreciate quality and craftsmanship.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Material Integration
            </h3>
            <p className="opacity-85">
              Harmonious blend of natural materials creates visual continuity and sophistication, complementing rather than competing with furniture displays.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              Lighting Strategy
            </h3>
            <p className="opacity-85">
              Soft, layered lighting highlights products while creating ambient warmth, transforming the showroom into an inviting destination space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
