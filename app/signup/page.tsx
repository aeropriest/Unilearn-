import type { Metadata } from "next"
import { SignupForm } from "@/components/forms/signup-form"
import { HeroSection } from "@/components/sections/hero-section"
import { MentorInfoSection } from "@/components/sections/mentor-info-section"

export const metadata: Metadata = {
  title: "Join as a Mentor - Share Your Expertise | Uni Learn",
  description:
    "Become a mentor on Uni Learn and help learners unlock their potential. Share your expertise, guide projects, and earn while making a difference in education.",
  keywords: ["become mentor", "teach online", "mentorship", "education jobs", "online teaching"],
  openGraph: {
    title: "Join as a Mentor - Share Your Expertise | Uni Learn",
    description:
      "Become a mentor on Uni Learn and help learners unlock their potential. Share your expertise, guide projects, and earn while making a difference in education.",
    images: ["/og-signup.jpg"],
  },
}

export default function SignupPage() {
  return (
    <>
      <HeroSection />

      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 max-w-10xl mx-auto */}
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 max-w-10xl mx-auto">
            <MentorInfoSection />
            <aside>
              <SignupForm />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
