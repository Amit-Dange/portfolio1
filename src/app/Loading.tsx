// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl text-green-500 animate-pulse">Initializing Transmission...</h1>
      <p className="mt-4 text-gray-400">Connecting to the Grid...</p>
      {/* Optional: Add a spinner or animation */}
      <div className="mt-6 w-16 h-16 border-4 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
}