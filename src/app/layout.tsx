import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Amit's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar with fixed positioning */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <br />
        {/* Add padding to the top of the content to prevent overlap */}
        <div className="flex flex-col min-h-screen pt-[height-of-navbar]">
          <main className="flex-grow">
            {children}
          </main>
        </div>
          <Footer />
      </body>
    </html>
  );
}