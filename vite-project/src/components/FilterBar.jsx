import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function FilterBar({ isDarkMode, setIsDarkMode }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("live");

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  });

  const handlePrevDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const tabClass = (tab) =>
    `px-4 py-1 rounded-full text-sm transition duration-300 ${
      activeTab === tab
        ? "bg-green-600 text-white"
        : isDarkMode
        ? "bg-gray-700 text-white"
        : "bg-gray-300 text-black"
    }`;

  return (
    <div
      className={`px-4 py-4 flex flex-col gap-4 transition-colors duration-300 ${
        isDarkMode ? "bg-[#0c1b1e] text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Top Row: Date + Theme Toggle */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MdArrowBackIos
            className="cursor-pointer text-sm"
            onClick={handlePrevDate}
          />
          <span className="text-sm">{formattedDate}</span>
          <MdArrowForwardIos
            className="cursor-pointer text-sm"
            onClick={handleNextDate}
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Odds</span>
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

      {/* Filter Buttons */}
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

      {/* Live | Finished | Upcoming Tabs */}
      <div className="flex gap-3 justify-center">
        <button className={tabClass("live")} onClick={() => setActiveTab("live")}>
          Live
        </button>
        <button className={tabClass("finished")} onClick={() => setActiveTab("finished")}>
          Finished
        </button>
        <button className={tabClass("upcoming")} onClick={() => setActiveTab("upcoming")}>
          Upcoming
        </button>
      </div>

      {/* Display Tab Message */}
      <div className="text-center text-sm mt-2">
        {activeTab === "live" && <p>Showing <strong>Live</strong> matches...</p>}
        {activeTab === "finished" && <p>Showing <strong>Finished</strong> matches...</p>}
        {activeTab === "upcoming" && <p>Showing <strong>Upcoming</strong> matches...</p>}
      </div>
    </div>
  );
}
