"use client";

import { useEffect, useRef, useMemo } from "react";
import { hackerEffect, revertText } from "../utils/hackerEffect";
import { Orbitron } from "next/font/google";
import Chart from "chart.js/auto";
import Image from "next/image";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const infoRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const nickname = "BlackSchyte";

  const infoItems = useMemo(() => [
    { label: "Date of Birth", value: "February 11, 2003" },
    { label: "Height", value: "170 cm" },
    { label: "Weight", value: "75 kg" },
    { label: "Blood Type", value: "A+ve" },
    { label: "Likes", value: "Coding, Innovation" },
    { label: "Dislikes", value: "Bugs, Inefficiency" },
  ], []);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "radar",
          data: {
            labels: ["Frontend", "Backend", "Leadership", "Competetive Programming", "Artificial Intelligence", "Web 3"],
            datasets: [
              {
                label: "Skill Stats",
                data: [8, 8, 8.5, 9.5, 8, 7],
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                borderColor: "#00ff00",
                pointBackgroundColor: "#00ff00",
              },
            ],
          },
          options: {
            responsive: false,
            scales: {
              r: {
                angleLines: { display: true, color: "rgba(0, 255, 0, 0.3)" },
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: { display: false },
                grid: { color: "rgba(0, 255, 0, 0.1)" },
              },
            },
            plugins: {
              legend: { labels: { color: "#00ff00" } },
            },
          },
        });
      }
    }

    const currentRefs = [...infoRefs.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          const span = currentRefs[i];
          if (span) {
            if (entry.isIntersecting) {
              hackerEffect(span, i === 0 ? nickname : infoItems[i - 1].value);
            } else {
              revertText(span, i === 0 ? nickname : infoItems[i - 1].value);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [infoItems, nickname]);

  return (
    <section className={`bg-black text-white min-h-screen ${orbitron.className}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center py-10 px-4">
        {/* Left Box for Photo */}
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
            <Image
              src="/prof.jpg"
              alt="Amit Dange"
              width={400}
              height={400}
              className="w-full rounded-lg border-2 border-green-500"
            />
            <p className="text-center mt-4 text-green-500">
              <span ref={(el) => { infoRefs.current[0] = el; }}>{nickname}</span>
            </p>
          </div>
        </div>

        {/* Right Card for About Info */}
        <div className="md:w-2/3 w-full md:pl-10">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
            <h2 className="text-2xl mb-6 text-center text-green-500">About Me</h2>
            <ul className="space-y-2">
              {infoItems.map((item, index) => (
                <li key={index}>
                  <strong className="text-green-500">{item.label}:</strong>{" "}
                  <span ref={(el) => { infoRefs.current[index + 1] = el; }}>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <canvas ref={canvasRef} width="300" height="300" className="mx-auto"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
