export default function Footer() {
  return (
    <footer className="bg-black text-green-500 border-t border-green-500 shadow-[0_-2px_15px_rgba(0,255,0,0.3)] mt-10 px-6 py-4 font-mono relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full animate-pulse opacity-10 pointer-events-none bg-[radial-gradient(circle,_rgba(0,255,0,0.2)_1px,_transparent_1px)] bg-[size:10px_10px]" />
      
      <p className="z-10 relative text-center text-sm md:text-base tracking-wider glitch">
        © 2025 <span className="text-green-400 hover:text-green-300 transition-colors">BlackSchyte</span>. Transmission Complete.
      </p>
    </footer>
  );
}
