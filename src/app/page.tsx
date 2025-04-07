"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "@/components/Experience";
import ContactMe from "@/components/Contact";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <section id="hero">
        <Hero />
      </section>
      {/* <section id="skills">
        <Skills />
      </section> */}
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}