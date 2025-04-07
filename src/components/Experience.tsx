"use client";
import { useRef, useEffect } from "react";
import { Orbitron } from "next/font/google";
import { hackerEffect } from "../utils/hackerEffect";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const experiences = [
  {
    title: "Current Role: Junior Software Engineer",
    company: "EPAM Systems",
    period: "January 2025 - Present",
    description:
      "Developing cloud-native microservices with Java, Spring Boot, AWS Serverless, React, Docker, and Kubernetes.",
  },
  {
    title: "Machine Learning Summer School Mentee",
    company: "Amazon.com",
    period: "July 2024 - August 2024",
    description:
      "Selected for Amazon's prestigious ML program, gaining hands-on experience in cutting-edge AI, machine learning, deep learning, NLP, and real-world data science applications",
  },
  {
    title: "Data Science Intern",
    company: "Celebal Technologies",
    period: "May 2024 - August 2024",
    description:
      "Worked as a Data Science Intern, building ML models and insightful dashboards to solve business problems using Python, SQL, and Power BI.",
  },
  {
    title: "SDE Intern",
    company: "ITjobxs.com",
    period: "April 2023 - March 2024",
    description:
      "Built full-stack features for a job portal using React, Next.js, Spring Boot, and MySQL while integrating secure workflows with Google reCAPTCHA",
  },
];

export default function Experience() {
  const titleRefs = useRef<HTMLSpanElement[]>([]);
  const companyRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const animatedIndices = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLSpanElement;
          const index = target.dataset.index || "0";
          const type = target.dataset.type;

          const key = `${type}-${index}`;
          if (entry.isIntersecting && !animatedIndices.has(key)) {
            animatedIndices.add(key);

            if (type === "title") {
              hackerEffect(target, experiences[parseInt(index)].title, 40);
            } else if (type === "company") {
              hackerEffect(target, experiences[parseInt(index)].company, 40);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    [...titleRefs.current, ...companyRefs.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      [...titleRefs.current, ...companyRefs.current].forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      className={`bg-black text-white min-h-screen py-10 px-4 ${orbitron.className}`}
    >
      <h1 className="text-4xl text-center mb-10 text-green-500">Experience</h1>
      <div className="container mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>

        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-5/12 p-4 bg-gray-900 rounded-lg shadow-lg border border-green-500 hover:border-green-400 hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all duration-300 ${
                index % 2 === 0 ? "mr-8" : "ml-8"
              }`}
            >
              <h3 className="text-xl mb-2 text-green-500">
                <span
                  ref={(el) => {
                    if (el) titleRefs.current[index] = el;
                  }}
                  data-type="title"
                  data-index={index}
                >
                  {experience.title}
                </span>
              </h3>
              <p className="text-gray-300 mb-1">
                <strong>
                  <span
                    ref={(el) => {
                      if (el) companyRefs.current[index] = el;
                    }}
                    data-type="company"
                    data-index={index}
                  >
                    {experience.company}
                  </span>
                </strong>
              </p>
              <p className="text-gray-400 text-sm">{experience.period}</p>
              <p className="text-gray-300 mt-2">{experience.description}</p>
            </div>
            <div
              className="w-4 h-4 rounded-full bg-green-500 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${index * 25}%` }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
