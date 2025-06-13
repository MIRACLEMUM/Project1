export default function SportTabs() {
  const tabs = [
    { name: "Football", chance: "Popular" },
    { name: "Basketball", chance: "Live Odds" },
    { name: "Tennis", chance: "Trending" },
    { name: "Table Tennis", chance: "Low Stakes" },
  ];

  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-2 bg-[#0c1b1e] text-white">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className={`px-4 py-2 rounded-xl text-sm font-medium flex flex-col items-center justify-center transition-all duration-200 ${
            i === 0 ? 'bg-green-700' : 'bg-gray-800'
          } hover:bg-green-800 cursor-pointer min-w-[100px]`}
        >
          <span>{tab.name}</span>
          <span className="text-xs text-gray-300 mt-1 italic">{tab.chance}</span>
        </div>
      ))}
    </div>
  );
}
