import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Questrial } from 'next/font/google';
import { Rock_Salt } from 'next/font/google';
import { Comfortaa } from 'next/font/google';
import { Didact_Gothic } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Cherry_Bomb_One } from 'next/font/google';
import { Aclonica } from 'next/font/google';
import { Aboreto } from 'next/font/google';
import LayoutWrapper from "./layoutWrapper";
import Providers from "./providers";
import { CurrencyProvider } from "./CurrencyProvider";
// ---- i18n must be imported BEFORE anything that uses translation hooks
import i18n from "@/lib/i18n";

// Fonts config
const aboreto = Aboreto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aboreto',
});

const aclonica = Aclonica({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aclonica',
});

const cherryBomb = Cherry_Bomb_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cherry-bomb',
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const didact = Didact_Gothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-didact',
  display: 'swap',
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
});

export const rockSalt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rock-salt',
});

export const comfortaa = Comfortaa({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-comfortaa',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uni-learn.online"),
  title: {
    default: "Uni Learn - Online Learning Platform with Expert Mentors",
    template: "%s | Uni Learn",
  },
  description:
    "Join Uni Learn, the premier online learning platform where learners build their own path with real projects, expert mentors, and collaborative learning experiences.",
  keywords: [
    // Core value prop
    "personalized online learning", "one-on-one tutoring", "expert instructors",
    "book a trial lesson", "25 minute trial", "find instructors online",
    "mentor-led learning", "private online lessons", "live video lessons",
    "flexible scheduling", "learn in any timezone", "global learning community",

    // Learning intents & outcomes
    "skill development", "career growth", "study help", "exam preparation",
    "homework help", "project-based learning", "portfolio projects",
    "beginner friendly", "advanced tutoring", "custom learning plan",

    // Subjects (keep only those you actually list)
    "English tutoring", "Spanish tutoring", "French tutoring", "Arabic tutoring",
    "Japanese tutoring", "Math tutoring", "Science tutoring", "Coding tutor",
    "STEM tutoring", "programming lessons", "web development basics",

    // Session types & pricing signals
    "trial lesson online", "50 minute lesson", "affordable tutoring",
    "book lessons online", "pay per lesson",

    // Marketplace/category terms
    "instructor marketplace", "find a tutor", "best online tutors",
    "top rated instructors", "language tutors online", "math tutors online",

    // Platform traits
    "mentor matching", "review instructors", "multiple languages site",
    "student-teacher matching", "secure learning platform",

    // Brand / navigational
    "Uni Learn", "Uni Learn instructors", "Uni Learn trial lesson",
    "Uni Learn online tutoring", "Uni Learn mentors",

    // Quiz + matching + report
   "learning style quiz", "mentor matching quiz", "skills assessment",
    "placement test", "learning profile", "personalized learning report",
    "strengths and weaknesses report", "course recommendations",
    "mentor compatibility", "learning goals assessment",
    "student onboarding quiz", "instructor onboarding quiz",
    "teaching style quiz", "mentor performance insights",
  ],
  authors: [{ name: "Uni Learn Team" }],
  creator: "Uni Learn",
  publisher: "Uni Learn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.uni-learn.online",
    siteName: "Uni Learn",
    title: "Uni Learn - Online Learning Platform with Expert Mentors",
    description:
      "Join Uni Learn, the premier online learning platform where learners build their own path with real projects, expert mentors, and collaborative learning experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uni Learn - Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uni Learn - Online Learning Platform with Expert Mentors",
    description:
      "Join Uni Learn, the premier online learning platform where learners build their own path with real projects, expert mentors, and collaborative learning experiences.",
    images: ["/og-image.jpg"],
    creator: "@unilearn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico' },                          // optional .ico
      { url: '/logo_s.png', type: 'image/png', sizes: '32x32' }, // png also fine
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // put a 180x180 png here if you have it
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={
        `${inter.variable} ${rockSalt.variable} ${comfortaa.variable} ${questrial.variable} ${didact.variable} ${plusJakarta.variable} ${cherryBomb.variable} ${aclonica.variable} ${aboreto.variable}`
      }
    >
      <body className={`${inter.className} antialiased`}>
        <Providers>
        <LayoutWrapper>
          {/* <CurrencyProvider> */}
          {children}
          {/* </CurrencyProvider> */}
        </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
