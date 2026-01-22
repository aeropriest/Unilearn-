'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { JsonLd } from '@/components/seo/json-ld';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === '/learnersQuiz' || pathname === '/mentorsQuiz' || pathname === '/report' || pathname === '/mentorReport' ; // Add more routes if needed

  return (
    <>
      <JsonLd />
      <div className="min-h-screen flex flex-col">
        {!hideLayout && <Header />}
        <main className="flex-1" role="main">
          {children}
        </main>
        {!hideLayout && <Footer />}
      </div>
    </>
  );
}
