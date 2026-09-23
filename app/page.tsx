<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Jetroh Salazar — Web Developer</title>

<style>

/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f5f5f0;
    color: #111;
    line-height: 1.5;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}


/* =========================
   COLORS
========================= */

:root {
    --black: #111;
    --white: #fff;
    --cream: #f5f5f0;
    --gray: #777;
    --light: #e7e7e1;
    --green: #c8ff45;
}


/* =========================
   NAVIGATION
========================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;

    padding: 20px 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: rgba(245,245,240,.9);
    backdrop-filter: blur(15px);

    border-bottom: 1px solid rgba(0,0,0,.08);
}

.logo {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -1px;
}

.logo span {
    color: #777;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
    font-size: 14px;
}

.nav-links a {
    transition: .2s;
}

.nav-links a:hover {
    opacity: .45;
}

.menu-button {
    display: none;

    border: none;
    background: transparent;

    font-size: 26px;
    cursor: pointer;
}


/* =========================
   GENERAL
========================= */

.container {
    width: min(1200px, 90%);
    margin: auto;
}

section {
    padding: 120px 0;
}

.eyebrow {
    margin-bottom: 20px;

    font-size: 12px;
    font-weight: bold;

    text-transform: uppercase;
    letter-spacing: 2px;

    color: #777;
}

.section-title {
    max-width: 900px;

    font-size: clamp(42px, 7vw, 90px);

    line-height: .92;

    letter-spacing: -5px;
}

.section-description {
    max-width: 620px;

    margin-top: 30px;

    color: #666;

    font-size: 18px;
}


/* =========================
   BUTTONS
========================= */

.buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    margin-top: 35px;
}

.button {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    padding: 15px 25px;

    border: 1px solid #111;
    border-radius: 50px;

    font-weight: bold;

    transition: .25s;
}

.button.dark {
    background: #111;
    color: #fff;
}

.button.dark:hover {
    background: var(--green);
    color: #111;

    transform: translateY(-3px);
}

.button.outline {
    background: transparent;
}

