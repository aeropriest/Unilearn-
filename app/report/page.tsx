'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LearnerReport from '@/components/LearnerReport';

function ReportContent() {
  const searchParams = useSearchParams();
  const result = searchParams.get('result') || '';
  const gender = searchParams.get('gender') || '';

  const fullReport = (searchParams.get('fullReport') || '').toLowerCase() === 'true';
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <LearnerReport result={result} gender={gender} fullReport={fullReport} />
    </div>
  );
}

export default function Report() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReportContent />
    </Suspense>
  );
}
