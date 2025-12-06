import json

def update_teams_ts():
    # Read the scraped data
    with open('nfl_teams_data.json', 'r', encoding='utf-8') as f:
        teams_data = json.load(f)
    
    # Define the static parts of the TS file
    header = """// NFL College Guessr - Team & Player Database
// Teams with starting offensive lineups (minus OL) and difficulties.

import { Difficulty, Player, Team } from "../types";

export const DIFFICULTY_POINTS: Record<Difficulty, number> = {
  easy: 5,
  medium: 10,
  hard: 20,
};

export const DIFFICULTY_WEIGHTS: Record<Difficulty, number> = {
  easy: 0.4,   // 40%
  medium: 0.35,
  hard: 0.25,
};

// Example teams and offensive lineups (minus OL)
// Feel free to expand this list, but start with a handful so the game works.
export const teams: Team[] = """

    # Write the new file
    with open('src/data/teams.ts', 'w', encoding='utf-8') as f:
        f.write(header)
        f.write(json.dumps(teams_data, indent=2))
        f.write(";\n\n")
        
        # Add allPlayers export
        f.write("// Flattened list of all players for easy access\n")
        f.write("export const allPlayers: Player[] = teams.flatMap(team => \n")
        f.write("  team.offense.map(slot => slot.player)\n")
        f.write(");\n")
    
    print(f"Successfully updated src/data/teams.ts with {len(teams_data)} teams.")

if __name__ == "__main__":
    update_teams_ts()
