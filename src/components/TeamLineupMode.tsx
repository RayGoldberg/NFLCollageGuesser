import { useState, useEffect } from "react";
import { Team, LineupSlot } from "../types";
import { teams } from "../data/teams";
import { isCorrectCollege, getPointsForDifficulty } from "../utils/gameLogic";
import { LineupGrid } from "./LineupGrid";
import { ScoreBoard } from "./ScoreBoard";

export function TeamLineupMode() {
  const [selectedTeamId, setSelectedTeamId] = useState<string>(teams[0]?.id || "");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(teams[0] || null);
  const [guesses, setGuesses] = useState<Record<string, string>>({});
  const [slotResults, setSlotResults] = useState<Record<string, { correct: boolean; correctCollege: string }>>({});
  const [score, setScore] = useState(0);
  const [lineupsCompleted, setLineupsCompleted] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalSlots, setTotalSlots] = useState(0);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const team = teams.find(t => t.id === selectedTeamId);
    if (team) {
      setSelectedTeam(team);
      setGuesses({});
      setSlotResults({});
      setHasChecked(false);
    }
  }, [selectedTeamId]);

  const handleGuessChange = (position: string, value: string) => {
    setGuesses(prev => ({ ...prev, [position]: value }));
  };

  const handleCheckAnswers = () => {
    if (!selectedTeam || hasChecked) return;

    const results: Record<string, { correct: boolean; correctCollege: string }> = {};
    let pointsEarned = 0;
    let correctCount = 0;

    selectedTeam.offense.forEach((slot: LineupSlot) => {
      const guess = guesses[slot.position] || "";
      const correct = isCorrectCollege(guess, slot.player);
      
      results[slot.position] = {
        correct,
        correctCollege: slot.player.college,
      };

      if (correct) {
        pointsEarned += getPointsForDifficulty(slot.player.difficulty);
        correctCount++;
      }
    });

    setSlotResults(results);
    setScore(prev => prev + pointsEarned);
    setLineupsCompleted(prev => prev + 1);
    setTotalCorrect(prev => prev + correctCount);
    setTotalSlots(prev => prev + selectedTeam.offense.length);
    setHasChecked(true);
  };

  const handleReset = () => {
    setGuesses({});
    setSlotResults({});
    setHasChecked(false);
  };

  const handleNewTeam = () => {
    // Pick a random team different from current
    const otherTeams = teams.filter(t => t.id !== selectedTeamId);
    if (otherTeams.length > 0) {
      const randomTeam = otherTeams[Math.floor(Math.random() * otherTeams.length)];
      setSelectedTeamId(randomTeam.id);
    }
  };

  if (!selectedTeam) {
    return <div className="text-center text-slate-300">No team selected</div>;
  }

  return (
    <div className="space-y-6 relative">
      {/* Team Selector */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-slate-300">
          Select Team:
        </label>
        <select
          value={selectedTeamId}
          onChange={(e) => setSelectedTeamId(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={hasChecked}
        >
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        <div className="text-center text-xl font-bold text-slate-200">
          {selectedTeam.city} {selectedTeam.name.split(' ').slice(-1)[0]}
        </div>
      </div>

      {/* Lineup Grid */}
      <LineupGrid
        offense={selectedTeam.offense}
        guesses={guesses}
        onGuessChange={handleGuessChange}
        slotResults={hasChecked ? slotResults : undefined}
      />

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {!hasChecked ? (
          <button
            onClick={handleCheckAnswers}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
          >
            Check Answers
          </button>
        ) : (
          <>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition"
            >
              Reset Lineup
            </button>
            <button
              onClick={handleNewTeam}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              New Team
            </button>
          </>
        )}
      </div>

      {/* Score Summary */}
      {hasChecked && (
        <div className="bg-slate-700/50 rounded-lg p-4 text-center">
          <div className="text-lg font-semibold text-green-300 mb-2">
            Points from this lineup: {selectedTeam.offense.reduce((sum, slot) => {
              const result = slotResults[slot.position];
              if (result?.correct) {
                return sum + getPointsForDifficulty(slot.player.difficulty);
              }
              return sum;
            }, 0)}
          </div>
          <div className="text-sm text-slate-300">
            {Object.values(slotResults).filter(r => r.correct).length} / {selectedTeam.offense.length} correct
          </div>
        </div>
      )}

      {/* Overall Scoreboard */}
      <ScoreBoard 
        score={score} 
        totalQuestions={totalSlots} 
        correctCount={totalCorrect} 
      />
    </div>
  );
}

