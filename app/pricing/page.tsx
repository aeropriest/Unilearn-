'use client';


import { Suspense } from "react";
import PricingPageComponent from '@/components/PricingPageComponent';

export default function PricingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricingPageComponent />
    </Suspense>
  );
}