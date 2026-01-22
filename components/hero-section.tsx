import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, HelpCircle, Globe, Lightbulb } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
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
    </section>
  )
}
