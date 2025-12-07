import { memo } from "react";
import { LineupSlot } from "../types";

interface LineupGridProps {
  offense: LineupSlot[];
  guesses: Record<string, string>;
  onGuessChange: (position: string, value: string) => void;
  slotResults?: Record<string, { correct: boolean; correctCollege: string }>;
}

interface SlotCardProps {
  slot: LineupSlot;
  guess: string;
  onGuessChange: (position: string, value: string) => void;
  result?: { correct: boolean; correctCollege: string };
}


const SlotCard = memo(({ slot, guess, onGuessChange, result }: SlotCardProps) => {
  // Alternate between red and blue team colors like Retro Bowl roster
  const teamColors = ['bg-red-600', 'bg-blue-600'];
  const colorIndex = slot.position.charCodeAt(0) % 2;
  const bgColor = teamColors[colorIndex];

  const getSlotStyle = () => {
    if (!result) return `${bgColor} border-white`;
    return result.correct
      ? "bg-green-600 border-yellow-300"
      : "bg-gray-700 border-red-400";
  };

  return (
    <div className={`border-2 ${getSlotStyle()} transition shadow-lg flex flex-col items-center text-center w-[120px] p-1`} style={{ imageRendering: 'pixelated' }}>
      {/* Position Badge */}
      <div className="text-[8px] font-bold text-white uppercase tracking-wider mb-1 bg-black/50 px-2 py-0.5 border border-white/30">
        {slot.position}
      </div>

      {/* Player Name */}
      <div className="font-bold text-[10px] mb-1 leading-tight min-h-[1.5em] flex items-center justify-center text-white px-1">
        {slot.player.name}
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={guess}
        onChange={(e) => onGuessChange(slot.position, e.target.value)}
        placeholder="COLLEGE"
        className="w-full px-1 py-0.5 bg-white border border-black text-black placeholder-gray-500 focus:outline-none text-[8px] text-center font-bold uppercase"
        disabled={!!result}
        style={{ imageRendering: 'pixelated' }}
      />

      {/* Result */}
      {result && (
        <div className="mt-1 text-[8px] font-bold">
          {result.correct ? (
            <span className="text-yellow-300">✓ CORRECT</span>
          ) : (
            <span className="text-red-300">{result.correctCollege}</span>
          )}
        </div>
      )}
    </div>
  );
});

SlotCard.displayName = "SlotCard";

export function LineupGrid({ offense, guesses, onGuessChange, slotResults }: LineupGridProps) {
  // Organize positions for layout
  const qb = offense.find(slot => slot.position === "QB");
  const rb = offense.find(slot => slot.position === "RB");
  const wr1 = offense.find(slot => slot.position === "WR1");
  const wr2 = offense.find(slot => slot.position === "WR2");
  const wr3 = offense.find(slot => slot.position === "WR3");
  const te = offense.find(slot => slot.position === "TE");

  // Helper to render a slot (no placeholders)
  const renderSlot = (slot: LineupSlot | undefined, className: string) => {
    if (!slot) return null;

    return (
      <div className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${className} z-20`}>
        <SlotCard
          slot={slot}
          guess={guesses[slot.position] || ""}
          onGuessChange={onGuessChange}
          result={slotResults?.[slot.position]}
        />
      </div>
    );
  };

  return (
    <div className="w-full overflow-x-auto pb-4">
      {/* Football Field Container */}
      <div
        className="relative w-full min-w-[600px] max-w-5xl h-[600px] border-4 border-white shadow-2xl mx-auto overflow-hidden"
        style={{
          background: `
            repeating-linear-gradient(90deg,
              transparent 0px,
              transparent calc(10% - 2px),
              rgba(255, 255, 255, 0.15) calc(10% - 2px),
              rgba(255, 255, 255, 0.15) 10%,
              transparent 10%,
              transparent calc(20% - 2px),
              rgba(255, 255, 255, 0.15) calc(20% - 2px),
              rgba(255, 255, 255, 0.15) 20%,
              transparent 20%,
              transparent calc(30% - 2px),
              rgba(255, 255, 255, 0.15) calc(30% - 2px),
              rgba(255, 255, 255, 0.15) 30%,
              transparent 30%,
              transparent calc(40% - 2px),
              rgba(255, 255, 255, 0.15) calc(40% - 2px),
              rgba(255, 255, 255, 0.15) 40%,
              transparent 40%,
              transparent calc(50% - 2px),
              rgba(255, 255, 255, 0.3) calc(50% - 2px),
              rgba(255, 255, 255, 0.3) calc(50% + 2px),
              transparent calc(50% + 2px),
              transparent calc(60% - 2px),
              rgba(255, 255, 255, 0.15) calc(60% - 2px),
              rgba(255, 255, 255, 0.15) 60%,
              transparent 60%,
              transparent calc(70% - 2px),
              rgba(255, 255, 255, 0.15) calc(70% - 2px),
              rgba(255, 255, 255, 0.15) 70%,
              transparent 70%,
              transparent calc(80% - 2px),
              rgba(255, 255, 255, 0.15) calc(80% - 2px),
              rgba(255, 255, 255, 0.15) 80%,
              transparent 80%,
              transparent calc(90% - 2px),
              rgba(255, 255, 255, 0.15) calc(90% - 2px),
              rgba(255, 255, 255, 0.15) 90%,
              transparent 90%,
              transparent 100%),
            linear-gradient(180deg, #2d5a1e 0%, #1e3d14 100%)
          `,
          imageRendering: 'pixelated'
        }}
      >

        {/* Yard Lines - Vertical */}
        {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 bottom-0 w-1 bg-white/20"
            style={{ left: `${pct}%` }}
          />
        ))}

        {/* Hash Marks - Horizontal */}
        <div className="absolute left-0 right-0 h-0.5 bg-white/30 top-[30%]" />
        <div className="absolute left-0 right-0 h-0.5 bg-white/30 top-[70%]" />

        {/* Line of Scrimmage - Thicker */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-yellow-400/70 border-t-2 border-b-2 border-yellow-300/80 transform -translate-y-1/2 z-0" style={{ imageRendering: 'pixelated' }} />

        {/* Formation Container */}
        <div className="relative w-full h-full z-10">

          {/* WR1 (Far Left) - Moved in to 16% */}
          {renderSlot(wr1, "left-[16%] top-[35%]")}

          {/* TE (Left side of line) - Moved in to 32% */}
          {renderSlot(te, "left-[32%] top-[50%]")}

          {/* WR2 (Right) - Moved in to 68% */}
          {renderSlot(wr2, "left-[68%] top-[40%]")}

          {/* WR3 (Far Right) - Moved in to 84% */}
          {renderSlot(wr3, "left-[84%] top-[60%]")}

          {/* Backfield */}

          {/* QB (Under Center) */}
          {renderSlot(qb, "left-[50%] top-[68%]")}

          {/* RB (Behind QB) */}
          {renderSlot(rb, "left-[50%] top-[85%]")}

        </div>
      </div>
    </div>
  );
}
