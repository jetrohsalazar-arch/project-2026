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
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center">
          <p className="text-blue-600 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Jetroh Salazar
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Free lance Web Designer
          </h2>

          <p className="max-w-xl mx-auto text-gray-500 mb-8">
            Visual storyteller & pixel perfectionist. Turning complex ideas into bold brands that click. Let's make something cool..
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border px-6 py-3 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-8">
            I am a passionate web developer interested in
            creating websites and applications. I enjoy
            learning new technologies and building useful
            digital experiences.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "User Experience",
              "User Interface",
              "Visual Fundamentals",
              "Basic Coding",
              "Communication",
             
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Project 1
              </h3>

              <p className="text-gray-600 mb-4">
                Description of your project.
              </p>

              <a
                href="#"
                className="text-blue-600"
              >
                View Project →
              </a>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Project 2
              </h3>

              <p className="text-gray-600 mb-4">
                Description of your project.
              </p>

              <a
                href="#"
                className="text-blue-600"
              >
                View Project →
              </a>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Project 3
              </h3>

              <p className="text-gray-600 mb-4">
                Description of your project.
              </p>

              <a
                href="#"
                className="text-blue-600"
              >
                View Project →
                
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-gray-600 mb-6">
            Interested in working together?
          </p>

          <a
            href="mailto:youremail@example.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-gray-500">
          © 2026 Your Name. All rights reserved.
        </p>
      </footer>
    </main>
  );
}