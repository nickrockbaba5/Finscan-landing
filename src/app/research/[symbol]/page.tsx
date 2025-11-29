'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with no SSR to prevent build-time API calls
const ResearchContent = dynamic(() => import('./ResearchContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading research...</p>
      </div>
    </div>
  ),
});

export default function ResearchPage({ params }: { params: Promise<{ symbol: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResearchContent params={params} />
    </Suspense>
  );
}
