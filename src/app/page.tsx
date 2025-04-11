"use client";

import About from "@/components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "@/components/Experience";
import ContactMe from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
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
      <section id="skills">
        <Skills />
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