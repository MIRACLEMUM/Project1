import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FilterBar({ isDarkMode, setIsDarkMode }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  });

  return (
    <div
      className={`px-4 py-3 flex flex-col gap-3 transition-colors duration-300 ${
        isDarkMode ? "bg-[#0c1b1e] text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Top row with calendar and theme toggle */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 relative">
          <FaCalendarAlt
            className="cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          />
          <span className="text-sm">{formattedDate}</span>

          {showCalendar && (
            <div className="absolute top-8 z-10">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setShowCalendar(false);
                }}
                inline
              />
            </div>
          )}
        </div>

        {/* Theme toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Dark Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <div className="w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-green-600 relative">
              <div
                className={`dot w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                  isDarkMode ? "translate-x-4" : "left-0.5"
                }`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-1 rounded-full text-sm ${
            activeFilter === "all"
              ? "bg-green-600 text-white"
              : isDarkMode
              ? "bg-gray-700 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("favourites")}
          className={`px-4 py-1 rounded-full text-sm ${
            activeFilter === "favourites"
              ? "bg-green-600 text-white"
              : isDarkMode
              ? "bg-gray-700 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Favourites
        </button>
      </div>
    </div>
  );
}
