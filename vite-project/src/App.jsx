import Header from "./components/Header";
import SportTabs from "./components/SportTabs";
import FilterBar from "./components/FilterBar";
import MatchList from "./components/MatchList";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="bg-black min-h-screen text-white pb-20">
      <Header />
      <SportTabs />
      <FilterBar />
      <MatchList />
      <BottomNav />
    </div>
  );
}

export default App;
