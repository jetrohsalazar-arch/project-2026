export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">
            Jetroh Salazar
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
<section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-6 pt-20"
>
  {/* Background Decorations */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div className="text-center md:text-left">

      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/70 border border-blue-100 shadow-sm">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm text-gray-600">
          Available for freelance work
        </span>
      </div>

      <p className="text-blue-600 font-semibold text-lg mb-3">
        Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-4">
        Jetroh
        <span className="text-blue-600"> Salazar</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        Freelance Web Designer
      </h2>

      <p className="max-w-xl text-gray-600 text-lg leading-8 mb-8">
        I design clean, modern, and user-friendly digital experiences.
        Turning ideas into websites that look great and work beautifully.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

        <a
          href="#projects"
          className="group bg-blue-600 text-white px-7 py-3.5 rounded-xl font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
        >
          View My Projects
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        <a
          href="#contact"
          className="px-7 py-3.5 rounded-xl font-medium border border-gray-300 bg-white/70 backdrop-blur hover:bg-white hover:-translate-y-1 transition-all duration-300"
        >
          Let's Talk
        </a>

      </div>

      {/* Quick Stats */}
      <div className="flex justify-center md:justify-start gap-8 mt-10 pt-8 border-t border-gray-200/70">

        <div>
          <p className="text-2xl font-bold text-gray-900">3+</p>
          <p className="text-sm text-gray-500">Projects</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-gray-900">5+</p>
          <p className="text-sm text-gray-500">Skills</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-gray-900">100%</p>
          <p className="text-sm text-gray-500">Passion</p>
        </div>

      </div>
    </div>

    {/* Right Visual */}
    <div className="relative flex justify-center">

      {/* Main Card */}
      <div className="relative w-72 h-72 md:w-96 md:h-96">

        {/* Outer Glow */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-[3rem] rotate-6 blur-xl" />

        {/* Glass Card */}
        <div className="absolute inset-0 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white shadow-2xl rotate-3" />

        {/* Content */}
        <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center text-white shadow-xl">

          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-6 border border-white/30">
            <span className="text-5xl md:text-6xl font-bold">
              JS
            </span>
          </div>

          <h3 className="text-2xl font-bold">
            Jetroh Salazar
          </h3>

          <p className="text-blue-100 mt-2">
            Web Designer
          </p>

        </div>

        {/* Floating Cards */}
        <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4 rotate-6">
          <p className="text-xs text-gray-500">
            Focus
          </p>
          <p className="font-bold text-gray-900">
            UI / UX
          </p>
        </div>

        <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 -rotate-6">
          <p className="text-xs text-gray-500">
            Design
          </p>
          <p className="font-bold text-blue-600">
            Creative ✦
          </p>
        </div>

      </div>
    </div>

  </div>

  {/* Scroll Indicator */}
  <a
    href="#about"
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-blue-600 transition"
  >
    <span className="text-xs mb-2">Scroll Down</span>
    <span className="text-xl animate-bounce">↓</span>
  </a>

</section>
