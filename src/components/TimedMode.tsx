import { useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";
import { Player } from "../types";
import { allPlayers, teams } from "../data/teams";
import { isCorrectCollege, pickRandomDifficulty, pickRandomPlayer } from "../utils/gameLogic";

export function TimedMode() {
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
    const [guess, setGuess] = useState("");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [feedback, setFeedback] = useState<{ type: "correct" | "incorrect"; message: string } | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);
    const usedPlayerIdsRef = useRef<Set<string>>(new Set());

    useEffect(() => {
        let interval: any = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((seconds) => seconds - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            endGame();
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const startGame = () => {
        setScore(0);
        setTimeLeft(60);
        setIsActive(true);
        setIsGameOver(false);
        usedPlayerIdsRef.current = new Set();
        loadNewPlayer();
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const endGame = async () => {
        setIsActive(false);
        setIsGameOver(true);

        // Update high score
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: stats } = await supabase
                    .from('game_stats')
                    .select('timed_highscore')
                    .eq('user_id', user.id)
                    .single();

                if (stats && score > (stats.timed_highscore || 0)) {
                    await supabase
                        .from('game_stats')
                        .update({ timed_highscore: score })
                        .eq('user_id', user.id);
                }
            }
        } catch (error) {
            console.error('Error updating high score:', error);
        }
    };

    const loadNewPlayer = () => {
        const difficulty = pickRandomDifficulty();

        // Filter players that haven't been used
        const availablePlayers = allPlayers.filter(p => !usedPlayerIdsRef.current.has(p.name + p.college));

        // If we ran out of players (unlikely), reset used list
        if (availablePlayers.length === 0) {
            const player = pickRandomPlayer(allPlayers, difficulty);
            setCurrentPlayer(player);
            usedPlayerIdsRef.current = new Set([player.name + player.college]);
        } else {
            const player = pickRandomPlayer(availablePlayers, difficulty);
            setCurrentPlayer(player);
            usedPlayerIdsRef.current.add(player.name + player.college);
        }

        setGuess("");
        setFeedback(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentPlayer || !guess.trim() || !isActive) return;

        const correct = isCorrectCollege(guess, currentPlayer);

        if (correct) {
            setScore((prev) => prev + 1);
            setFeedback({ type: "correct", message: "CORRECT!" });
            setTimeout(loadNewPlayer, 500); // Quick delay then next player
        } else {
            setFeedback({ type: "incorrect", message: "WRONG!" });
            // In timed mode, maybe we just clear input and let them try again or skip?
            // Let's skip to keep it fast, but no point.
            setTimeout(loadNewPlayer, 500);
        }
    };

    const getTeamCity = (teamId?: string): string => {
        if (!teamId) return "NFL";
        const team = teams.find(t => t.id === teamId);
        return team?.city || "NFL";
    };

    if (!isActive && !isGameOver) {
        return (
            <div className="flex flex-col items-center justify-center h-64 space-y-6">
                <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Timed Challenge</h2>
                <p className="text-slate-300">Guess as many as you can in 60 seconds!</p>
                <button
                    onClick={startGame}
                    className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl border-4 border-white uppercase transition transform hover:scale-105"
                    style={{ imageRendering: 'pixelated' }}
                >
                    START GAME
                </button>
            </div>
        );
    }

    if (isGameOver) {
        return (
            <div className="flex flex-col items-center justify-center h-64 space-y-6">
                <h2 className="text-4xl font-bold text-white uppercase tracking-widest">TIME'S UP!</h2>
                <div className="text-6xl font-bold text-yellow-400">{score}</div>
                <p className="text-white uppercase font-bold">Correct Guesses</p>
                <button
                    onClick={startGame}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl border-4 border-white uppercase transition"
                    style={{ imageRendering: 'pixelated' }}
                >
                    PLAY AGAIN
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Timer & Score Header */}
            <div className="flex justify-between items-center bg-slate-800 border-4 border-white p-4">
                <div className="text-2xl font-bold text-white">SCORE: <span className="text-yellow-400">{score}</span></div>
                <div className={`text-3xl font-bold ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                    {timeLeft}s
                </div>
            </div>

            {currentPlayer && (
                <div className="bg-red-900/90 backdrop-blur-sm border-4 border-white p-6 md:p-8 shadow-xl" style={{ imageRendering: 'pixelated' }}>
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

                        {/* Headshot */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-slate-700 to-slate-900 border-4 border-white flex items-center justify-center relative overflow-hidden">
                                {currentPlayer.headshot_url ? (
                                    <img src={currentPlayer.headshot_url} alt="Player" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-6xl">🏈</div>
                                )}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 w-full space-y-3">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-xs font-bold uppercase min-w-[80px]">NAME</span>
                                    <div className="flex-1 bg-white border-2 border-black p-2 h-10 flex items-center">
                                        <div className="text-black font-bold text-sm uppercase">{currentPlayer.name}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-xs font-bold uppercase min-w-[80px]">TEAM</span>
                                    <div className="flex-1 bg-yellow-400 border-2 border-black p-2 h-10 flex items-center">
                                        <div className="text-black font-bold text-sm uppercase">{getTeamCity(currentPlayer.teamId)}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Input */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-xs font-bold uppercase min-w-[80px]">COLLEGE</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={guess}
                                        onChange={(e) => setGuess(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                                        placeholder="TYPE HERE..."
                                        className={`flex-1 border-2 border-black p-2 h-10 font-bold text-sm uppercase outline-none ${feedback?.type === 'correct' ? 'bg-green-500 text-white' :
                                            feedback?.type === 'incorrect' ? 'bg-red-500 text-white' : 'bg-white text-black'
                                            }`}
                                        autoFocus
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
