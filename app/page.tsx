'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Menu, Linkedin, Phone } from 'lucide-react';
import { SplashScreen } from '@/components/splash-screen';
import { ModularKitchenCaseStudy } from '@/components/case-studies/modular-kitchen';
import { ThreeBHKCaseStudy } from '@/components/case-studies/three-bhk';
import { FurnitureShowroomCaseStudy } from '@/components/case-studies/furniture-showroom';
import { TropicalResidentialCaseStudy } from '@/components/case-studies/tropical-residential';
import { FurnitureDesignGallery } from '@/components/case-studies/furniture-design';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle escape key to close fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenImage(null);
      }
    };
    
    if (fullscreenImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [fullscreenImage]);

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll('.reveal-item, .scroll-reveal, .card-hover.rounded-lg');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_6eb67fdbf32a443596012e50bc236919~mv2-oIdk9nObKeoeyJNwOaJwpHAHbPAzcE.jpeg',
      description: 'A sophisticated furniture showroom with sculptural shell-like exterior, curated display zones, and elegant minimal aesthetic. Natural materials, soft lighting, and subtle detailing create a warm, inviting atmosphere.',
      caseStudy: 'furniture-showroom',
      details: {
        client: 'Furniture Retailer',
        year: '2024',
        area: '3,000 sq ft',
        style: 'Modern Retail',
        highlights: [
          'Shell-inspired curves',
          'Curated display zones',
          'Natural materials blend',
          'Soft lighting design',
          'Open spatial flow',
          'Minimal aesthetic'
        ]
      }
    },
    {
      id: 6,
      title: '3 BHK Residential Home',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_0d95916b85c6423ab192b21b742ac9d7~mv2-K1InBbFeLcKNlsvUkMfJb3TCbWvKj6.jpg',
      description: 'Complete 2D design documentation with detailed floor plans, ceiling layouts, furniture arrangements, and comprehensive specifications for tropical-inspired residential living.',
      caseStudy: 'three-bhk',
      details: {
        client: 'Residential Apartment',
        year: '2024',
        area: '1,400 sq ft',
        style: 'Luxury Contemporary',
        highlights: [
          'Open concept design',
          'Complete 2D documentation',
          'Master bedroom suite',
          'Kitchen integration',
          'Material specifications',
          'Lighting design'
        ]
      }
    },
    {
      id: 2,
      title: 'Furniture Design',
      image: '/furniture/one.jpeg',
      description: 'Bespoke furniture design crafted with precision, showcasing the harmony of form and function. Each piece balances material expertise with spatial awareness to deliver timeless, liveable results.',
      caseStudy: 'furniture-design',
      details: {
        client: 'Private Client',
        year: '2024',
        area: 'Custom Pieces',
        style: 'Contemporary Furniture',
        highlights: [
          'Custom joinery',
          'Material selection',
          'Spatial harmony',
          'Functional elegance',
          'Handcrafted details',
          'Client collaboration'
        ]
      }
    },
    {
      id: 4,
      title: 'Modular Kitchen',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9421c_3f5a7f681b7a447fb853dc40b72784e3~mv2-HVZ99L7ORZxsTv7nklyanzmrRtxCms.png',
      description: 'A sophisticated modular kitchen with minimal functional layout, clean lines, and muted green & white palette. Textured backsplash, open shelves, under-cabinet lighting, and built-in appliances ensure efficiency.',
      caseStudy: 'modular-kitchen',
      details: {
        client: 'Residential Home',
        year: '2024',
        area: '250 sq ft',
        style: 'Modern Modular',
        highlights: [
          'Clean lines design',
          'Green & white palette',
          'Textured backsplash',
          'Open shelving',
          'Under-cabinet lighting',
          'Built-in appliances'
        ]
      }
    },
    {
      id: 9,
      title: 'Case Study',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2815%29-N6XLEJPEmKWBgrFuJL48okvmFReuah.png',
      description: 'A serene, tropical-inspired residential design blending nature with built spaces. This modern-classical bungalow in Mangalore features open living concepts, heritage design elements, and contemporary lifestyle accommodation.',
      caseStudy: 'tropical-residential',
      details: {
        client: 'Private Residential',
        year: '2024',
        area: '5,250 sq ft',
        style: 'Modern Classical',
        highlights: [
          'Tropical design philosophy',
          'Heritage elements',
          'Open floor plans',
          'Natural light focus',
          'Traditional Chettinad architecture',
          'Contemporary living spaces'
        ]
      }
    }
  ];

  const skills = [
    { name: 'AutoCAD', icon: '📏' },
    { name: 'SketchUp', icon: '📐' },
    { name: 'V-Ray', icon: '✨' },
    { name: 'Adobe Illustrator', icon: '✏️' },
    { name: 'Adobe Photoshop', icon: '📷' },
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
      {/* Splash Screen */}
      <SplashScreen />
      
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-background/85 pointer-events-none" style={{ zIndex: 1 }} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border smooth-hover">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 animate-fade-in-down min-w-0">
            <div className="w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow">
                <defs>
                  <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4549a" />
                    <stop offset="100%" stopColor="#c9a046" />
                  </linearGradient>
                </defs>
                <g fill="url(#diamondGradient)">
                  <polygon points="30,30 45,15 60,30 45,45" />
                  <polygon points="55,30 70,15 85,30 70,45" />
                  <polygon points="30,55 45,40 60,55 45,70" />
                  <polygon points="55,55 70,40 85,55 70,70" />
                </g>
              </svg>
            </div>
            <span className="font-serif text-base sm:text-xl font-bold text-gradient truncate">Srestha Jyoti</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
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
                  className="absolute top-full left-0 mt-0 w-56 bg-card rounded-lg shadow-2xl py-2 border border-border animate-slide-in-down z-50"
                  onMouseEnter={() => setShowPortfolioMenu(true)}
                  onMouseLeave={() => setShowPortfolioMenu(false)}
                >
                  {allPortfolioItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.caseStudy) {
                          setSelectedCaseStudy(item.caseStudy);
                        } else {
                          setSelectedProject(item);
                        }
                        setShowPortfolioMenu(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 border-b border-border last:border-b-0"
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border overflow-y-auto max-h-[calc(100vh-70px)]">
            <div className="px-3 py-3 space-y-2">
              <a href="#home" className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors">Home</a>
              <button 
                onClick={() => setShowPortfolioMenu(!showPortfolioMenu)}
                className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
              >
                <span>Portfolio</span>
                <ChevronRight size={16} className={`transition-transform flex-shrink-0 ${showPortfolioMenu ? 'rotate-90' : ''}`} />
              </button>
              {showPortfolioMenu && (
                <div className="bg-muted/50 rounded-lg py-2 px-2 space-y-1 max-h-48 overflow-y-auto">
                  {allPortfolioItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.caseStudy) {
                          setSelectedCaseStudy(item.caseStudy);
                        } else {
                          setSelectedProject(item);
                        }
                        setShowPortfolioMenu(false);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground rounded transition-colors break-words"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
              <a href="#certificates" className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors">Certificates</a>
              <a href="#contact" className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden pt-20 sm:pt-24 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center py-10 sm:py-20">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-8 animate-fade-in-up">
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 text-gradient animate-fade-in-up break-words">
                  Srestha Jyoti
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-primary font-medium mb-2 sm:mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  Interior Designer | Visual Strategist | Design Consultant
                </p>
                <a
                  href="https://www.linkedin.com/in/srestha-jyoti-295b71218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-300 group animate-fade-in-up mb-1 hover:-translate-y-0.5"
                  style={{ animationDelay: '0.15s' }}
                >
                  <Linkedin size={14} className="group-hover:scale-125 transition-transform duration-200" />
                  <span className="group-hover:underline underline-offset-2">linkedin.com/in/srestha-jyoti</span>
                </a>
              </div>

              <p className="text-sm sm:text-lg leading-relaxed opacity-90 animate-fade-in-up max-w-lg" style={{ animationDelay: '0.2s' }}>
                I am an Interior Designer driven by a passion for creating functional, balanced, and timeless spaces, with a strong focus on thoughtful planning, strong aesthetics, and practical design solutions to deliver meaningful results while maintaining precision, discipline, and attention to detail in every project.
              </p>

              <p className="text-xs sm:text-base leading-relaxed opacity-85 animate-fade-in-up max-w-lg" style={{ animationDelay: '0.3s' }}>
                Alongside interior design, I specialize in Graphic Design, crafting clear visuals, presentations, and creative concepts using professional tools, ensuring effective communication of ideas and concepts. I enjoy blending spatial design with visual storytelling to create impactful and purposeful work.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <a href="#certificates" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent hover-lift transition-all text-center text-sm sm:text-base whitespace-nowrap">
                  Explore Work
                </a>
                <a href="#contact" className="px-6 sm:px-8 py-2.5 sm:py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 hover-lift transition-all text-center text-sm sm:text-base whitespace-nowrap">
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full flex items-center justify-center animate-fade-in-down">
              <div className="relative w-full max-w-sm h-full">
                {/* Decorative Background Shapes */}
                <div className="absolute -top-10 -right-10 w-32 sm:w-48 h-32 sm:h-48 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 sm:w-48 h-32 sm:h-48 bg-accent/10 rounded-full blur-3xl"></div>
                
                {/* Photo Frame */}
                <div className="relative z-10 h-full rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-muted/50 hover-lift cursor-pointer group"
                  onClick={() => setFullscreenImage('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-05-01-23-07-14-RJR1TuddOpp91BlEsALJOy4Yii6VZd.jpg')}
                >
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-05-01-23-07-14-RJR1TuddOpp91BlEsALJOy4Yii6VZd.jpg" 
                    alt="Srestha Jyoti" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Skills Section */}
      <section className="py-12 sm:py-20 bg-muted/20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 uppercase tracking-wider scroll-reveal">
            Software Skills
          </h2>

          <div className="relative flex items-center justify-center">
            {/* Left Arrow - Hidden on mobile */}
            <button
              onClick={() => scrollSkills('left')}
              className="absolute left-0 z-20 p-2 sm:p-3 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all hover-scale hidden sm:flex flex-shrink-0"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Skills Container */}
            <div
              ref={skillsContainerRef}
              className="flex gap-3 sm:gap-8 overflow-x-auto scroll-smooth px-4 sm:px-20 py-6 sm:py-8 w-full justify-start sm:justify-center scrollbar-hide"
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
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-card rounded-full border-4 border-primary flex items-center justify-center shadow-lg hover:shadow-2xl transition-all hover-scale group cursor-pointer">
                    <span className="text-2xl sm:text-4xl">{skill.icon}</span>
                  </div>
                  <p className="text-center text-xs sm:text-sm font-medium mt-2 sm:mt-3 group-hover:text-primary transition-colors max-w-[60px] sm:max-w-none">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow - Hidden on mobile */}
            <button
              onClick={() => scrollSkills('right')}
              className="absolute right-0 z-20 p-2 sm:p-3 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all hover-scale hidden sm:flex flex-shrink-0"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-24 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 uppercase tracking-wider scroll-reveal">
            Portfolio Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {allPortfolioItems.map((project, index) => (
              <div
                key={project.id}
                onClick={() => {
                  if (project.caseStudy) {
                    setSelectedCaseStudy(project.caseStudy);
                  } else {
                    setSelectedProject(project);
                  }
                }}
                className="card-hover reveal-item rounded-xl overflow-hidden cursor-pointer group h-full flex flex-col"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className="relative h-40 sm:h-64 overflow-hidden bg-muted flex-shrink-0 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenImage(project.image);
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>
                <div className="p-3 sm:p-6 bg-card border border-border/50 flex-1 flex flex-col">
                  <h3 className="font-serif text-base sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-75 line-clamp-2 mb-3 flex-1">
                    {project.description}
                  </p>
                  <div className="inline-block text-primary text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform">
                    View Details →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-12 sm:py-20 bg-muted/20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 uppercase tracking-wider scroll-reveal">
            Certifications & Awards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Kingston University Certificate */}
            <div className="card-hover rounded-lg overflow-hidden bg-card border border-border/50 smooth-hover flex flex-col h-full">
              <div className="relative h-56 sm:h-96 overflow-hidden bg-muted flex-shrink-0 cursor-pointer group"
                onClick={() => setFullscreenImage('/kingston-certificate.jpg')}
              >
                <img
                  src="/kingston-certificate.jpg"
                  alt="Kingston University Certificate"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Click to expand
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-8 flex flex-col flex-1">
                <h3 className="font-serif text-lg sm:text-2xl font-bold mb-2 sm:mb-3">
                  Kingston University
                </h3>
                <p className="text-sm sm:text-base mb-2 font-medium text-primary">
                  Bachelor of Arts with Honours (Third Class)
                </p>
                <p className="text-xs sm:text-sm mb-2 sm:mb-3 text-primary">Interior Architecture & Design</p>
                <p className="opacity-75 text-xs sm:text-sm flex-1">
                  Advanced degree programme in Interior Architecture and Design in collaboration with the Indian Institute of Art and Design (IIAD). Developed expertise in spatial design, architectural visualization, and comprehensive project management. Graduated June 2025.
                </p>
              </div>
            </div>

            {/* IIAD Certificate */}
            <div className="card-hover rounded-lg overflow-hidden bg-card border border-border/50 smooth-hover flex flex-col h-full">
              <div className="relative h-56 sm:h-96 overflow-hidden bg-muted flex-shrink-0 cursor-pointer group"
                onClick={() => setFullscreenImage('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cetificate_sres-gJ6l7Ys4WggZ3hQlWv7hht6RYzVHel.jpg')}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cetificate_sres-gJ6l7Ys4WggZ3hQlWv7hht6RYzVHel.jpg"
                  alt="IIAD Certificate"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Click to expand
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-8 flex flex-col flex-1">
                <h3 className="font-serif text-lg sm:text-2xl font-bold mb-2 sm:mb-3">
                  Indian Institute of Art & Design
                </h3>
                <p className="text-sm sm:text-base mb-2 font-medium text-primary">
                  Diploma in Interior Design & Graphic Design
                </p>
                <p className="opacity-75 text-xs sm:text-sm flex-1">
                  Specialized training in contemporary interior design, spatial planning, graphic design, and visual communication. Completed comprehensive coursework in design principles, material selection, colour theory, and professional project delivery with hands-on experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-muted/30 rounded-lg p-6 sm:p-12 md:p-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-12 smooth-hover">
            {/* Logo and Name */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-x-4 md:space-x-6 flex-shrink-0 text-center sm:text-left">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d4549a" />
                      <stop offset="100%" stopColor="#c9a046" />
                    </linearGradient>
                  </defs>
                  <g fill="url(#contactGrad)">
                    <polygon points="30,30 45,15 60,30 45,45" />
                    <polygon points="55,30 70,15 85,30 70,45" />
                    <polygon points="30,55 45,40 60,55 45,70" />
                    <polygon points="55,55 70,40 85,55 70,70" />
                  </g>
                </svg>
              </div>
              <div className="space-y-0">
                <p className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-primary">SRESTHA</p>
                <p className="text-sm sm:text-base md:text-lg font-serif font-bold text-primary">JYOTI</p>
              </div>
            </div>

            {/* Address Column */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-base sm:text-2xl font-serif font-bold text-foreground mb-2 sm:mb-4">Address</h3>
              <p className="text-sm sm:text-lg text-primary font-medium mb-1">RANCHI</p>
              <p className="text-sm sm:text-lg text-primary font-medium">(Open to Relocate)</p>
            </div>

            {/* Contact Column */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-base sm:text-2xl font-serif font-bold text-foreground mb-2 sm:mb-4">Contact</h3>
              <p className="text-xs sm:text-lg mb-2 sm:mb-3">
                <span className="text-foreground font-medium">Mail: </span>
                <a href="mailto:sresthajyoti@gmail.com" className="text-primary hover:text-accent transition-colors font-medium break-all text-xs sm:text-base">
                  sresthajyoti@gmail.com
                </a>
              </p>
              <p className="text-xs sm:text-lg mb-2 sm:mb-3">
                <span className="text-foreground font-medium">Phone: </span>
                <a href="tel:+917033661527" className="text-primary font-medium text-xs sm:text-base hover:text-accent transition-colors">
                  +91 7033661527
                </a>
              </p>
              <p className="text-xs sm:text-lg">
                <span className="text-foreground font-medium">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/srestha-jyoti-295b71218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium text-xs sm:text-base hover:text-accent transition-colors inline-flex items-center gap-1.5 group"
                >
                  <Linkedin size={13} className="group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline underline-offset-2">srestha-jyoti-295b71218</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center p-3 sm:p-4 overflow-y-auto modal-backdrop pt-16 sm:pt-20">
          <div className="bg-card rounded-2xl max-w-6xl w-full modal-content case-study-modal border border-border p-4 sm:p-8 md:p-12 my-10 sm:my-20">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all z-10 flex-shrink-0"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Case Study Content */}
            <div className="space-y-6 sm:space-y-8">
              {selectedCaseStudy === 'modular-kitchen' && <ModularKitchenCaseStudy />}
              {selectedCaseStudy === 'three-bhk' && <ThreeBHKCaseStudy />}
              {selectedCaseStudy === 'furniture-showroom' && <FurnitureShowroomCaseStudy />}
              {selectedCaseStudy === 'tropical-residential' && <TropicalResidentialCaseStudy />}
              {selectedCaseStudy === 'furniture-design' && <FurnitureDesignGallery />}
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && !selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-3 sm:p-4 modal-backdrop">
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto modal-content border border-border">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-3 right-3 sm:top-4 sm:right-4 p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all z-10 flex-shrink-0"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative h-48 sm:h-64 overflow-hidden cursor-pointer group"
              onClick={() => setFullscreenImage(selectedProject.image)}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Click to expand
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div>
                <h2 className="font-serif text-xl sm:text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-xs sm:text-base leading-relaxed opacity-90">
                  {selectedProject.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 border-t border-border pt-4 sm:pt-6">
                <div>
                  <p className="text-xs opacity-60 font-medium">CLIENT</p>
                  <p className="text-xs sm:text-lg font-semibold">{selectedProject.details.client}</p>
                </div>
                <div>
                  <p className="text-xs opacity-60 font-medium">YEAR</p>
                  <p className="text-xs sm:text-lg font-semibold">{selectedProject.details.year}</p>
                </div>
                <div>
                  <p className="text-xs opacity-60 font-medium">AREA</p>
                  <p className="text-xs sm:text-lg font-semibold">{selectedProject.details.area}</p>
                </div>
                <div>
                  <p className="text-xs opacity-60 font-medium">STYLE</p>
                  <p className="text-xs sm:text-lg font-semibold">{selectedProject.details.style}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-border pt-4 sm:pt-6">
                <p className="text-xs opacity-60 font-medium mb-2 sm:mb-4">PROJECT HIGHLIGHTS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {selectedProject.details.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2 min-w-0">
                      <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm break-words">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-3 sm:p-4"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImage(null);
            }}
            className="absolute top-4 right-4 z-[10000] p-2 sm:p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all"
            aria-label="Close fullscreen"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Image Container */}
          <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen view"
              className="w-full h-full object-contain max-w-full max-h-full"
            />
          </div>

          {/* Click to close hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:text-sm text-center px-4">
            Click background or press ESC to close
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
