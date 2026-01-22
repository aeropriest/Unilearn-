export default function LearnersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">For Learners</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover your learning path with personalized projects, expert mentors, and collaborative learning
          experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Start Your Journey</h3>
            <p className="text-gray-600 mb-4">Begin with our guided learning paths and build real-world projects.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Browse Projects</button>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Find a Mentor</h3>
            <p className="text-gray-600 mb-4">Connect with experienced professionals who can guide your learning.</p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">Find Mentors</button>
          </div>
        </div>
      </div>
    </div>
  )
}
