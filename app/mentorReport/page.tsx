'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import MentorReport from '@/components/MentorReport';

function MentorReportContent() {
  const searchParams = useSearchParams();
  const result = searchParams.get('result') || '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <MentorReport result={result} gender='female' />
    </div>
  );
}

export default function Report() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MentorReportContent />
    </Suspense>
  );
}