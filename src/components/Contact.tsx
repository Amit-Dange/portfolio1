"use client";
import { useRef, useEffect } from "react";
import { Orbitron } from "next/font/google";
import { animateDots } from "../utils/dotAnimator";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactMe() {
  const dotsRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (dotsRef.current) {
      const cleanup = animateDots(dotsRef.current, "Send Transmission", 400);
      return cleanup;
    }
  }, []);

  return (
    <section
      className={`bg-black text-white min-h-screen py-10 px-4 ${orbitron.className}`}
    >
      <h1 className="text-4xl text-center mb-10 text-green-500">
        Contact Me <span className="glitch">[Access Granted]</span>
      </h1>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side - Contact Info and Dialogue */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 hover:border-green-400 hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all duration-300">
            <h2 className="text-2xl mb-4 text-green-500">Connect with the Grid</h2>
            <p className="text-gray-300 mb-2">
              &quot;In the neon-lit abyss, I await your signal. Enter the matrix and
              reach out...&quot;
            </p>
            <p className="text-gray-400 text-sm mb-4">
              <strong>Email:</strong> amitdange123450@gmail.com
            </p>
            <p className="text-gray-400 text-sm mb-4">
              <strong>Phone:</strong> PORT-3901X2
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/Amit-Dange"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/amit-dange-458565228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-gray-300 mt-6 italic">
              &quot;Stay vigilant, runner. The corp-dogs are always watching...&quot;
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 hover:border-green-400 hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all duration-300">
            <h2 className="text-2xl mb-4 text-green-500">
              <span ref={dotsRef}>Send Transmission</span>
            </h2>
            <form
              className="space-y-4"
              // onSubmit={(e) => {
              //   e.preventDefault();

              //   const form = e.currentTarget;
              //   const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              //   const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              //   const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

              //   const secretKey = "resume";

              //   if (
              //     name.includes(secretKey) ||
              //     email.includes(secretKey) ||
              //     message.includes(secretKey)
              //   ) {
              //     const link = document.createElement("a");
              //     link.href = "/resume.pdf";
              //     link.download = "classified_transmission.pdf";
              //     document.body.appendChild(link);
              //     link.click();
              //     document.body.removeChild(link);
              //   } else {
              //     alert("Transmission sent. Await further contact...");
              //   }

              //   form.reset();
              // }}
              // onSubmit={(e) => {
              //   e.preventDefault();
              
              //   const form = e.currentTarget;
              //   const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
              //   const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
              //   const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
              
              //   const isSecretTriggered =
              //     name === "resume" || email === "resume@gmail.com" || message === "resume";
              
              //   if (isSecretTriggered) {
              //     const link = document.createElement("a");
              //     link.href = "/resume.pdf";
              //     link.download = "classified_transmission.pdf";
              //     document.body.appendChild(link);
              //     link.click();
              //     document.body.removeChild(link);
              //   } else {
              //     alert("Transmission sent. Await further contact...");
              //   }
              
              //   form.reset();
              // }}
              
              onSubmit={(e) => {
                e.preventDefault();
              
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
                const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
              
                const isSecretTriggered =
                  name === "resume" || email === "resume@gmail.com" || message === "resume";
              
                if (isSecretTriggered) {
                  window.open("/resume.pdf", "_blank");
                } else {
                  alert("Transmission sent. Await further contact...");
                }
              
                form.reset();
              }}

            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 text-sm mb-1"
                >
                  Name [Required]
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 text-white p-2 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm mb-1"
                >
                  Email [Required]
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 text-white p-2 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm mb-1"
                >
                  Message [Encrypted]
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-gray-800 text-white p-2 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-black py-2 rounded hover:bg-green-400 transition-colors duration-300"
              >
                Transmit Data
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
