'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { ModularKitchenCaseStudy } from '@/components/case-studies/modular-kitchen';
import { ThreeBHKCaseStudy } from '@/components/case-studies/three-bhk';
import { FurnitureShowroomCaseStudy } from '@/components/case-studies/furniture-showroom';
import { TropicalResidentialCaseStudy } from '@/components/case-studies/tropical-residential';

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');

  const renderProjectContent = () => {
    switch (projectId) {
      case 'modular-kitchen':
        return <ModularKitchenCaseStudy />;
      case 'three-bhk':
        return <ThreeBHKCaseStudy />;
      case 'furniture-showroom':
        return <FurnitureShowroomCaseStudy />;
      case 'tropical-residential':
        return <TropicalResidentialCaseStudy />;
      default:
        return (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">Project not found</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gradient flex-1">Project Details</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {renderProjectContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/20 mt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p>© 2024 Srestha Jyoti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p>Loading project...</p>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
