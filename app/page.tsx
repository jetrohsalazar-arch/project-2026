```jsx
export default function Home() {
  const skills = [
    {
      title: "UI Design",
      description: "Creating clean, modern, and user-friendly interfaces.",
      icon: "✦",
    },
    {
      title: "UX Design",
      description: "Designing experiences that are simple and enjoyable to use.",
      icon: "◈",
    },
    {
      title: "Web Design",
      description: "Building responsive websites with strong visual identity.",
      icon: "⌘",
    },
    {
      title: "Basic Coding",
      description: "Turning designs into functional and responsive websites.",
      icon: "</>",
    },
    {
      title: "Visual Design",
      description: "Using typography, spacing, color, and layout effectively.",
      icon: "◉",
    },
    {
      title: "Communication",
      description: "Understanding ideas and turning them into effective designs.",
      icon: "↗",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Creative Portfolio",
      category: "Web Design",
      description:
        "A clean personal portfolio designed to showcase creative work, skills, and professional experience.",
      tags: ["UI Design", "Responsive", "Portfolio"],
    },
    {
      number: "02",
      title: "Modern Landing Page",
      category: "UI / UX Design",
      description:
        "A modern landing page focused on strong visual hierarchy, clear messaging, and conversion-friendly design.",
      tags: ["UX", "UI", "Web Design"],
    },
    {
      number: "03",
      title: "Business Website",
      category: "Web Development",
      description:
        "A responsive business website designed to create a professional online presence and improve user engagement.",
      tags: ["HTML", "CSS", "Responsive"],
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            Jetroh<span className="text-blue-600">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu icon */}
          <button
            className="rounded-lg border border-gray-200 p-2 text-gray-700 md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >

        {/* Background decoration */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Hero text */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Available for freelance work
            </div>

            <p className="mb-4 text-lg font-medium text-blue-600">
              Hello, I'm
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Jetroh
              <span className="block text-gray-400">
                Salazar.
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-700 sm:text-3xl">
              Freelance Web Designer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              I create clean, modern, and user-focused digital experiences
              that turn ideas into websites people enjoy using.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-800 transition duration-300 hover:-translate-y-1 hover:border-gray-900"
              >
                Contact Me
              </a>

            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-5 text-sm text-gray-500">

              <span>Follow me</span>

              <a
                href="#"
                className="font-medium transition hover:text-blue-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="font-medium transition hover:text-blue-600"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="font-medium transition hover:text-blue-600"
              >
                Instagram
              </a>

            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:block">

            <div className="relative mx-auto h-[500px] w-[500px]">

              {/* Main circle */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-2xl shadow-blue-500/30" />

              {/* Inner card */}
              <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-3xl border border-white/30 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">

                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <span className="text-xs text-gray-400">
                    portfolio
                  </span>
                </div>

                <div className="space-y-4">

                  <div className="h-4 w-24 rounded-full bg-gray-200" />

                  <div className="h-10 w-full rounded-xl bg-blue-100" />

                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl bg-gray-100" />
                    <div className="h-20 rounded-xl bg-gray-100" />
                  </div>

                  <div className="h-4 w-3/4 rounded-full bg-gray-200" />

                  <div className="h-10 w-28 rounded-full bg-blue-600" />

                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute right-0 top-20 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl">
                <p className="text-xs text-gray-400">
                  Focus
                </p>

                <p className="mt-1 font-bold">
                  UI / UX
                </p>
              </div>

              <div className="absolute bottom-20 left-0 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl">
                <p className="text-xs text-gray-400">
                  Experience
                </p>

                <p className="mt-1 font-bold">
                  Creative Design
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="border-t border-gray-100 bg-gray-50 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                About Me
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Designing ideas into
                <span className="text-blue-600"> digital experiences.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-600">

              <p>
                I'm a passionate web designer who enjoys creating websites
                that look great and feel easy to use.
              </p>

              <p>
                My approach combines visual design, user experience, and
                basic web development to create digital experiences that
                are both attractive and functional.
              </p>

              <p>
                I'm continuously learning new technologies and improving my
                design skills to create better experiences for every project.
              </p>

            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-4xl font-bold">
                03+
              </p>

              <p className="mt-2 text-gray-500">
                Featured Projects
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-4xl font-bold">
                06
              </p>

              <p className="mt-2 text-gray-500">
                Core Skills
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-4xl font-bold">
                100%
              </p>

              <p className="mt-2 text-gray-500">
                Passion for Design
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              What I Do
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Skills & Expertise
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              A combination of design thinking and technical skills to build
              useful and visually engaging digital experiences.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {skill.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {skill.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="bg-gray-950 px-6 py-28 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Selected Work
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Featured Projects
              </h2>

            </div>

            <p className="max-w-md leading-7 text-gray-400">
              A selection of projects that showcase my approach to design,
              usability, and web development.
            </p>

          </div>

          <div className="grid gap-6 lg:grid-cols-3">

            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
              >

                {/* Project preview */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6">

                  <div className="absolute right-6 top-6 text-sm font-medium text-white/60">
                    {project.number}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                    <div className="mb-4 h-3 w-20 rounded-full bg-white/40" />

                    <div className="mb-3 h-8 w-full rounded-lg bg-white/20" />

                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-10 rounded-lg bg-white/10" />
                      <div className="h-10 rounded-lg bg-white/10" />
                    </div>

                  </div>
                </div>

                {/* Project content */}
                <div className="p-7">

                  <p className="text-sm font-medium text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex font-medium text-white transition group-hover:text-blue-400"
                  >
                    Discuss Project
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 py-28"
      >

        <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Have an idea?
            <span className="block text-blue-600">
              Let's build it.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Whether you need a portfolio, landing page, or a complete
            website, I'd love to hear about your project.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="mt-8 inline-flex rounded-full bg-gray-900 px-8 py-4 font-medium text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
          >
            Send Me an Email →
          </a>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-200 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Jetroh Salazar. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#home"
              className="transition hover:text-blue-600"
            >
              Back to top ↑
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-600"
            >
              Contact
            </a>

          </div>

        </div>
      </footer>

    </main>
  );
}
```
