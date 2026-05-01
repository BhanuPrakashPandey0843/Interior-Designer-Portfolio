'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollSkills = (direction: 'left' | 'right') => {
    if (skillsContainerRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      skillsContainerRef.current.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  const allPortfolioItems = [
    {
      id: 1,
      title: 'Furniture Showroom',
      image: '/portfolio-furniture-showroom.jpg',
      description: 'An elegant furniture showroom designed to showcase contemporary pieces in a curated environment. The space features teal accent walls, professional lighting to highlight each furniture collection, and a minimalist layout that allows pieces to speak for themselves. Clean lines and neutral flooring create the perfect backdrop for high-end furniture displays.',
      details: {
        client: 'Furniture Retailer',
        year: '2024',
        area: '3,000 sq ft',
        style: 'Modern Retail',
        highlights: [
          'Professional display lighting',
          'Teal accent walls',
          'Open floor layout',
          'Furniture arrangement',
          'Customer journey flow',
          'Ambient atmosphere'
        ]
      }
    },
    {
      id: 2,
      title: 'Studio Vertias',
      image: '/portfolio-studio-vertias.jpg',
      description: 'A creative studio space designed for artists and designers to work collaboratively. Features natural light from large windows, exposed brick for character, flexible workspace arrangements, and a color palette that inspires creativity. The studio balances functionality with an inspiring aesthetic that promotes innovative thinking.',
      details: {
        client: 'Creative Studio',
        year: '2024',
        area: '2,000 sq ft',
        style: 'Contemporary Creative',
        highlights: [
          'Natural lighting',
          'Flexible workspaces',
          'Exposed brick walls',
          'Inspiration boards',
          'Breakout areas',
          'Equipment storage'
        ]
      }
    },
    {
      id: 3,
      title: 'Office Design',
      image: '/portfolio-office-design.jpg',
      description: 'A sophisticated corporate office that balances professionalism with employee wellness. Features dedicated meeting rooms with glass walls for collaboration, ergonomic workspace design, and a sophisticated teal and white color scheme. The layout promotes productivity while maintaining a welcoming, modern aesthetic.',
      details: {
        client: 'Corporate Office',
        year: '2024',
        area: '4,500 sq ft',
        style: 'Executive Corporate',
        highlights: [
          'Private meeting rooms',
          'Ergonomic workstations',
          'Executive office',
          'Collaborative spaces',
          'Natural lighting',
          'Professional aesthetics'
        ]
      }
    },
    {
      id: 4,
      title: 'Modular Kitchen',
      image: '/portfolio-modular-kitchen.jpg',
      description: 'A custom modular kitchen design that maximizes functionality and style. Features white cabinetry with teal accents, premium stainless steel appliances, durable stone countertops, and intelligent storage solutions. The design emphasizes workflow efficiency while creating a beautiful, modern kitchen space.',
      details: {
        client: 'Residential Home',
        year: '2024',
        area: '250 sq ft',
        style: 'Modern Modular',
        highlights: [
          'Custom cabinetry',
          'Stainless appliances',
          'Stone countertops',
          'Smart storage',
          'Functional layout',
          'Modern aesthetic'
        ]
      }
    },
    {
      id: 5,
      title: 'Co-working Office',
      image: '/portfolio-coworking-office.jpg',
      description: 'A vibrant co-working space designed to foster collaboration and innovation. Features hot desks, private pods for focused work, open meeting areas, and a color scheme that energizes without overwhelming. The space supports diverse work styles while maintaining a cohesive, professional environment.',
      details: {
        client: 'Co-working Space',
        year: '2024',
        area: '6,000 sq ft',
        style: 'Collaborative Modern',
        highlights: [
          'Hot desk areas',
          'Private work pods',
          'Meeting rooms',
          'Breakout spaces',
          'Community zones',
          'Tech integration'
        ]
      }
    },
    {
      id: 6,
      title: '3 BHK',
      image: '/portfolio-3bhk.jpg',
      description: 'A luxurious 3-bedroom apartment showcasing contemporary living design. Open concept living area connects to a sophisticated kitchen, bedrooms feature custom built-ins, and bathrooms include premium finishes. The design emphasizes comfort, functionality, and timeless elegance throughout the entire home.',
      details: {
        client: 'Residential Apartment',
        year: '2024',
        area: '1,400 sq ft',
        style: 'Luxury Contemporary',
        highlights: [
          'Open concept living',
          'Custom built-ins',
          'Master bedroom suite',
          'Modern kitchen',
          'Premium finishes',
          'Family spaces'
        ]
      }
    },
    {
      id: 7,
      title: 'Illustrator Work',
      image: '/portfolio-illustrator.jpg',
      description: 'A comprehensive collection of digital illustrations and graphic designs. Showcasing vector artwork, visual identities, and creative concepts in a portfolio presentation. The work demonstrates skill in visual storytelling, design thinking, and creative execution across various mediums and styles.',
      details: {
        client: 'Graphic Design Portfolio',
        year: '2024',
        area: 'Digital',
        style: 'Graphic Design',
        highlights: [
          'Vector illustrations',
          'Brand identity',
          'Creative concepts',
          'Visual storytelling',
          'Digital art',
          'Design thinking'
        ]
      }
    },
    {
      id: 8,
      title: 'Blender Models',
      image: '/portfolio-blender-models.jpg',
      description: 'Professional 3D visualization and modeling work created in Blender. Features architectural renderings, furniture designs, and spatial visualizations that bring concepts to life. High-quality renders demonstrate lighting expertise, material design, and attention to photorealistic detail.',
      details: {
        client: '3D Visualization',
        year: '2024',
        area: '3D Renders',
        style: '3D Modeling',
        highlights: [
          'Architectural renders',
          'Furniture models',
          'Material design',
          'Lighting setup',
          'Animation ready',
          'Photorealistic'
        ]
      }
    },
    {
      id: 9,
      title: 'Case Study',
      image: '/portfolio-case-study.jpg',
      description: 'A comprehensive project documentation showcasing the design process from concept to completion. Includes before and after transformations, design decisions, material specifications, and project outcomes. Demonstrates problem-solving, project management, and creative execution throughout the design journey.',
      details: {
        client: 'Project Showcase',
        year: '2024',
        area: 'Documentation',
        style: 'Design Process',
        highlights: [
          'Before & after',
          'Design process',
          'Material selection',
          'Timeline management',
          'Client satisfaction',
          'Project results'
        ]
      }
    }
  ];

  const skills = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe Photoshop', icon: '📷' },
    { name: 'Adobe Illustrator', icon: '✏️' },
    { name: 'After Effects', icon: '🎬' },
    { name: 'SketchUp', icon: '📐' },
    { name: 'AutoCAD', icon: '📏' },
    { name: '3D Max', icon: '🎲' },
    { name: 'Blender', icon: '🎭' },
  ];

  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage: 'url(/interior-bg-pattern.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-background/85 pointer-events-none" style={{ zIndex: 1 }} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border smooth-hover">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in-down">
            <div className="w-10 h-10">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow">
                <g fill="url(#diamondGradient)">
                  <polygon points="30,30 45,15 60,30 45,45" />
                  <polygon points="55,30 70,15 85,30 70,45" />
                  <polygon points="30,55 45,40 60,55 45,70" />
                  <polygon points="55,55 70,40 85,55 70,70" />
                </g>
                <defs>
                  <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1a4d4d' }} />
                    <stop offset="100%" style={{ stopColor: '#2d7a7a' }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-serif text-xl font-bold text-primary">Srestha Jyoti</span>
          </div>

          <div className="flex items-center space-x-8 md:space-x-12">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            
            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button 
                className="text-sm font-medium hover:text-primary transition-colors flex items-center space-x-1"
                onMouseEnter={() => setShowPortfolioMenu(true)}
                onMouseLeave={() => setShowPortfolioMenu(false)}
              >
                <span>Portfolio</span>
                <ChevronRight size={16} className={`transition-transform ${showPortfolioMenu ? 'rotate-90' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showPortfolioMenu && (
                <div 
                  className="absolute top-full left-0 mt-0 w-56 bg-card rounded-lg shadow-2xl py-2 border border-border animate-slide-in-down"
                  onMouseEnter={() => setShowPortfolioMenu(true)}
                  onMouseLeave={() => setShowPortfolioMenu(false)}
                >
                  {allPortfolioItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedProject(item);
                        setShowPortfolioMenu(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 border-b border-border last:border-b-0 hover:translate-x-1 duration-200"
                      style={{ animationDelay: `${index * 20}ms` }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#certificates" className="text-sm font-medium hover:text-primary transition-colors">Certificates</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden pt-20 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gradient animate-fade-in-up">
                Srestha Jyoti
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Interior Designer | Visual Strategist
              </p>
            </div>

            <p className="text-lg leading-relaxed opacity-90 animate-fade-in-up max-w-lg" style={{ animationDelay: '0.2s' }}>
              I am an Interior Designer driven by a passion for creating functional, balanced, and timeless spaces, with a strong focus on thoughtful planning, strong aesthetics, and practical design solutions to deliver meaningful results while maintaining precision, discipline, and attention to detail in every project.
            </p>

            <p className="text-base leading-relaxed opacity-85 animate-fade-in-up max-w-lg" style={{ animationDelay: '0.3s' }}>
              Alongside interior design, I specialize in Graphic Design, crafting clear visuals, presentations, and creative concepts using professional tools, ensuring effective communication of ideas and concepts. I enjoy blending spatial design with visual storytelling to create impactful and purposeful work.
            </p>

            <div className="flex gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#certificates" className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent hover-lift transition-all">
                Explore Work
              </a>
              <a href="#contact" className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 hover-lift transition-all">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Photo */}
          <div className="relative h-96 md:h-full flex items-center justify-center animate-fade-in-down">
            <div className="relative w-full max-w-sm">
              {/* Decorative Background Shapes */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
              
              {/* Photo Frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-muted/50 hover-lift">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-05-01-23-07-14-RJR1TuddOpp91BlEsALJOy4Yii6VZd.jpg" 
                  alt="Srestha Jyoti" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Skills Section */}
      <section className="py-20 bg-muted/20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 uppercase tracking-wider smooth-slide-up">
            Software Skills
          </h2>

          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={() => scrollSkills('left')}
              className="absolute left-0 z-20 p-3 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all hover-scale"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Skills Container */}
            <div
              ref={skillsContainerRef}
              className="flex gap-8 overflow-x-hidden scroll-smooth px-20 py-8 w-full justify-center"
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex-shrink-0 animate-float-slow hover-glow"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: `${4 + index * 0.5}s`
                  }}
                >
                  <div className="w-24 h-24 bg-card rounded-full border-4 border-primary flex items-center justify-center shadow-lg hover:shadow-2xl transition-all hover-scale group cursor-pointer">
                    <span className="text-4xl">{skill.icon}</span>
                  </div>
                  <p className="text-center text-sm font-medium mt-3 group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollSkills('right')}
              className="absolute right-0 z-20 p-3 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all hover-scale"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 uppercase tracking-wider smooth-slide-up">
            Portfolio Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPortfolioItems.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="card-hover rounded-xl overflow-hidden cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>
                <div className="p-6 bg-card border border-border/50">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-75 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 inline-block text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    View Details →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-muted/20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 uppercase tracking-wider smooth-slide-up">
            Certifications & Awards
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Kingston University Certificate */}
            <div className="card-hover rounded-lg overflow-hidden bg-card border border-border/50 smooth-hover">
              <div className="relative h-96 overflow-hidden bg-muted">
                <img
                  src="/kingston-certificate.jpg"
                  alt="Kingston University Certificate"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-3">
                  Kingston University
                </h3>
                <p className="text-base mb-2 font-medium text-primary">
                  Bachelor of Arts with Honours (Third Class)
                </p>
                <p className="text-sm mb-3 text-primary">Interior Architecture & Design</p>
                <p className="opacity-75 text-sm">
                  Advanced degree programme in Interior Architecture and Design in collaboration with the Indian Institute of Art and Design (IIAD). Developed expertise in spatial design, architectural visualization, and comprehensive project management. Graduated June 2025.
                </p>
              </div>
            </div>

            {/* IIAD Certificate */}
            <div className="card-hover rounded-lg overflow-hidden bg-card border border-border/50 smooth-hover">
              <div className="relative h-96 overflow-hidden bg-muted">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cetificate_sres-gJ6l7Ys4WggZ3hQlWv7hht6RYzVHel.jpg"
                  alt="IIAD Certificate"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-3">
                  Indian Institute of Art & Design
                </h3>
                <p className="text-base mb-2 font-medium text-primary">
                  Diploma in Interior Design & Graphic Design
                </p>
                <p className="opacity-75 text-sm">
                  Specialized training in contemporary interior design, spatial planning, graphic design, and visual communication. Completed comprehensive coursework in design principles, material selection, colour theory, and professional project delivery with hands-on experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-muted/30 rounded-lg p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 smooth-hover">
            {/* Logo and Name */}
            <div className="flex items-center space-x-4 md:space-x-6 flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <g fill="#1a4d4d">
                    <polygon points="30,30 45,15 60,30 45,45" />
                    <polygon points="55,30 70,15 85,30 70,45" />
                    <polygon points="30,55 45,40 60,55 45,70" />
                    <polygon points="55,55 70,40 85,55 70,70" />
                  </g>
                </svg>
              </div>
              <div className="space-y-0">
                <p className="text-2xl md:text-3xl font-serif font-bold text-primary">SRESTHA</p>
                <p className="text-base md:text-lg font-serif font-bold text-primary">JYOTI</p>
              </div>
            </div>

            {/* Address Column */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Address</h3>
              <p className="text-lg text-primary font-medium mb-2">RANCHI</p>
              <p className="text-lg text-primary font-medium">(Open to Relocate)</p>
            </div>

            {/* Contact Column */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Contact</h3>
              <p className="text-lg mb-3">
                <span className="text-foreground font-medium">Mail: </span>
                <a href="mailto:sresthajyoti@gmail.com" className="text-primary hover:text-accent transition-colors font-medium">
                  sresthajyoti@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <span className="text-foreground font-medium">Phone: </span>
                <span className="text-primary font-medium">Available upon request</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-96 overflow-y-auto modal-content border border-border">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all z-10"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-base leading-relaxed opacity-90">
                  {selectedProject.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 border-t border-border pt-6">
                <div>
                  <p className="text-sm opacity-60 font-medium">CLIENT</p>
                  <p className="text-lg font-semibold">{selectedProject.details.client}</p>
                </div>
                <div>
                  <p className="text-sm opacity-60 font-medium">YEAR</p>
                  <p className="text-lg font-semibold">{selectedProject.details.year}</p>
                </div>
                <div>
                  <p className="text-sm opacity-60 font-medium">AREA</p>
                  <p className="text-lg font-semibold">{selectedProject.details.area}</p>
                </div>
                <div>
                  <p className="text-sm opacity-60 font-medium">STYLE</p>
                  <p className="text-lg font-semibold">{selectedProject.details.style}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-border pt-6">
                <p className="text-sm opacity-60 font-medium mb-4">PROJECT HIGHLIGHTS</p>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.details.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
