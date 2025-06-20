import { useState } from "react";
import Header from "./components/Header";
import SportTabs from "./components/SportTabs";
import FilterBar from "./components/FilterBar";
import MatchList from "./components/MatchList";
import BottomNav from "./components/BottomNav";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen pb-20 transition-colors duration-300 ${
        isDarkMode ? "bg-[#0c1b1e] text-white" : "bg-white text-black"
      }`}
    >
      {/* Responsive content wrapper */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <SportTabs />
        <FilterBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <MatchList />
      </div>

      {/* Bottom navigation (stays at the bottom) */}
      <BottomNav />
    </div>
  );
}

export default App;
