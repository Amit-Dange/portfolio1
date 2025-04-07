"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [mainColor, setMainColor] = useState("#0ff");
  const [altColor, setAltColor] = useState("#f0f");

  useEffect(() => {
    const colors = ['#0ff', '#f0f', '#ff0', '#0f0', '#f00', '#00f'];
    const interval = setInterval(() => {
      const randomMain = colors[Math.floor(Math.random() * colors.length)];
      const randomAlt = colors[Math.floor(Math.random() * colors.length)];
      setMainColor(randomMain);
      setAltColor(randomAlt);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={`bg-black text-white p-4 ${orbitron.className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="#hero"
          className="relative glitch-text text-xl font-bold"
          style={{
            color: mainColor,
            textShadow: `
              0 0 5px ${mainColor},
              0 0 10px ${mainColor},
              0 0 20px ${mainColor}
            `,
            ['--alt-color' as any]: altColor,
          }}
        >
          <span data-text="Amit Dange">Amit Dange</span>
        </Link>

        {/* Hide this div on mobile (<640px), show on sm+ */}
        <div className="hidden sm:flex space-x-4">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          color: white;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #00ff00;
          transition: width 0.3s ease-in-out;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #00ff00;
        }

        /* Glitch Styles */
        .glitch-text {
          animation: flicker 2s infinite alternate, hueShift 10s infinite linear;
        }

        .glitch-text span {
          position: relative;
        }

        .glitch-text span::before,
        .glitch-text span::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          overflow: hidden;
          color: var(--alt-color, #f0f);
          z-index: -1;
        }

        .glitch-text span::before {
          text-shadow: 2px 0 var(--alt-color, #f0f);
          animation: glitchTop 1.5s infinite linear alternate-reverse;
        }

        .glitch-text span::after {
          text-shadow: -2px 0 var(--alt-color, #f0f);
          animation: glitchBottom 1.2s infinite linear alternate-reverse;
        }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 22%, 24%, 55% {
            opacity: 0.2;
          }
        }

        @keyframes hueShift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes glitchTop {
          0% { clip-path: inset(0 0 90% 0); transform: translate(0, 0); }
          20% { clip-path: inset(10% 0 85% 0); transform: translate(-2px, -2px); }
          40% { clip-path: inset(20% 0 70% 0); transform: translate(2px, -1px); }
          60% { clip-path: inset(0 0 80% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(5% 0 90% 0); transform: translate(0, 0); }
        }

        @keyframes glitchBottom {
          0% { clip-path: inset(90% 0 0 0); transform: translate(0, 0); }
          20% { clip-path: inset(85% 0 10% 0); transform: translate(1px, 2px); }
          40% { clip-path: inset(70% 0 20% 0); transform: translate(-1px, 1px); }
          60% { clip-path: inset(80% 0 0 0); transform: translate(2px, -2px); }
          100% { clip-path: inset(90% 0 5% 0); transform: translate(0, 0); }
        }
      `}</style>
    </nav>
  );
}
