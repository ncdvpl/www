function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          NCDV
        </h1>
        <div className="mt-2 text-lg text-purple-300 font-medium">NoCapDeV</div>

        <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto">
          A student group of senior Java developers without German. Building real solutions with honest code.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/ncdvpl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-lg font-semibold shadow-lg"
          >
            View GitHub
          </a>

          <a
            href="mailto:info@ncdv.pl"
            className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-200 rounded-lg hover:bg-purple-700/10 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
