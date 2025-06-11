// src/App.js
import React from 'react';

function App() {
  return (
    <div className="app bg-black text-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-[#1f1f1f]">
        <h1 className="text-green-400 font-bold">Sofascore</h1>
        <button className="bg-green-600 px-4 py-1 rounded">Sign In</button>
      </header>

      {/* Categories */}
      <div className="flex overflow-x-auto gap-4 p-4 bg-[#222]">
        {['Football', 'Basketball', 'Tennis', 'Table Tennis'].map((cat) => (
          <button key={cat} className="text-sm px-3 py-1 bg-[#333] rounded">
            {cat}
          </button>
        ))}
      </div>

      {/* Date & Odds */}
      <div className="flex justify-between p-4 bg-[#1a1a1a]">
        <div className="text-sm">📅 25/02</div>
        <div className="text-sm">Odds: OFF</div>
      </div>

      {/* Filters */}
      <div className="flex justify-around p-4 text-sm bg-[#111]">
        <button className="text-green-400">Live (80)</button>
        <button>Finished</button>
        <button>Upcoming</button>
      </div>

      {/* Match List */}
      <div className="p-4 space-y-4">
        <MatchCard
          league="Spain"
          matchTime="20:00"
          team1="Real Valladolid"
          team2="Las Palmas"
          score="1 - 1"
          status="FT"
        />
        <MatchCard
          matchTime="19:15"
          team1="Girona"
          team2="Celta"
        />
        <MatchCard
          matchTime="21:15"
          team1="Rayo Vallecano"
          team2="Sevilla"
        />
      </div>
    </div>
  );
}

const MatchCard = ({ league, matchTime, team1, team2, score, status }) => (
  <div className="bg-[#2a2a2a] p-4 rounded">
    {league && <div className="text-sm mb-2 font-semibold">{league} - LaLiga</div>}
    <div className="flex justify-between items-center">
      <div>
        <div className="text-sm">{matchTime} {status && <span className="text-xs text-gray-400">{status}</span>}</div>
        <div className="text-base">{team1} vs {team2}</div>
      </div>
      {score && <div className="text-lg font-bold">{score}</div>}
    </div>
  </div>
);

export default App;
