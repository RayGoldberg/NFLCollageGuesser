export type Difficulty = "easy" | "medium" | "hard";

export interface Player {
  name: string;
  college: string;
  difficulty: Difficulty;
  position?: string;   // e.g. "QB", "RB", "WR1", "WR2", "WR3", "TE", etc.
  team?: string;       // team name
  teamId?: string;     // optional back-reference
  headshot_url?: string; // URL to player's headshot image
}

export interface LineupSlot {
  position: string;    // "QB", "RB", "WR1", ...
  player: Player;
}

export interface Team {
  id: string;          // "kc", "cin", etc.
  name: string;        // "Kansas City Chiefs"
  city: string;        // "Kansas City"
  offense: LineupSlot[];   // starting offense minus OL
  // later we can add full roster if we want (bench, defense, etc.)
}

