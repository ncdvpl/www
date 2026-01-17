function App() {
  const projects = [
    {
      title: "NCDVTV",
      description: "Coming soon...",
      status: "soon",
      tech: ["Java", "Spring Boot"]
    },
    {
      title: "jobs.ncdv.pl",
      description: "Coming soon...",
      status: "soon",
      tech: ["React", "TypeScript"]
    },
    {
      title: "-",
      description: "Coming soon...",
      status: "soon",
      tech: ["Java", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-5xl text-center z-10">
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
            <span className="block" style={{
              color: 'transparent',
              WebkitTextStroke: '2px rgba(192, 132, 252, 0.8)',
              textShadow: '0 0 40px rgba(192, 132, 252, 0.5), 0 0 80px rgba(251, 146, 206, 0.3)'
            }}>
              NoCapDeV
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            A student group of senior Java developers without German.
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            Building real solutions with honest code. No hype, just quality.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="https://github.com/ncdvpl"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="mailto:info@ncdv.pl"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600/50 text-purple-200 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-purple-600/20 hover:border-pink-500/50 transition-all hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2 text-gray-600 animate-bounce">
              <span className="text-sm">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">Our Projects</h2>
          <p className="text-center text-gray-500 mb-12">Check out what we're building</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-600/30 rounded-xl p-6 hover:border-pink-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {project.status === "soon" && (
                    <span className="px-3 py-1 bg-pink-600/20 text-pink-300 text-xs font-medium rounded-full border border-pink-600/30">
                      Soon
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded border border-purple-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-purple-900/50 bg-black">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2026 NCDV - NoCapDeV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
