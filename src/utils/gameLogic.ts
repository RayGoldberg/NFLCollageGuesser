import { Player, Difficulty } from "../types";
import { DIFFICULTY_POINTS, DIFFICULTY_WEIGHTS } from "../data/teams";

/**
 * Normalize college strings (trim, lowercase).
 */
export function normalizeCollege(value: string): string {
  return value.trim().toLowerCase();
}

/**
 * Check if a guess matches the player's college (case-insensitive, basic).
 * Later we can add aliases ("UCF" vs "Central Florida", etc.).
 */
export function isCorrectCollege(guess: string, player: Player): boolean {
  return normalizeCollege(guess) === normalizeCollege(player.college);
}

/**
 * Get points for difficulty.
 */
export function getPointsForDifficulty(diff: Difficulty): number {
  return DIFFICULTY_POINTS[diff] ?? 0;
}

/**
 * Random difficulty based on weights.
 */
export function pickRandomDifficulty(): Difficulty {
  const r = Math.random();
  const easyWeight = DIFFICULTY_WEIGHTS.easy;
  const mediumWeight = easyWeight + DIFFICULTY_WEIGHTS.medium;

  if (r < easyWeight) return "easy";
  if (r < mediumWeight) return "medium";
  return "hard";
}

/**
 * Given all players, pick a random one, optionally constrained by difficulty.
 */
export function pickRandomPlayer(
  players: Player[],
  difficulty?: Difficulty
): Player {
  const pool = difficulty
    ? players.filter((p) => p.difficulty === difficulty)
    : players;

  // Fallback to all players if pool is empty (e.g. no "hard" players found)
  const finalPool = pool.length > 0 ? pool : players;

  return finalPool[Math.floor(Math.random() * finalPool.length)];
}

