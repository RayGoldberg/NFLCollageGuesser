interface ScoreBoardProps {
  score: number;
  totalQuestions?: number;
  correctCount?: number;
}

export function ScoreBoard({ score, totalQuestions, correctCount }: ScoreBoardProps) {
  const accuracy =
    totalQuestions && totalQuestions > 0 && typeof correctCount === "number"
      ? Math.round((correctCount / totalQuestions) * 100)
      : null;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm md:text-base">
      <div className="px-3 py-2 rounded-lg bg-slate-700/70">
        <span className="text-slate-300">Score:</span>{" "}
        <span className="font-semibold">{score}</span>
      </div>
      {typeof totalQuestions === "number" && typeof correctCount === "number" && (
        <>
          <div className="px-3 py-2 rounded-lg bg-slate-700/70">
            <span className="text-slate-300">Questions:</span>{" "}
            <span className="font-semibold">{correctCount}/{totalQuestions}</span>
          </div>
          {accuracy !== null && (
            <div className="px-3 py-2 rounded-lg bg-slate-700/70">
              <span className="text-slate-300">Accuracy:</span>{" "}
              <span className="font-semibold">{accuracy}%</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

