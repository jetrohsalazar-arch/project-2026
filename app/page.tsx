```
export default function Home() {
  const skills = [
    "UI/UX Design",
    "Web Design",
    "Visual Design",
    "Responsive Design",
    "Basic Coding",
    "Communication",
  ];

  const projects = [
    {
      number: "01",
      title: "Portfolio Website",
      category: "Web Design",
      description:
        "A minimal personal portfolio designed to present work, skills, and experience clearly.",
    },
    {
      number: "02",
      title: "Business Website",
      category: "UI/UX Design",
      description:
        "A clean business website focused on strong visual hierarchy and an easy user experience.",
    },
    {
      number: "03",
      title: "Digital Interface",
      category: "Visual Design",
      description:
        "A modern interface concept combining simple navigation with a polished visual system.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111111]">
      {/* NAVIGATION */}
      <nav className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-5 pt-5">
          <div className="flex items-center justify-between rounded-full border border-black/5 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-xl">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight"
            >
              Jetroh<span className="text-blue-600">.</span>
            </a>

            <div className="hidden items-center gap-7 text-sm text-gray-500 md:flex">
              <a
                href="#home"
                className="transition hover:text-black"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition hover:text-black"
              >
                About
              </a>

              <a
                href="#skills"
                className="transition hover:text-black"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="transition hover:text-black"
              >
                Projects
              </a>
            </div>

            <a
              href="#contact"
              className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
      >
        {/* Subtle background */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Left */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                <span className="text-sm text-gray-500">
                  Available for freelance work
                </span>
              </div>

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Freelance Web Designer
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                I create
                <span className="block text-gray-400">
                  simple digital
                </span>
                experiences.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
                I design clean, modern, and user-friendly websites
                that turn ideas into meaningful digital experiences.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-full bg-black px-7 py-3.5 text-center text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  Explore My Work →
                </a>

                <a
                  href="#about"
                  className="rounded-full border border-gray-200 bg-white px-7 py-3.5 text-center text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:border-black"
                >
                  About Me
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden lg:block">
              <div className="relative mx-auto h-80 w-80">
                <div className="absolute inset-0 rounded-[40%] border border-black/10 rotate-12" />

                <div className="absolute inset-8 rounded-[35%] bg-black" />

                <div className="absolute inset-16 flex rotate-[-12deg] items-center justify-center rounded-[30%] bg-blue-600">
                  <span className="text-7xl font-bold text-white">
                    JS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-24 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6 text-xs uppercase tracking-wider text-gray-400">
            <span>UI/UX</span>
            <span>Web Design</span>
            <span>Visual Design</span>
            <span>Responsive Design</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-black/5 bg-white px-5 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                About
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Thoughtful
                <span className="block text-gray-400">
                  design matters.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-gray-500">
                I'm Jetroh, a freelance web designer passionate
                about creating clean and useful digital experiences.
                I enjoy combining visual design, usability, and
                technology to build websites that feel simple and
                intuitive.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-500">
                I'm continuously learning and improving my skills
                while exploring new ways to make digital products
                more engaging and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="px-5 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Expertise
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Skills I bring
              <span className="text-gray-400"> to the table.</span>
            </h2>
          </div>

          <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group border-b border-r border-black/10 bg-white p-7 transition duration-300 hover:bg-blue-600 hover:text-white"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs text-gray-400 group-hover:text-blue-100">
                    0{index + 1}
                  </span>

                  <span className="text-gray-300 transition group-hover:text-white">
                    ↗
                  </span>
                </div>

                <h3 className="text-lg font-semibold">
                  {skill}
                </h3>

                <p className="mt-2 text-sm text-gray-400 group-hover:text-blue-100">
                  Clean, practical, and user-focused solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-[#111111] px-5 py-28 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Selected Work
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Recent projects
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              A collection of projects exploring design,
              usability, and digital experiences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                {/* Preview */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-white/[0.03]">
                  <div className="absolute h-40 w-40 rounded-full bg-blue-600/20 blur-3xl transition group-hover:bg-blue-600/40" />

                  <span className="relative text-7xl font-bold text-white/10 transition group-hover:text-white/20">
                    {project.number}
                  </span>
                </div>

                <div className="p-7">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-400"
                  >
                    View Project
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-5 py-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Contact
          </p>

          <h2 className="text-5xl font-bold tracking-[-0.03em] md:text-7xl">
            Let's make something
            <span className="block text-gray-400">
              meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-gray-500">
            Have an idea or project in mind? I'd love to hear
            about it and see how we can bring it to life.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="mt-9 inline-flex rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Start a Conversation →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>© 2026 Jetroh Salazar</p>

          <div className="flex gap-6">
            <a
              href="#home"
              className="transition hover:text-black"
            >
              Home
            </a>

            <a
              href="#projects"
              className="transition hover:text-black"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-black"
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
