import { FaCalendarAlt } from 'react-icons/fa';

export default function FilterBar() {
  return (
    <div className="bg-[#0c1b1e] px-4 py-3 text-white flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <span className="text-sm">25/02</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Odds</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:bg-green-600 relative">
              <div className="dot w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 peer-checked:translate-x-4 transition-transform" />
            </div>
          </label>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="bg-green-600 px-4 py-1 rounded-full text-sm">All</button>
        <button className="bg-gray-700 px-4 py-1 rounded-full text-sm">Favourites</button>
      </div>
    </div>
  );
}
