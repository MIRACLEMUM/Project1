import { FaBookmark } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa6';

const matches = [
  {
    time: '20:00',
    status: 'FT',
    team1: 'Real Valladolid',
    team2: 'Las Palmas',
    score: '1 - 1',
    chances: 'Even Match',
  },
  {
    time: '19:15',
    status: '',
    team1: 'Girona',
    team2: 'Celta',
    score: '',
    chances: 'Girona Slightly Favored',
  },
  {
    time: '21:15',
    status: '',
    team1: 'Rayo Vallecano',
    team2: 'Sevilla',
    score: '',
    chances: 'Sevilla Stronger Odds',
  },
];

export default function MatchList() {
  return (
    <div className="bg-[#2e003e] text-white rounded-xl p-4 shadow-lg w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🇪🇸</span>
        <span className="font-semibold text-sm">Spain</span>
        <span className="text-sm text-gray-400">LaLiga</span>
      </div>

      <ul className="space-y-3">
        {matches.map((match, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-[#3e004e] p-3 rounded-lg hover:bg-[#4b005f] transition"
          >
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-300">
                {match.time}{' '}
                {match.status && (
                  <span className="text-green-500 font-bold ml-2">{match.status}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-base font-semibold">
                <span>{match.team1}</span>
                <span className="text-white">vs</span>
                <span>{match.team2}</span>
              </div>
              <div className="text-xs text-gray-400 italic">{match.chances}</div>
            </div>

            <div className="flex items-center gap-3">
              {match.score && <span className="text-lg font-bold">{match.score}</span>}
              <FaBookmark className="text-green-400 cursor-pointer hover:scale-110 transition" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