.button.outline:hover {
    background: #111;
    color: #fff;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    position: relative;
    overflow: hidden;

    padding-top: 130px;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero h1 {
    max-width: 1100px;

    font-size: clamp(60px, 11vw, 150px);

    line-height: .82;

    letter-spacing: -9px;
}

.hero h1 .outline {
    color: transparent;

    -webkit-text-stroke: 2px #111;
}

.hero-description {
    max-width: 560px;

    margin-top: 45px;

    color: #555;

    font-size: 19px;
}

.hero-circle {
    position: absolute;

    width: 520px;
    height: 520px;

    right: -180px;
    bottom: -150px;

    background: var(--green);

    border-radius: 50%;
}

.hero-grid {
    position: absolute;
    inset: 0;

    opacity: .035;

    background-image:
        linear-gradient(#000 1px, transparent 1px),
        linear-gradient(90deg, #000 1px, transparent 1px);

    background-size: 60px 60px;
}


/* =========================
   MARQUEE
========================= */

.marquee {
    overflow: hidden;

    background: #111;

    color: #fff;

    white-space: nowrap;

    padding: 18px 0;
}

.marquee-track {
    display: inline-block;

    animation: marquee 20s linear infinite;
}

.marquee span {
    margin: 0 30px;

    font-size: 14px;
    font-weight: bold;

    text-transform: uppercase;
}

.marquee span::after {
    content: "✦";

    margin-left: 60px;

    color: var(--green);
}

@keyframes marquee {

    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }

}


/* =========================
   SERVICES
========================= */

.services {
    background: #111;
    color: #fff;
}

.services .eyebrow {
    color: #aaa;
}

.services .section-description {
    color: #aaa;
}

.services-grid {
    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 1px;

    margin-top: 70px;

    background: #444;

    border: 1px solid #444;
}

.service-card {
    min-height: 330px;

    padding: 40px;

    background: #111;

    transition: .3s;
}

.service-card:hover {
    background: var(--green);
    color: #111;
}

.service-number {
    color: #888;

    font-size: 13px;
}

.service-card h3 {
    margin-top: 80px;
    margin-bottom: 15px;

    font-size: 30px;

    letter-spacing: -1px;
}

.service-card p {
    color: #aaa;

    font-size: 15px;
}

.service-card:hover p {
    color: #333;
}


/* =========================
   ABOUT ME
========================= */

.about {
    background: #e8e8e2;
}

.about-layout {
    display: grid;

    grid-template-columns: 1.1fr .9fr;

    gap: 100px;

    align-items: center;
}

.about-text p {
    max-width: 650px;

    margin-top: 25px;

    color: #555;

    font-size: 19px;
}

.about-text p + p {
    margin-top: 18px;
}

.about-card {
    position: relative;

    min-height: 450px;

    padding: 45px;

    display: flex;
    align-items: flex-end;

    overflow: hidden;

    background: #111;

    color: #fff;

    border-radius: 20px;
}

.about-card::before {
    content: "";

    position: absolute;

    width: 280px;
    height: 280px;

    top: -80px;
    right: -70px;

    background: var(--green);

    border-radius: 50%;
}

.about-card-content {
    position: relative;
    z-index: 2;
}

.about-card h3 {
    font-size: 50px;

    line-height: .9;

    letter-spacing: -3px;
}

.about-card p {
    margin-top: 20px;

    color: #aaa;
}


/* =========================
   SKILLS
========================= */

.skills {
    margin-top: 60px;

    display: flex;

    flex-wrap: wrap;

    gap: 10px;
}

.skill {
    padding: 10px 16px;

    border: 1px solid #111;

    border-radius: 50px;

    font-size: 13px;
}


/* =========================
   PROJECTS
========================= */

.projects-grid {
    display: grid;

    grid-template-columns: repeat(2,1fr);

    gap: 25px;

    margin-top: 70px;
}

.project {
    overflow: hidden;

    background: #fff;

    border: 1px solid #111;

    border-radius: 18px;

    transition: .3s;
}

.project:hover {
    transform: translateY(-7px);
}

.project-image {
    height: 350px;

    position: relative;

    overflow: hidden;
}

.project-image.one {
    background: linear-gradient(135deg,#202020,#555);
}

.project-image.two {
    background: linear-gradient(135deg,#c8ff45,#8ac000);
}

.project-image.three {
    background: linear-gradient(135deg,#e7e1d4,#aaa397);
}

.project-image.four {
    background: linear-gradient(135deg,#4c24ff,#d09cff);
}

.project-image::after {
    content: "";

    position: absolute;

    width: 65%;
    height: 70%;

    top: 15%;
    left: 17%;

    background: rgba(255,255,255,.12);

    border: 1px solid rgba(255,255,255,.35);

    border-radius: 15px;

    transform: rotate(-5deg);
}

.project-info {
    padding: 25px;
}

.project-info h3 {
    font-size: 25px;
}

.project-info p {
    margin-top: 7px;

    color: #777;
}

.tags {
    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin-top: 18px;
}

.tag {
    padding: 6px 11px;

    border: 1px solid #ddd;

    border-radius: 30px;

    font-size: 10px;

    text-transform: uppercase;
}


/* =========================
   PROCESS
========================= */

.process {
    background: #e8e8e2;
}

.process-list {
    margin-top: 70px;

    border-top: 1px solid #111;
}

.process-item {
    display: grid;

    grid-template-columns: 70px 1fr 1fr;

    gap: 30px;

    padding: 35px 0;

    border-bottom: 1px solid #111;
}

.process-number {
    color: #777;
}

.process-item h3 {
    font-size: 30px;

    letter-spacing: -1px;
}

.process-item p {
    color: #666;
}


/* =========================
   PRICING
========================= */

.pricing-grid {
    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 20px;

    margin-top: 70px;
}

.price-card {
    position: relative;

    padding: 35px;

    background: #fff;

    border: 1px solid #111;

    border-radius: 18px;
}

.price-card.featured {
    background: #111;
    color: #fff;

    transform: translateY(-15px);
}

.badge {
    position: absolute;

    top: 20px;
    right: 20px;

    padding: 7px 12px;

    background: var(--green);

    color: #111;

    border-radius: 30px;

    font-size: 10px;
    font-weight: bold;

    text-transform: uppercase;
}

.price-card h3 {
    font-size: 25px;
}

.price {
    margin: 30px 0;

    font-size: 45px;
    font-weight: 900;

    letter-spacing: -3px;
}

.price small {
    color: #777;

    font-size: 13px;

    letter-spacing: 0;
}

.features {
    list-style: none;

    margin-bottom: 30px;
}

.features li {
    padding: 10px 0;

    border-top: 1px solid #ddd;

    font-size: 14px;
}

.price-card.featured .features li {
    border-color: #444;
}

.features li::before {
    content: "✓";

    margin-right: 10px;

    color: #76a500;

    font-weight: bold;
}


/* =========================
   CONTACT
========================= */

.contact {
    min-height: 75vh;

    display: flex;
    align-items: center;
}

.contact h2 {
    font-size: clamp(55px,9vw,120px);

    line-height: .85;

    letter-spacing: -7px;
}

.contact h2 span {
    color: #777;
}

.email {
    display: inline-block;

    margin-top: 40px;

    padding-bottom: 5px;

    border-bottom: 2px solid #111;

    font-size: 24px;
}


/* =========================
   FOOTER
========================= */

footer {
    padding: 35px 5%;

    background: #111;

    color: #fff;
}

.footer-inner {
    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 20px;
}

.footer-links {
    display: flex;

    gap: 20px;

    color: #aaa;

    font-size: 13px;
}

.footer-links a:hover {
    color: #fff;
}


/* =========================
   ANIMATIONS
========================= */

.reveal {
    opacity: 0;

    transform: translateY(35px);

    transition:
        opacity .8s ease,
        transform .8s ease;
}

.reveal.visible {
    opacity: 1;

    transform: translateY(0);
}


/* =========================
   MOBILE
========================= */

@media(max-width:800px) {

    .navbar {
        padding: 15px 5%;
    }

    .menu-button {
        display: block;
    }

    .nav-links {
        display: none;

        position: absolute;

        top: 65px;

        left: 5%;
        right: 5%;

        padding: 20px;

        flex-direction: column;

        gap: 18px;

        background: #fff;

        border: 1px solid #111;

        border-radius: 15px;
    }

    .nav-links.active {
        display: flex;
    }

    section {
        padding: 85px 0;
    }

    .hero {
        min-height: 90vh;
    }

    .hero h1 {
        letter-spacing: -4px;
    }

    .hero-circle {
        width: 280px;
        height: 280px;

        right: -120px;
        bottom: -30px;
    }

    .services-grid,
    .projects-grid,
    .pricing-grid {
        grid-template-columns: 1fr;
    }

    .service-card {
        min-height: 270px;
    }

    .project-image {
        height: 280px;
    }

    .about-layout {
        grid-template-columns: 1fr;

        gap: 50px;
    }

    .about-card {
        min-height: 350px;
    }

    .process-item {
        grid-template-columns: 40px 1fr;
    }

    .process-item p {
        grid-column: 2;
    }

    .price-card.featured {
        transform: none;
    }

    .contact h2 {
        letter-spacing: -4px;
    }

    .footer-inner {
        flex-direction: column;

        align-items: flex-start;
    }
}

</style>
</head>


<body>


<!-- =========================
     NAVIGATION
========================= -->

<nav class="navbar">

    <a href="#home" class="logo">
        JETROH<span>.DEV</span>
    </a>

    <button class="menu-button" onclick="toggleMenu()">
        ☰
    </button>

    <ul class="nav-links" id="navLinks">

        <li>
            <a href="#home">Home</a>
        </li>

        <li>
            <a href="#about">About Me</a>
        </li>

        <li>
            <a href="#services">Services</a>
        </li>

        <li>
            <a href="#projects">Projects</a>
        </li>

        <li>
            <a href="#pricing">Pricing</a>
        </li>

        <li>
            <a href="#contact">Contact</a>
        </li>

    </ul>

</nav>


<!-- =========================
     HERO
========================= -->

<section class="hero" id="home">

    <div class="hero-grid"></div>

    <div class="hero-circle"></div>

    <div class="container hero-content reveal">

        <div class="eyebrow">
            Hello, I'm Jetroh Salazar
        </div>

        <h1>

            I BUILD<br>

            <span class="outline">
                DIGITAL
            </span><br>

            EXPERIENCES.

        </h1>

        <p class="hero-description">

            I create modern, responsive and user-friendly websites
            designed to help businesses, creators and individuals
            build a strong presence online.

        </p>

        <div class="buttons">

            <a href="#contact" class="button dark">
                Start a project →
            </a>

            <a href="#projects" class="button outline">
                View my work
            </a>

        </div>

    </div>

</section>


<!-- =========================
     MARQUEE
========================= -->

<div class="marquee">

    <div class="marquee-track">

        <span>Web Development</span>
        <span>Web Design</span>
        <span>Responsive Websites</span>
        <span>Landing Pages</span>
        <span>UI Design</span>
        <span>Web Development</span>
        <span>Web Design</span>
        <span>Responsive Websites</span>
        <span>Landing Pages</span>
        <span>UI Design</span>

    </div>

</div>


<!-- =========================
     ABOUT ME
========================= -->

<section class="about" id="about">

    <div class="container about-layout">


        <div class="about-text reveal">

            <div class="eyebrow">
                About Me
            </div>

            <h2 class="section-title">
                Nice to meet you. I'm Jetroh.
            </h2>

            <p>

                I'm Jetroh Salazar, a web developer and digital
                creator who enjoys turning ideas into clean,
                functional and visually engaging websites.

            </p>

            <p>

                I believe a good website should do more than
                simply look good. It should be easy to navigate,
                work beautifully on different devices and give
                visitors a reason to stay.

            </p>

            <p>

                Whether you need a personal portfolio, a business
                website, a landing page or a custom digital
                experience, I'm interested in building something
                that represents you properly.

            </p>


            <div class="skills">

                <span class="skill">HTML</span>

                <span class="skill">CSS</span>

                <span class="skill">JavaScript</span>

                <span class="skill">Web Design</span>

                <span class="skill">Responsive Design</span>

                <span class="skill">UI/UX</span>

            </div>

        </div>


        <div class="about-card reveal">

            <div class="about-card-content">

                <h3>
                    DESIGN<br>
                    ×<br>
                    CODE
                </h3>

                <p>
                    Building useful digital experiences
                    one project at a time.
                </p>

            </div>

        </div>

    </div>

</section>


<!-- =========================
     SERVICES
========================= -->

<section class="services" id="services">

    <div class="container">


        <div class="reveal">

            <div class="eyebrow">
                What I Do
            </div>

            <h2 class="section-title">
                Websites that work as hard as you do.
            </h2>

            <p class="section-description">

                From simple landing pages to complete websites,
                I focus on creating digital experiences that
                are fast, responsive and easy to use.

            </p>

        </div>


        <div class="services-grid">


            <div class="service-card reveal">

                <div class="service-number">
                    01
                </div>

                <h3>
                    Web Design
                </h3>

                <p>

                    Clean and modern interfaces designed around
                    your brand, audience and goals.

                </p>

            </div>


            <div class="service-card reveal">

                <div class="service-number">
                    02
                </div>

                <h3>
                    Web Development
                </h3>

                <p>

                    Responsive websites built with clean,
                    maintainable and efficient code.

                </p>

            </div>


            <div class="service-card reveal">

                <div class="service-number">
                    03
                </div>

                <h3>
                    Website Redesign
                </h3>

                <p>

                    Give an outdated website a fresh,
                    modern and professional appearance.

                </p>

            </div>


        </div>

    </div>

</section>


<!-- =========================
     PROJECTS
========================= -->

<section id="projects">

    <div class="container">


        <div class="reveal">

            <div class="eyebrow">
                Selected Work
            </div>

            <h2 class="section-title">
                A few things I've built.
            </h2>

        </div>


        <div class="projects-grid">


            <article class="project reveal">

                <div class="project-image one"></div>

                <div class="project-info">

                    <h3>
                        Creative Studio
                    </h3>

                    <p>
                        A modern website for a creative studio
                        focused on strong visual presentation.
                    </p>

                    <div class="tags">

                        <span class="tag">
                            Website
                        </span>

                        <span class="tag">
                            Design
                        </span>

                    </div>

                </div>

            </article>


            <article class="project reveal">

                <div class="project-image two"></div>

                <div class="project-info">

                    <h3>
                        Green Market
                    </h3>

                    <p>
                        A clean online experience for a
                        modern lifestyle brand.
                    </p>

                    <div class="tags">

                        <span class="tag">
                            E-commerce
                        </span>

                        <span class="tag">
                            UI
                        </span>

                    </div>

                </div>

            </article>


            <article class="project reveal">

                <div class="project-image three"></div>

                <div class="project-info">

                    <h3>
                        Maison Studio
                    </h3>

                    <p>
                        Minimal portfolio website for an
                        architecture and design studio.
                    </p>

                    <div class="tags">

                        <span class="tag">
                            Portfolio
                        </span>

                        <span class="tag">
                            Branding
                        </span>

                    </div>

                </div>

            </article>


            <article class="project reveal">

                <div class="project-image four"></div>

                <div class="project-info">

                    <h3>
                        Business Dashboard
                    </h3>

                    <p>
                        A custom interface for monitoring
                        business information and analytics.
                    </p>

                    <div class="tags">

                        <span class="tag">
                            Web App
                        </span>

                        <span class="tag">
                            Dashboard
                        </span>

                    </div>

                </div>

            </article>


        </div>

    </div>

</section>


<!-- =========================
     PROCESS
========================= -->

<section class="process">

    <div class="container">


        <div class="reveal">

            <div class="eyebrow">
                My Process
            </div>

            <h2 class="section-title">
                From idea to launch.
            </h2>

        </div>


        <div class="process-list">


            <div class="process-item reveal">

                <div class="process-number">
                    01
                </div>

                <h3>
                    Discovery
                </h3>

                <p>
                    We talk about your idea, goals, audience
                    and what you want the website to accomplish.
                </p>

            </div>


            <div class="process-item reveal">

                <div class="process-number">
                    02
                </div>

                <h3>
                    Design
                </h3>

                <p>
                    I develop the visual direction and structure
                    of the website.
                </p>

            </div>


            <div class="process-item reveal">

                <div class="process-number">
                    03
                </div>

                <h3>
                    Development
                </h3>

                <p>
                    The design becomes a working,
                    responsive website.
                </p>

            </div>


            <div class="process-item reveal">

                <div class="process-number">
                    04
                </div>

                <h3>
                    Launch
                </h3>

                <p>
                    After testing and final adjustments,
                    the website is ready to go live.
                </p>

            </div>


        </div>

    </div>

</section>


<!-- =========================
     PRICING
========================= -->

<section id="pricing">

    <div class="container">


        <div class="reveal">

            <div class="eyebrow">
                Pricing
            </div>

            <h2 class="section-title">
                Simple starting prices.
            </h2>

            <p class="section-description">
                Every project is different, so these prices are
                starting points and can be customized to your needs.
            </p>

        </div>


        <div class="pricing-grid">


            <div class="price-card reveal">

                <h3>
                    Starter
                </h3>

                <div class="price">
                    $250
                    <small>from</small>
                </div>

                <ul class="features">

                    <li>
                        1–3 page website
                    </li>

                    <li>
                        Responsive design
                    </li>

                    <li>
                        Contact section
                    </li>

                    <li>
                        Basic animations
                    </li>

                    <li>
                        SEO basics
                    </li>

                </ul>

                <a href="#contact" class="button outline">
                    Get Started
                </a>

            </div>


            <div class="price-card featured reveal">

                <div class="badge">
                    Popular
                </div>

                <h3>
                    Business
                </h3>

                <div class="price">
                    $600
                    <small>from</small>
                </div>

                <ul class="features">

                    <li>
                        Up to 8 pages
                    </li>

                    <li>
                        Custom design
                    </li>

                    <li>
                        Responsive development
                    </li>

                    <li>
                        Advanced animations
                    </li>

                    <li>
                        SEO setup
                    </li>

                    <li>
                        Contact forms
                    </li>

                </ul>

                <a href="#contact"
                   class="button dark"
                   style="background:#fff;color:#111;">

                    Start a Project

                </a>

            </div>


            <div class="price-card reveal">

                <h3>
                    Custom
                </h3>

                <div class="price">
                    Let's Talk
                </div>

                <ul class="features">

                    <li>
                        Custom web applications
                    </li>

                    <li>
                        Advanced functionality
                    </li>

                    <li>
                        Dashboards
                    </li>

                    <li>
                        API integrations
                    </li>

                    <li>
                        Custom requirements
                    </li>

                </ul>

                <a href="#contact" class="button outline">
                    Contact Me
                </a>

            </div>


        </div>

    </div>

</section>


<!-- =========================
     CONTACT
========================= -->

<section class="contact" id="contact">

    <div class="container reveal">

        <div class="eyebrow">
            Have a project?
        </div>

        <h2>
            Let's make<br>
            <span>something great.</span>
        </h2>

        <!--
            CHANGE THIS EMAIL
            TO YOUR REAL EMAIL ADDRESS
        -->

        <a
            href="mailto:hello@example.com"
            class="email">

            hello@example.com

        </a>

        <div class="buttons">

            <a
                href="mailto:hello@example.com"
                class="button dark">

                Send Me an Email →

            </a>

        </div>

    </div>

</section>


<!-- =========================
     FOOTER
========================= -->

<footer>

    <div class="footer-inner">

        <div>
            © 2026 Jetroh Salazar
        </div>

        <div class="footer-links">

            <a href="#about">
                About
            </a>

            <a href="#projects">
                Projects
            </a>

            <a href="#contact">
                Contact
            </a>

        </div>

    </div>

</footer>


<!-- =========================
     JAVASCRIPT
========================= -->

<script>


/* MOBILE MENU */

function toggleMenu() {

    const menu =
        document.getElementById("navLinks");

    menu.classList.toggle("active");

}


/* CLOSE MOBILE MENU */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navLinks")
                .classList.remove("active");

        });

    });


/* SCROLL ANIMATIONS */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                    observer
                        .unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


</script>


</body>
</html>
