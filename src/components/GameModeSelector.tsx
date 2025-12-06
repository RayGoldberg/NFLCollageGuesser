import { FC } from "react";

type Mode = "classic" | "team" | "timed";

interface GameModeSelectorProps {
  mode: Mode;
  onChangeMode: (mode: Mode) => void;
}

export const GameModeSelector: FC<GameModeSelectorProps> = ({ mode, onChangeMode }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onChangeMode("timed")}
        className={`px-4 py-2 font-bold text-sm uppercase border-2 transition ${mode === "timed"
            ? "bg-red-600 text-white border-white shadow-[2px_2px_0px_#fff]"
            : "bg-red-900/50 text-slate-300 border-slate-500 hover:bg-red-800 hover:border-white"
          }`}
        style={{ imageRendering: 'pixelated' }}
      >
        TIMED CHALLENGE
      </button>
      <button
        onClick={() => onChangeMode("classic")}
        className={`px-4 py-2 font-bold text-sm uppercase border-2 transition ${mode === "classic"
            ? "bg-green-600 text-white border-white shadow-[2px_2px_0px_#fff]"
            : "bg-slate-800 text-slate-300 border-slate-500 hover:bg-slate-700 hover:border-white"
          }`}
        style={{ imageRendering: 'pixelated' }}
      >
        CLASSIC
      </button>
      <button
        onClick={() => onChangeMode("team")}
        className={`px-4 py-2 font-bold text-sm uppercase border-2 transition ${mode === "team"
            ? "bg-blue-600 text-white border-white shadow-[2px_2px_0px_#fff]"
            : "bg-slate-800 text-slate-300 border-slate-500 hover:bg-slate-700 hover:border-white"
          }`}
        style={{ imageRendering: 'pixelated' }}
      >
        LINEUP GUESSER
      </button>
    </div>
  );
};
