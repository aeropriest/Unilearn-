"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, HelpCircle, Globe, Lightbulb, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const DropdownContent = () => (
    <div className="absolute top-full left-0 right-0 bg-white border-t shadow-large z-50 py-8 animate-slide-down">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Card */}
          <Card className="lg:col-span-1 bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/images/hero-image.png"
                  alt="Learning mentors illustration"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">What type of mentors am I?</h2>
              <Button variant="outline" size="sm" className="text-pink-500 border-pink-300 hover:bg-pink-50">
                Take a quiz ↗
              </Button>
            </CardContent>
          </Card>

          {/* Guide Card */}
          <Card className="bg-gradient-to-br from-cyan-50 to-blue-100 border-2 border-cyan-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Guide</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-700">Learning Projects</h4>
                    <p className="text-sm text-gray-600">Create dynamic paths</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-700">Mentor Session</h4>
                    <p className="text-sm text-gray-600">Facilitate learning</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-700">Co-Learning</h4>
                    <p className="text-sm text-gray-600">Support collaboration</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Card */}
          <Card className="bg-gradient-to-br from-gray-50 to-slate-100 border-2 border-gray-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Help Center</h4>
                    <p className="text-sm text-gray-600">Get the help you need</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Community</h4>
                    <p className="text-sm text-gray-600">Check out latest updates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={dropdownRef} className="relative">
      <header className="w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-soft">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-medium">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Uni Learn</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => toggleDropdown("learners")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-primary-600 transition-all duration-300 hover:scale-105"
              >
                <span>For Learners</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${activeDropdown === "learners" ? "rotate-180" : ""}`}
                />
              </button>
              <button
                onClick={() => toggleDropdown("mentors")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-primary-600 transition-all duration-300 hover:scale-105"
              >
                <span>For Mentors</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${activeDropdown === "mentors" ? "rotate-180" : ""}`}
                />
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Dropdown Content */}
      {(activeDropdown === "learners" || activeDropdown === "mentors") && <DropdownContent />}
    </div>
  )
}
