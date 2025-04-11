"use client";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Skills() {
  const skills = [
    { name: "Java", percentage: 90 },
    { name: "Spring Boot", percentage: 85 },
    { name: "TensorFlow", percentage: 88 },
    { name: "AWS", percentage: 80 },
    { name: "Python", percentage: 95 },
    { name: "Next.js", percentage: 87 },
  ];

  return (
    <section className={`bg-black text-white min-h-screen ${orbitron.className} py-12`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center text-[#ff9900] mb-10 font-bold">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const circumference = 188.5; // 2 * π * 30
            const offset = circumference - (circumference * skill.percentage) / 100;

            return (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-[#ff9900] flex items-center justify-between"
                style={{ boxShadow: "0 0 10px rgba(255, 153, 0, 0.5)" }}
              >
                <div className="w-2/3">
                  <div className="text-[#ff9900] font-semibold">{skill.name}</div>
                  <div className="w-full bg-gray-700 h-4 rounded-full mt-2">
                    <div
                      className="bg-[#ff9900] h-4 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-1/3 text-center">
                  <svg className="w-16 h-16 mx-auto">
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="none"
                      stroke="#ff9900"
                      strokeWidth="4"
                      className="transform origin-center opacity-50"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="none"
                      stroke="#ff9900"
                      strokeWidth="4"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                    />
                    <text
                      x="50%"
                      y="50%"
                      dy=".3em"
                      textAnchor="middle"
                      fill="#ff9900"
                      fontSize="12"
                    >
                      {skill.percentage}%
                    </text>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}