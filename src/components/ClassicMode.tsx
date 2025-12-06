import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Player } from "../types";
import { allPlayers, teams } from "../data/teams";
import { isCorrectCollege, getPointsForDifficulty, pickRandomDifficulty, pickRandomPlayer } from "../utils/gameLogic";
import { ScoreBoard } from "./ScoreBoard";

export function ClassicMode() {
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState<{ type: "correct" | "incorrect"; message: string; points?: number } | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    loadNewPlayer();
  }, []);

  const loadNewPlayer = () => {
    const difficulty = pickRandomDifficulty();
    const player = pickRandomPlayer(allPlayers, difficulty);
    setCurrentPlayer(player);
    setGuess("");
    setFeedback(null);
    setIsAnswered(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPlayer || !guess.trim() || isAnswered) return;

    const correct = isCorrectCollege(guess, currentPlayer);
    const points = correct ? getPointsForDifficulty(currentPlayer.difficulty) : 0;

    setQuestions((prev) => prev + 1);

    if (correct) {
      setScore((prev) => prev + points);
      setCorrectCount((prev) => prev + 1);
      setFeedback({
        type: "correct",
        message: "Correct!",
        points: points,
      });
    } else {
      setFeedback({
        type: "incorrect",
        message: `Wrong! They went to ${currentPlayer.college}`,
      });
    }

    setIsAnswered(true);

    // Update stats in Supabase
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // First get current stats
        const { data: stats } = await supabase
          .from('game_stats')
          .select('total_guesses, correct_guesses')
          .eq('user_id', user.id)
          .single();

        if (stats) {
          await supabase
            .from('game_stats')
            .update({
              total_guesses: stats.total_guesses + 1,
              correct_guesses: stats.correct_guesses + (correct ? 1 : 0)
            })
            .eq('user_id', user.id);
        }
      }
    } catch (error) {
      console.error('Error updating stats:', error);
    }
  };

  const handleNext = () => {
    loadNewPlayer();
  };

  // Helper function to get team city from teamId
  const getTeamCity = (teamId?: string): string => {
    if (!teamId) return "NFL";
    const team = teams.find(t => t.id === teamId);
    return team?.city || "NFL";
  };

  if (!currentPlayer) {
    return <div className="text-center text-slate-300">Loading player...</div>;
  }

  return (
    <div className="space-y-4">
      {/* Player Card - Retro Bowl Style */}
      <div className="bg-blue-600/95 backdrop-blur-sm border-4 border-white p-6 md:p-8 shadow-xl" style={{ imageRendering: 'pixelated' }}>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

          {/* Left Side - Player Headshot */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-orange-400 to-orange-600 border-4 border-white flex items-center justify-center relative overflow-hidden">
              {/* Player headshot image or fallback */}
              {currentPlayer.headshot_url && currentPlayer.headshot_url.trim() !== "" ? (
                <img
                  src={currentPlayer.headshot_url}
                  alt={currentPlayer.name}
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'pixelated' }}
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement && !target.parentElement.querySelector('.fallback-emoji')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-6xl md:text-7xl fallback-emoji';
                      fallback.textContent = '🏈';
                      target.parentElement.appendChild(fallback);
                    }
                  }}
                />
              ) : (
                <div className="text-6xl md:text-7xl">🏈</div>
              )}
            </div>
          </div>

          {/* Right Side - Player Info Bars */}
          <div className="flex-1 w-full space-y-3">

            {/* NAME Bar */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-bold uppercase tracking-wider min-w-[80px]">NAME</span>
                <div className="flex-1 bg-white border-2 border-black p-2 h-10 flex items-center">
                  <div className="text-blue-600 font-bold text-sm uppercase" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.2)' }}>
                    {currentPlayer.name}
                  </div>
                </div>
                <button className="w-6 h-6 bg-blue-800 border-2 border-white text-white text-xs flex items-center justify-center">
                  ℹ
                </button>
              </div>
            </div>

            {/* POSITION Bar */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-bold uppercase tracking-wider min-w-[80px]">POSITION</span>
                <div className="flex-1 bg-yellow-400 border-2 border-black p-2 h-10 flex items-center">
                  <div className="text-black font-bold text-sm uppercase">
                    {currentPlayer.position || "N/A"}
                  </div>
                </div>
                <button className="w-6 h-6 bg-blue-800 border-2 border-white text-white text-xs flex items-center justify-center">
                  ℹ
                </button>
              </div>
            </div>

            {/* TEAM Bar */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-bold uppercase tracking-wider min-w-[80px]">TEAM</span>
                <div className="flex-1 bg-yellow-400 border-2 border-black p-2 h-10 flex items-center">
                  <div className="text-black font-bold text-sm uppercase">
                    {getTeamCity(currentPlayer.teamId)}
                  </div>
                </div>
                <button className="w-6 h-6 bg-blue-800 border-2 border-white text-white text-xs flex items-center justify-center">
                  ℹ
                </button>
              </div>
            </div>

            {/* COLLEGE Bar - Input */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-bold uppercase tracking-wider min-w-[80px]">COLLEGE</span>
                {!isAnswered ? (
                  <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                    placeholder="TYPE HERE..."
                    className="flex-1 bg-white border-2 border-black p-2 h-10 text-black font-bold text-sm uppercase placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    autoFocus
                    style={{ imageRendering: 'pixelated' }}
                  />
                ) : (
                  <div className={`flex-1 border-2 border-black p-2 h-10 flex items-center ${feedback?.type === "correct" ? "bg-green-400" : "bg-red-400"
                    }`}>
                    <div className="text-black font-bold text-sm uppercase">
                      {feedback?.type === "correct" ? currentPlayer.college : `✗ ${currentPlayer.college}`}
                    </div>
                  </div>
                )}
                <button className="w-6 h-6 bg-blue-800 border-2 border-white text-white text-xs flex items-center justify-center">
                  ℹ
                </button>
              </div>
            </div>

            {/* Difficulty Badge */}
            <div className="flex items-center gap-2 pt-2">
              <div className={`px-3 py-1 border-2 text-xs font-bold ${currentPlayer.difficulty === "easy" ? "bg-green-500 text-white border-white" :
                currentPlayer.difficulty === "medium" ? "bg-yellow-500 text-black border-white" :
                  "bg-red-500 text-white border-white"
                }`} style={{ imageRendering: 'pixelated' }}>
                {currentPlayer.difficulty.toUpperCase()} - {getPointsForDifficulty(currentPlayer.difficulty)} PTS
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {!isAnswered ? (
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-white transition text-sm uppercase"
              style={{ imageRendering: 'pixelated' }}
            >
              SUBMIT
            </button>
          ) : (
            <>
              {feedback?.type === "correct" && (
                <div className="flex-1 bg-green-600 border-2 border-white p-3 text-center">
                  <div className="text-white font-bold text-sm">✓ CORRECT!</div>
                  {feedback?.points && (
                    <div className="text-yellow-300 font-bold text-lg">+{feedback.points} PTS</div>
                  )}
                </div>
              )}
              <button
                onClick={handleNext}
                className="flex-1 px-4 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold border-2 border-white transition text-sm uppercase"
                style={{ imageRendering: 'pixelated' }}
              >
                NEXT PLAYER
              </button>
            </>
          )}
        </div>
      </div>

      <ScoreBoard score={score} totalQuestions={questions} correctCount={correctCount} />
    </div>
  );
}
