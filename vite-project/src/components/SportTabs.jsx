export default function SportTabs() {
  const tabs = ["Football", "Basketball", "Tennis", "Table Tennis"];
  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-2 bg-[#0c1b1e] text-white">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            i === 0 ? 'bg-green-700' : 'bg-gray-800'
          }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
