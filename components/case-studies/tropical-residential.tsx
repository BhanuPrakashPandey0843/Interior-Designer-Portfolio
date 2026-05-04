'use client';

import Image from 'next/image';

export function TropicalResidentialCaseStudy() {
  return (
    <div className="space-y-8 md:space-y-12 lg:space-y-16">
      {/* Title Section */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">Rajas Cottage</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-foreground">
          <div>
            <p className="text-lg font-semibold mb-2">Project Type</p>
            <p className="text-muted-foreground">Residential, Private</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Designer</p>
            <p className="text-muted-foreground">Hiraya Design Studio</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Location</p>
            <p className="text-muted-foreground">Mangalore</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Plot Area</p>
            <p className="text-muted-foreground">5250 sq.ft</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Theme</p>
            <p className="text-muted-foreground">Modern Classical</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Direction</p>
            <p className="text-muted-foreground">North East</p>
          </div>
        </div>
      </div>

      {/* Main Overview Image */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2815%29-N6XLEJPEmKWBgrFuJL48okvmFReuah.png"
          alt="Rajas Cottage exterior"
          fill
          className="object-cover"
        />
      </div>

      {/* Concept Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Concept</h2>
        <div className="space-y-4 text-foreground">
          <p className="text-lg leading-relaxed">
            This residential design case study explores a serene, tropical-inspired living environment that blends nature with built spaces. The design emphasizes openness and fluidity, creating a calm, breathable, and visually refreshing atmosphere.
          </p>
          <ul className="space-y-3 text-muted-foreground ml-6">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Planning philosophy incorporates maximum natural light and air openness</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Design for 4 BHK with optimized toilet, kitchen, bedroom, and stair accessibility</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Non-linear concept bungalow planning with parking considerations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Heritage-focused design blending old and new architectural styles</span>
            </li>
          </ul>
        </div>

        {/* Concept Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2812%29-tmoPMfl7KlwDEGVgBDXu1fvZmsIct8.png',
          ].map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={img} alt={`Concept ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Site Conditions */}
      <div className="bg-card rounded-lg p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Site Conditions</h2>
        <div className="space-y-3 text-foreground">
          <p className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>Site is away from city traffic and situated in a very peaceful area</span>
          </p>
          <p className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>Car porch built with intricate stone columns giving a vintage look and imparting an aura of piety</span>
          </p>
          <p className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>Backside of the site has small piece of unused open land</span>
          </p>
        </div>
      </div>

      {/* Microclimate */}
      <div className="bg-muted rounded-lg p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Microclimate</h2>
        <div className="space-y-3 text-foreground">
          <p className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>Tropical climate with rainy season from June to October due to monsoon, dry season from December to April</span>
          </p>
          <p className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>Temperature varies from 22°C to 32°C with annual rainfall of about 100 cm</span>
          </p>
          <p className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>Summer: March to May, Monsoon: June to September, Winter: November to February</span>
          </p>
        </div>
      </div>

      {/* Entrance Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Entrance</h2>
        <p className="text-lg text-foreground leading-relaxed">
          The entry of the house is designed with a raised platform called "thinnai" which is referred to a porch overlooking the courtyard in a traditional Chettinad (tamililan) home, to receive visitors. The built-in wooden seating on the entrance veranda adds to its quaint charm as do the Chettinad wooden pillars on both sides of the seating.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%281%29-Lvvou1WIGgTAlxJlwfkxhljnmXw5jT.jpg"
              alt="Entrance thinnai porch"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2812%29-tmoPMfl7KlwDEGVgBDXu1fvZmsIct8.png"
              alt="Entrance columns detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floor Plans Section */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Floor Plans</h2>

        {/* Ground Floor */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">Ground Floor Plan</h3>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2810%29-6LWdJkHwcr6ZCkitOJb0vgLk6wfvb0.png"
              alt="Ground floor plan"
              fill
              className="object-contain bg-muted"
            />
          </div>
          <div className="text-foreground space-y-2">
            <p className="font-semibold">Ground Floor Features:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>1 Living Room (14&apos;6x12&apos;6)</li>
              <li>1 Dining Area (14&apos;6x11&apos;3)</li>
              <li>1 Kitchen (13&apos;10x13&apos;3)</li>
              <li>1 Master Bedroom (19&apos;9x11&apos;3)</li>
              <li>1 Guest Room (8&apos;x20)</li>
              <li>1 Store Area (5&apos;2x7&apos;6)</li>
              <li>1 Wash Area (15&apos;6x3&apos;6)</li>
              <li>3 Toilets</li>
              <li>1 Servant Room (7&apos;1x11&apos;9)</li>
              <li>Car Parking Porch (14&apos;7x16)</li>
            </ul>
          </div>
        </div>

        {/* Ground Floor Zoning */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">Ground Floor Zoning</h3>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%287%29-hDzMhWW7t76LhgpvWo70QcMrGMMaYd.png"
              alt="Ground floor zoning"
              fill
              className="object-contain bg-muted"
            />
          </div>
        </div>

        {/* First Floor */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">First Floor Plan</h3>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%289%29-AflHLzH2yr253fXuL4Jkvnrgi19bRh.png"
              alt="First floor plan"
              fill
              className="object-contain bg-muted"
            />
          </div>
          <div className="text-foreground space-y-2">
            <p className="font-semibold">First Floor Features:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>1 Covered Snout (11&apos;6x13&apos;6)</li>
              <li>1 Daughter&apos;s Room (16&apos;3x12&apos;6)</li>
              <li>1 Son&apos;s Room (16&apos;3x12&apos;6)</li>
              <li>2 Toilets (7&apos;3x6&apos;3)</li>
              <li>1 Family Room (14&apos;6x12&apos;6)</li>
              <li>Sun Terrace with Gazebo</li>
            </ul>
          </div>
        </div>

        {/* First Floor Zoning */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">First Floor Zoning</h3>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%286%29-4bpnyvov16ANN8rHXBONpFUu2f3Ba3.png"
              alt="First floor zoning"
              fill
              className="object-contain bg-muted"
            />
          </div>
        </div>
      </div>

      {/* Elevations Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Elevations</h2>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%288%29-z4tC5Ewox28cTuV6qcvZmrGGjUb3Oj.png"
            alt="Side and front elevations"
            fill
            className="object-contain bg-muted"
          />
        </div>
      </div>

      {/* Living Room */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Living Room</h2>
        <p className="text-lg text-foreground leading-relaxed">
          The Mangalore style piece of furniture that accommodates 4, the wall segregating the formal and semi formal living spaces adorned with arched windows and a door has been retained from the earlier design as it speaks volumes of a traditional Mangalore home and didn&apos;t want to part ways with it. The antique switches and wood boards that the switches are mounted on are used here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%285%29-DbwyLbgQ8SS11tkddUYjqg2QtXIh2Z.png"
              alt="Living room furniture and wall detail"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%282%29-Az3RnWSWb9ZTlTj8dc8XrlmZvOMm1B.png"
              alt="Living room overview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Kitchen and Dining Area */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Kitchen and Dining Area</h2>
        <p className="text-lg text-foreground leading-relaxed">
          The kitchen features a modular finish with veneer details over the gola handles and island counter with open units. Customized windows with carved wooden arch details and molded arched borders provide character. An antique Chettinad door topped with glass serves as a dining table top. Wooden columns over pedestals separate the dining area from the kitchen, bringing openness to the space.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%284%29-jFLDKPzhVxOopSC5omc2DvcolHV4En.png"
              alt="Kitchen modular design"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2811%29-7dRir5YeamBnjJB6ksImsITFGYIpBI.png"
              alt="Kitchen and dining area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Master Bedroom */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Master Bedroom</h2>
        <p className="text-lg text-foreground leading-relaxed">
          The ground floor master and guest bedrooms feature attached bathrooms and walk-in closet spaces. The master bedroom is dominated by natural wood hues. The wardrobe combines veneer-bordered shutters with self-embroidered fabric sandwiched between glass. An antique mirror unit and four-poster bed with antique tile inlay detail from the Chettinad region adorn the room. A light source at 7&apos; level above the bed provides character. Windows are restricted to a cozy reading nook for privacy, featuring an antique easy chair.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%283%29-VKAUpWpH2ejIwnGLqCkcQ7BLnet1RV.png"
              alt="Master bedroom bed and wardrobe"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2814%29-xZcWy8fhsAwv8ojguitegrjFjrZe04.png"
              alt="Master bedroom reading nook"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* First Floor Rooms */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">First Floor</h2>

        {/* First Floor Description */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold">Floor Overview</h3>
          <p className="text-lg text-foreground leading-relaxed">
            As you walk up to the first floor level, you will notice the antique wood railings on the staircase and the character of the flooring changes. They have used yellow oxide as the base floor starting from the family room where people usually unwind and host friends. A beautiful antique chess table is placed on this level in one corner of the family room.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%282%29-Az3RnWSWb9ZTlTj8dc8XrlmZvOMm1B.png"
              alt="First floor overview"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Kids Room */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">Kids Room</h3>
          <p className="text-lg text-foreground leading-relaxed">
            The kids&apos; bedroom features a built-in window seater creating a cozy, restful reading spot overlooking a tiny home garden. The room includes a beautiful standout antique table with a brass-frame antique mirror in the restroom.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%281%29-7a1s2qtMzed9Oe6IF4KcMlW8D9MU4R.png"
              alt="Kids room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mood Board */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Design Mood Board</h2>
        <p className="text-lg text-foreground leading-relaxed">
          The design palette combines warm wood tones, soft pastels, and sophisticated materials that reflect the tropical heritage while accommodating contemporary living.
        </p>
        <div className="relative w-full aspect-video md:aspect-auto rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2811%29-7dRir5YeamBnjJB6ksImsITFGYIpBI.png"
            alt="Design mood board"
            fill
            className="object-contain bg-card"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Project Details</h2>
        <div className="bg-card rounded-lg p-6 sm:p-8 space-y-4">
          <p className="text-lg text-foreground leading-relaxed">
            The home features a built-up area of approximately 4,000 sq.ft with landscaping on one stretch of the plot. A mango tree, nearly at the center, extends branches across both car porches. The main door faces North East, and the design philosophy emphasizes reflecting heritage, restoring memories, and blending old with new architectural styles. This bungalow is rich in traditional design style yet accommodates a contemporary lifestyle.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2814%29-xZcWy8fhsAwv8ojguitegrjFjrZe04.png"
              alt="Project details"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Interior Design Title */}
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/case_study1%20%2816%29-1kmkstkalyOkDiBuOu39FnNFlPaPK8.png"
          alt="Interior design case study"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
