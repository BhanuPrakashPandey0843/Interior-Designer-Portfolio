'use client';

import Image from 'next/image';

export function ThreeBHKCaseStudy() {
  return (
    <div className="w-full space-y-8 md:space-y-12 lg:space-y-16 animate-fade-in-up">
      {/* Title Section */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">3 BHK Residential Home</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-foreground">
          <div>
            <p className="text-sm opacity-75">Location</p>
            <p className="font-semibold">Indore, India</p>
          </div>
          <div>
            <p className="text-sm opacity-75">Total Area</p>
            <p className="font-semibold">1,400 sq ft</p>
          </div>
          <div>
            <p className="text-sm opacity-75">Bedrooms</p>
            <p className="font-semibold">3 BHK + Guest Room</p>
          </div>
          <div>
            <p className="text-sm opacity-75">Design Style</p>
            <p className="font-semibold">Contemporary Residential</p>
          </div>
        </div>
      </div>

      {/* Concept Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Concept</h2>
        <p className="text-base leading-relaxed opacity-90">
          This residential design case study explores a serene, tropical-inspired living environment that blends nature with built spaces. The design emphasizes openness and fluidity, creating a calm, breathable, and visually refreshing atmosphere. Each space is thoughtfully designed to ensure comfort, efficiency, and visual balance throughout the home.
        </p>
      </div>

      {/* Site Analysis Section */}
      <div className="bg-card rounded-lg p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Site Analysis</h2>
        <div className="space-y-4">
          <p className="text-sm opacity-75">Comprehensive analysis of the site location in Indore including climate, sun path, ventilation patterns, and accessibility.</p>
          <div className="rounded-lg overflow-hidden bg-muted">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk-ngwWDrWrE97z1sYtiTwPvX1DJRtSvA.jpeg"
              alt="Site Analysis"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Client Profile */}
      <div className="bg-muted rounded-lg p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Client Profile</h2>
        <p className="text-sm opacity-75">Understanding the family members, their professions, ages, and lifestyle preferences to design a space that truly caters to their needs.</p>
        <div className="rounded-lg overflow-hidden bg-card">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk2-PBPedrB93iCFODQFDPJYmMgiZiJpN9.jpg"
            alt="Client Profile - Family Details"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Material Board */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Design Material Board</h2>
        <p className="text-sm opacity-75">Carefully curated materials including wood textures, stone finishes, fabrics, and natural elements that define the aesthetic and functionality of the space.</p>
        <div className="rounded-lg overflow-hidden bg-muted">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk3-tP5Fo8464ZRXCG6u3L654jgWztnS4C.jpeg"
            alt="Material Board"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Floor Plans Section */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Floor Plans</h2>

        {/* Ground Floor */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">Ground Floor Plan</h3>
          <p className="text-sm opacity-75">Strategic spatial organization showing kitchen, living area, guest room, entrance, and powder washroom with clear zoning.</p>
          <div className="rounded-lg overflow-hidden bg-muted">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk4-HLPHhxCZSiPzXP17R0o5mkvHXCqVjh.png"
              alt="Ground Floor Plan"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Ground Floor Zoning */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">Ground Floor Zoning</h3>
          <p className="text-sm opacity-75">Functional zoning diagram showing relationship between spaces and circulation patterns.</p>
          <div className="rounded-lg overflow-hidden bg-muted">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk5-n6otPI9uJdcFmxNfXNmrQ95Dk68mol.png"
              alt="Ground Floor Zoning"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* First Floor */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">First Floor Plan</h3>
          <p className="text-sm opacity-75">Complete first floor layout with bedrooms, bathrooms, and open areas with detailed spatial organization.</p>
          <div className="rounded-lg overflow-hidden bg-muted">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk7-1CRQzrQ1WJW3uAg3GIsAh4sAU0HodE.png"
              alt="First Floor Plan"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Ground Floor Massing */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">Ground Floor Massing</h3>
          <p className="text-sm opacity-75">Massing diagram showing spatial volumes and structural organization.</p>
          <div className="rounded-lg overflow-hidden bg-muted">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk8-xXJQLZXdutukXrAFXWG7oySaP0OZj3.png"
              alt="Ground Floor Massing"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Flooring Details */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">Flooring Layout</h3>
          <p className="text-sm opacity-75">Detailed flooring specifications with material callouts, skirting details, and flooring patterns for both floors.</p>
          <div className="rounded-lg overflow-hidden bg-muted">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk9-rvBsEZWSeKrEcuzcw226cmyb5Sq9N7.png"
              alt="Flooring Details"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Door & Window Details */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Door & Window Specifications</h2>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Washroom Details</h3>
            <p className="text-sm opacity-75">Detailed door and window specifications for washroom with dimensions and material callouts.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk10-eHpKPwOnDkaUL2VfZAlDZ1sP9fStgi.png"
                alt="Washroom Door Window Details"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Complete Window Schedule</h3>
            <p className="text-sm opacity-75">Comprehensive window and door specifications for all spaces with sizes and types.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk11-6lWGXYh7DHGhLeMlTFG87QnwBv6cO0.png"
                alt="Complete Window Schedule"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* False Ceiling */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">False Ceiling Design</h2>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Ground Floor False Ceiling</h3>
            <p className="text-sm opacity-75">Ceiling layout showing kitchen, living areas, and fixture placement with spatial organization.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk12-LHo2uMk95T3KbH62QBVGNsmkc1Hxff.png"
                alt="Ground Floor False Ceiling"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">First Floor False Ceiling</h3>
            <p className="text-sm opacity-75">First floor ceiling design with bedrooms and fixture integration for optimal lighting.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk13-pbrUEeppowBlZPBEmZ3bESn2TWLh9u.png"
                alt="First Floor False Ceiling"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ceiling with Fixtures */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ceiling with Fixtures</h2>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Ground Floor Ceiling Layout</h3>
            <p className="text-sm opacity-75">Detailed ceiling with fixtures placement and looping layout for comprehensive lighting design.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk14-nJUD0rhzQ6aRQjtivFBoGsDuvwBFG9.png"
                alt="Ground Floor Ceiling Fixtures"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">First Floor Ceiling Layout</h3>
            <p className="text-sm opacity-75">First floor comprehensive ceiling design with fixture locations and looping patterns.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk15-91Lm3wJUr76Ck6J13HLe6NE7o4cQCK.png"
                alt="First Floor Ceiling Fixtures"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Elevations Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Room Elevations</h2>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Drawing Room Elevation</h3>
            <p className="text-sm opacity-75">Complete sectional elevations showing furniture, wall treatments, and spatial organization with precise dimensions.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk16-OXeFskijn8XAJKobGHA6PobWzqRflB.png"
                alt="Drawing Room Elevation"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Kitchen Elevation</h3>
            <p className="text-sm opacity-75">Kitchen elevations with sectional views showing cabinetry, appliances, and isometric details.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk17-8qzNFFjNkLzT8Ifk5WUkXrBSg9gtRm.png"
                alt="Kitchen Elevation"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Living Room Elevation</h3>
            <p className="text-sm opacity-75">Living room sectional elevations showing wall treatments, fixtures, and spatial details with dimensions.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk18-lssQa31BOymFcR68gIgIsW7DP7bnHH.png"
                alt="Living Room Elevation"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Powder Washroom Elevation</h3>
            <p className="text-sm opacity-75">Detailed washroom elevations with sectional views, fixture placement, and dimensional callouts.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk19-blM6Aqc9QTixNVGaeVCdUwc6StGIzC.png"
                alt="Powder Washroom Elevation"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Complete Washroom Design</h3>
            <p className="text-sm opacity-75">Comprehensive washroom elevations with sections AA&apos;, BB&apos;, showing all fixtures and spatial organization.</p>
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3bhk20-I9La8lTggLKs2MpnSQiTP1c8B2LnVl.png"
                alt="Washroom Elevation Ground Floor"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Project Details</h2>
        <div className="bg-card rounded-lg p-6 sm:p-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm opacity-75 mb-2">Total Built Area</p>
              <p className="text-xl font-semibold text-gradient">1,400 sq ft</p>
            </div>
            <div>
              <p className="text-sm opacity-75 mb-2">Bedrooms</p>
              <p className="text-xl font-semibold text-gradient">3 BHK + Guest Room</p>
            </div>
            <div>
              <p className="text-sm opacity-75 mb-2">Bathrooms</p>
              <p className="text-xl font-semibold text-gradient">2.5 (with Powder Room)</p>
            </div>
            <div>
              <p className="text-sm opacity-75 mb-2">Design Philosophy</p>
              <p className="text-xl font-semibold text-gradient">Contemporary Living</p>
            </div>
          </div>
          <p className="text-base leading-relaxed opacity-90 pt-4">
            This 3 BHK residential project showcases comprehensive design documentation from site analysis through detailed construction drawings. The design emphasizes functional living spaces with clear spatial organization, integrated storage solutions, and thoughtful material selection that creates a serene and comfortable home environment for a multi-generational family.
          </p>
        </div>
      </div>
    </div>
  );
}
