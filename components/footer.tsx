import Link from "next/link"
import { GraduationCap, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 border-t shadow-soft">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-medium">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Uni Learn</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="text-pink-500 font-medium">LOVE LEARNING</span>,{" "}
              <span className="text-blue-500 font-medium">FEEL THE LEARNING</span> &{" "}
              <span className="text-yellow-500 font-medium">YOUNG</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              An online learning platform where learners build their own path - with projects, mentors, and lots of
              magic.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal Stuff</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-primary-600 hover:text-primary-800 transition-colors duration-300 hover:underline"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-primary-600 hover:text-primary-800 transition-colors duration-300 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-primary-600 hover:text-primary-800 transition-colors duration-300 hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclosures"
                  className="text-sm text-primary-600 hover:text-primary-800 transition-colors duration-300 hover:underline"
                >
                  Commercial Disclosures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Learners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-blue-600 hover:text-blue-800">
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link href="/find-mentor" className="text-sm text-blue-600 hover:text-blue-800">
                  Find a Mentor
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-blue-600 hover:text-blue-800">
                  Pricing Plan
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-blue-600 hover:text-blue-800">
                  Get Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Mentors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mentors" className="text-sm text-blue-600 hover:text-blue-800">
                  About Mentorship
                </Link>
              </li>
              <li>
                <Link href="/join-mentor" className="text-sm text-blue-600 hover:text-blue-800">
                  Join as a Mentor
                </Link>
              </li>
              <li>
                <Link href="/mentor-pricing" className="text-sm text-blue-600 hover:text-blue-800">
                  Pricing Plan
                </Link>
              </li>
              <li>
                <Link href="/mentor-help" className="text-sm text-blue-600 hover:text-blue-800">
                  Get Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Facebook className="w-4 h-4 text-blue-600" />
                <Link href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Facebook
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Twitter className="w-4 h-4 text-blue-600" />
                <Link href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-sm text-blue-600 hover:text-blue-800">
                  Question or feedback?
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-sm text-blue-600 hover:text-blue-800">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Uni Learn by 不来梅科技有限公司, Uni Education Technology Limited
          </p>
          <p className="text-xs text-gray-500 mt-1">All rights reserved</p>
          <p className="text-xs text-gray-400 mt-2">Built by learners, for learners who never stop.</p>
        </div>
      </div>
    </footer>
  )
}
