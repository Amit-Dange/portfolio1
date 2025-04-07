"use client";
import { Orbitron } from "next/font/google";
import { useIsMobile } from "../hooks/useIsMobile"; // Adjust the path as needed

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const projects = [
  {
    title: "DeepAuthX : Deepfake Detector",
    description: "CNN-powered anomaly detection web platform leveraging deep learning for time-series data analysis.",
    image: "/path-to-project1.jpg",
  },
  {
    title: "Algorithmic Arena : Code Execution Engine",
    description: "Full-stack competitive programming engine using Next.js, Spring Boot, Firebase, and Judge0 API integration..",
    image: "/path-to-project2.jpg",
  },
  {
    title: "Movix : Online Video Streaming Platform",
    description: "Web-based video streaming platform with Java backend, JSP-rendered frontend, Servlet controllers, and MySQL database architecture.",
    image: "/path-to-project3.jpg",
  },
  {
    title: "RecipAI : AI Reciepe Generator",
    description: "AI-powered recipe generation platform utilizing Spring AI, AWS infrastructure, and React.js frontend for seamless user experience",
    image: "/path-to-project4.jpg",
  },
  {
    title: "AlgoTrader: A High-Frequency Trading Simulation",
    description: " A high-frequency trading simulation platform with integrated risk analysis, built using Java, C++, Spring Boot, Kafka, PostgreSQL, TensorFlow, and React.js..",
    image: "/path-to-project5.jpg",
  },
  {
    title: "WebGenie.AI",
    description: "An AI Agent that builds complete websites from natural language prompts — built with Next.js, integrated with LLMs",
    image: "/path-to-project6.jpg",
  },
  {
    title: "CabKaro : a Cab Booking Service.",
    description: " A seamless cab booking service built with Spring Boot and React.js for efficient ride management.",
    image: "/path-to-project7.jpg",
  },
  {
    title: "Bankin : Banking Application",
    description: "A full-stack banking application implementing secure CRUD operations and transaction management using Spring Boot, React.js, MySQL, and JPA",
    image: "/path-to-project8.jpg",
  },
  {
    title: "Doze Cafe",
    description: " A simple and elegant static cafe website built with HTML, CSS, and JavaScript for showcasing menu, ambiance, and contact details.",
    image: "/path-to-project9.jpg",
  },
];

export default function Projects() {
  const isMobile = useIsMobile();

  const visibleProjects = isMobile ? projects.slice(0, 5) : projects;

  return (
    <section
      className={`bg-black text-white min-h-screen py-10 px-4 ${orbitron.className}`}
    >
      <h1 className="text-4xl text-center mb-10 text-green-500">Projects</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 hover:border-green-400 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 border-2 border-green-500"
            />
            <h3 className="text-xl mb-2 text-green-500">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="mt-4">
              <a
                href="#"
                className="text-green-500 hover:text-green-400 underline transition-colors duration-300"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
