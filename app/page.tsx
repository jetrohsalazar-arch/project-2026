```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "User Experience",
    "User Interface",
    "Visual Fundamentals",
    "Basic Coding",
    "Communication",
  ];

  return (
    <main className="bg-[#080808] text-white min-h-screen">

      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-6 py-3">

            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              Jetroh<span className="text-cyan-400">.</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </div>

            <a
              href="#contact"
              className="hidden md:block rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-cyan-400 transition"
            >
              Let's Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-300"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-black/95 p-5 md:hidden">
              <div className="flex flex-col gap-5 text-gray-300">
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>

                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>

                <a href="#skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>

                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>

                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-3 border border-cyan-400/20 bg-cyan-400/5 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

                <span className="text-sm text-cyan-300">
                  Freelance Web Designer
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
                Jetroh
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                  Salazar.
                </span>
              </h1>

              <p className="text-xl text-gray-400 mt-8 max-w-xl leading-8">
                Visual storyteller & pixel perfectionist.
                Turning complex ideas into bold brands
                that click.
              </p>

              <p className="text-gray-500 mt-4 max-w-lg">
                I design modern digital experiences that
                combine creativity, usability, and clean
                visual communication.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="#projects"
                  className="rounded-full bg-cyan-400 text-black px-7 py-4 font-semibold hover:bg-cyan-300 transition"
                >
                  Explore My Work →
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-7 py-4 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  Contact Me
                </a>

              </div>

              {/* Socials */}
              <div className="flex gap-6 mt-10 text-sm text-gray-500">

                <a
                  href="https://github.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>

              </div>

            </div>


            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Large Circle */}
              <div className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-full border border-cyan-400/10" />

              <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-purple-500/10" />

              {/* Profile */}
              <div className="relative">

                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/30 to-purple-600/20 blur-3xl" />

                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[40px] overflow-hidden border border-white/10 bg-[#111]">

                  {/* Replace with your photo */}
                  <img
                    src="/profile.jpg"
                    alt="Jetroh Salazar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm text-gray-300">
                      Creative Designer
                    </p>

                    <p className="font-bold text-lg">
                      Jetroh Salazar
                    </p>
                  </div>

                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-8 bg-[#111] border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">

                  <p className="text-xs text-gray-500">
                    Experience
                  </p>

                  <p className="text-xl font-bold text-cyan-400">
                    Creative
                  </p>

                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-[#111] border border-white/10 rounded-2xl px-5 py-4">

                  <p className="text-xs text-gray-500">
                    Focus
                  </p>

                  <p className="font-semibold">
                    UI / UX
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="py-32 px-6 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Me
          </p>

          <div className="grid lg:grid-cols-2 gap-16">

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Designing ideas into
              <span className="text-gray-500">
                {" "}visual experiences.
              </span>
            </h2>

            <div className="text-gray-400 leading-8 text-lg">

              <p className="mb-6">
                I am Jetroh Salazar, a freelance web
                designer passionate about creating
                visually engaging and user-friendly
                digital experiences.
              </p>

              <p>
                My goal is simple: create designs that
                look great, communicate clearly, and
                provide an enjoyable experience for
                the people using them.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="py-32 px-6 bg-[#0c0c0c]"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            What I do.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-3xl border border-white/10 bg-[#111] p-8 hover:border-cyan-400/40 hover:bg-[#151515] transition duration-300"
              >

                <div className="text-cyan-400 text-sm mb-8">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                  {skill}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  Creating thoughtful and effective
                  solutions with attention to detail.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="py-32 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Selected work.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div className="group rounded-3xl overflow-hidden border border-white/10 bg-[#111]">

              <div className="h-72 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-600/30 flex items-center justify-center">

                <span className="text-5xl font-black text-white/20">
                  PROJECT 01
                </span>

              </div>

              <div className="p-8">

                <p className="text-cyan-400 text-sm mb-3">
                  Web Design
                </p>

                <h3 className="text-2xl font-bold">
                  Creative Website
                </h3>

                <p className="text-gray-500 mt-3">
                  A modern website concept focused on
                  visual storytelling and usability.
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-white hover:text-cyan-400 transition"
                >
                  View Project →
                </a>

              </div>

            </div>


            {/* Project 2 */}
            <div className="group rounded-3xl overflow-hidden border border-white/10 bg-[#111]">

              <div className="h-72 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-500/20 flex items-center justify-center">

                <span className="text-5xl font-black text-white/20">
                  PROJECT 02
                </span>

              </div>

              <div className="p-8">

                <p className="text-purple-400 text-sm mb-3">
                  UI / UX
                </p>

                <h3 className="text-2xl font-bold">
                  Digital Experience
                </h3>

                <p className="text-gray-500 mt-3">
                  A clean interface designed to make
                  complex information easier to understand.
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-white hover:text-cyan-400 transition"
                >
                  View Project →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-32 px-6 bg-[#0c0c0c]"
      >

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Let's make something
            <span className="text-cyan-400">
              {" "}cool.
            </span>
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-6">
            Have an idea, project, or opportunity?
            Let's talk and create something meaningful.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 transition"
          >
            Start a Conversation →
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Jetroh Salazar. All rights reserved.
          </p>

          <p className="text-gray-600 text-sm">
            Designed & built by Jetroh.
          </p>

        </div>

      </footer>

    </main>
  );
}
```
