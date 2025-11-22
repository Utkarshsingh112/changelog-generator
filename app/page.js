// app/page.js
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">ChangelogAI</h1>
        <Link 
          href="/dashboard"
          className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-8 py-20 text-center">
        <div className="inline-block px-4 py-1 bg-gray-700 rounded-full text-sm mb-6">
          ✨ Turn messy commits into beautiful changelogs
        </div>
        
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          AI-Powered Changelog<br />Generator for Developers
        </h2>
        
        <p className="text-gray-400 text-lg max-w-xl mb-8">
          Connect your GitHub repo, select a date range, and let AI transform 
          your commit history into clean, professional release notes.
        </p>

        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="bg-amber-700 px-5 py-3 rounded-lg font-medium transition"
          >
            Connect GitHub
          </Link>
          <Link
            href="#features"
            className="border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition"
          >
            See Features
          </Link>
        </div>

        {/* Features Section */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mt-24 max-w-4xl">
          <FeatureCard 
            emoji="🔗"
            title="GitHub Integration"
            description="Connect your repos with one click. We fetch commits and PRs automatically."
          />
          <FeatureCard 
            emoji="🤖"
            title="AI-Powered"
            description="Smart categorization into features, fixes, and improvements."
          />
          <FeatureCard 
            emoji="📝"
            title="Export Anywhere"
            description="Copy as Markdown, download as file, or share a public link."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 border-t border-gray-700">
        Built for developers who hate writing changelogs
      </footer>
    </div>
  )
}

function FeatureCard({ emoji, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl text-left">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}