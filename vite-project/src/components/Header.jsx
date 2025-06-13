import { FaGift } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-[#0c1b1e] text-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-screen-lg mx-auto">
        <h1 className="font-bold text-lg sm:text-xl">Sofascore</h1>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Gift Icon with optional notification dot */}
          <div className="relative">
            <FaGift className="text-green-400 text-xl sm:text-2xl" />
            {/* Optional red dot */}
            {/* <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span> */}
          </div>

          <button className="bg-green-600 px-3 sm:px-4 py-1 sm:py-1.5 rounded text-sm sm:text-base hover:bg-green-700 transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
