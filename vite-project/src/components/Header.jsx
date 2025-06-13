import { FaGift } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#0c1b1e] text-white shadow-md">
      <h1 className="font-bold text-lg">Sofascore</h1>

      <div className="flex items-center gap-4">
        {/* Gift Icon with optional notification dot */}
        <div className="relative">
          <FaGift className="text-green-400 text-xl" />
          {/* You can add a notification dot like this */}
          {/* <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </div>

        <button className="bg-green-600 px-3 py-1 rounded text-sm hover:bg-green-700 transition">
          Sign In
        </button>
      </div>
    </div>
  );
}
