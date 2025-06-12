import { FaHome, FaSearch, FaStar, FaUser } from 'react-icons/fa';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0c1b1e] text-white flex justify-around items-center py-3 border-t border-gray-800">
      <FaHome className="text-green-500 text-xl" />
      <FaSearch className="text-xl" />
      <FaStar className="text-xl" />
      <FaUser className="text-xl" />
    </div>
  );
}
