import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HomeHero from "@/components/home/HomeHero"
import LearningAreas from "@/components/home/LearningAreas"
import KeyElements from "@/components/home/KeyElements"
import LearningHighlights from "@/components/home/LearningHighlights"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import OnboardingSteps from "@/components/home/OnboardingSteps"
import FaqSection from "@/components/home/FaqSection"
import CommunitySection from "@/components/home/CommunitySection"
import FounderNote from "@/components/home/FounderNote"
import MentorInvite from "@/components/home/MentorInvite"
export const metadata: Metadata = {
  title: "Uni Learn - Transform Your Learning Journey with Expert Mentors",
  description:
    "Join thousands of learners on Uni Learn. Build real projects, connect with industry mentors, and unlock your potential through personalized learning paths.",
  openGraph: {
    title: "Uni Learn - Transform Your Learning Journey with Expert Mentors",
    description:
      "Join thousands of learners on Uni Learn. Build real projects, connect with industry mentors, and unlock your potential through personalized learning paths.",
    images: ["/og-home.jpg"],
  },
}

export default function HomePage() {
  return (
    <>

      <HomeHero />
      <LearningAreas />
      <KeyElements />
      <LearningHighlights/>
      <TestimonialsSection />
      <OnboardingSteps />
      <FaqSection />
      <CommunitySection />
      <FounderNote />
      <MentorInvite />
    </>
  )
}
