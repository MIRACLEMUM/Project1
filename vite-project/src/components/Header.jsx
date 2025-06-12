import { FaGift } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#0c1b1e] text-white shadow-md">
      <h1 className="font-bold text-lg">Sofascore</h1>
      <div className="flex items-center gap-4">
        <FaGift className="text-green-400 text-xl" />
        <button className="bg-green-600 px-3 py-1 rounded text-sm">Sign In</button>
      </div>
    </div>
  );
}
