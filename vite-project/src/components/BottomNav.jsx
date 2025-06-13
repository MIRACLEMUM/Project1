import { useState } from 'react';
import { FaHome, FaSearch, FaStar, FaUser } from 'react-icons/fa';

export default function BottomNav({ isDarkMode }) {
  const [active, setActive] = useState('home');

  const iconClass = (name) =>
    `text-2xl sm:text-xl cursor-pointer transition-colors duration-300 ${
      active === name
        ? 'text-green-500'
        : isDarkMode
        ? 'text-white'
        : 'text-gray-700'
    }`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center py-3 border-t transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#0c1b1e] border-gray-800'
          : 'bg-white border-gray-300'
      }`}
    >
      <FaHome className={iconClass('home')} onClick={() => setActive('home')} />
      <FaSearch className={iconClass('search')} onClick={() => setActive('search')} />
      <FaStar className={iconClass('star')} onClick={() => setActive('star')} />
      <FaUser className={iconClass('user')} onClick={() => setActive('user')} />
    </div>
  );
}
