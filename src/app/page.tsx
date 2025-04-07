"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "@/components/Experience";
import ContactMe from "@/components/Contact";
import Loading from "./Loading";

// Alternative 2: Class Component Approach
import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    // Simulating content load
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '50vh' 
        }}>
          Loading...
        </div>
      );
    }

    return (
      <>
        <section id="hero">
          <Hero />
        </section>
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
      </>
    );
  }
}

export default App;