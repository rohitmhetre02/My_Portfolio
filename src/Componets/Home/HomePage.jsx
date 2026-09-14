import React, { Suspense, lazy } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("../About/About"));
const Experience = lazy(() => import("../Experience/Experience"));
const TechStack = lazy(() => import("../TechStack/TechStack"));
const Process = lazy(() => import("../Process/Process"));
const WhyWorkWithMe = lazy(() => import("../WhyWorkWithMe/WhyWorkWithMe"));
const CTA = lazy(() => import("../CTA/CTA"));
const Project = lazy(() => import("../Projects/Project"));
const Contact = lazy(() => import("../Contact/Contact"));

const SectionFallback = () => (
  <div style={{ minHeight: "320px", display: "grid", placeItems: "center" }} aria-live="polite">
    <span>Loading section…</span>
  </div>
);

function HomePage() {
  return (
    <main id="main-content">
      <Navbar />
      <div id="home">
        <Suspense fallback={<SectionFallback />}>
          <Home />
        </Suspense>
      </div>
      <div id="projects">
        <Suspense fallback={<SectionFallback />}>
          <Project />
        </Suspense>
      </div>
      <div id="process">
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
      </div>
      <div id="experience">
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
      </div>
      <div id="about">
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
      </div>
      <div id="technology">
        <Suspense fallback={<SectionFallback />}>
          <TechStack />
        </Suspense>
      </div>
      <div id="why-work-with-me">
        <Suspense fallback={<SectionFallback />}>
          <WhyWorkWithMe />
        </Suspense>
      </div>
      <div id="cta">
        <Suspense fallback={<SectionFallback />}>
          <CTA />
        </Suspense>
      </div>
      <div id="contact">
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}

export default HomePage;
