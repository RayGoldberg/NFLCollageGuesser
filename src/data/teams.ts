// NFL College Guessr - Team & Player Database
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
export const teams: Team[] = [
  {
    "id": "atl",
    "name": "Atlanta Falcons",
    "city": "Atlanta",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Kirk Cousins",
          "college": "Michigan State",
          "difficulty": "easy",
          "position": "QB",
          "team": "Atlanta",
          "teamId": "atl",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Bijan Robinson",
          "college": "Texas",
          "difficulty": "medium",
          "position": "RB",
          "team": "Atlanta",
          "teamId": "atl",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4430807.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Tyler Allgeier",
          "college": "BYU",
          "difficulty": "medium",
          "position": "RB",
          "team": "Atlanta",
          "teamId": "atl",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4373626.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Drake London",
          "college": "USC",
          "difficulty": "medium",
          "position": "WR",
          "team": "Atlanta",
          "teamId": "atl",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426502.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Darnell Mooney",
          "college": "Tulane",
          "difficulty": "medium",
          "position": "WR",
          "team": "Atlanta",
          "teamId": "atl",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4040655.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "David Sills V",
          "college": "West Virginia",
          "difficulty": "medium",
          "position": "WR",
          "team": "Atlanta",
          "teamId": "atl",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3871102.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Kyle Pitts Sr.",
          "college": "Florida",
          "difficulty": "medium",
          "position": "TE",
          "team": "Atlanta",
          "teamId": "atl",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360248.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Charlie Woerner",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "TE",
          "team": "Atlanta",
          "teamId": "atl",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4035020.png"
        }
      }
    ]
  },
  {
    "id": "buf",
    "name": "Buffalo Bills",
    "city": "Buffalo",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Josh Allen",
          "college": "Wyoming",
          "difficulty": "easy",
          "position": "QB",
          "team": "Buffalo",
          "teamId": "buf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "James Cook III",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "RB",
          "team": "Buffalo",
          "teamId": "buf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4379399.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Ray Davis",
          "college": "Kentucky",
          "difficulty": "medium",
          "position": "RB",
          "team": "Buffalo",
          "teamId": "buf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429501.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Khalil Shakir",
          "college": "Boise State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Buffalo",
          "teamId": "buf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4373678.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Joshua Palmer",
          "college": "Tennessee",
          "difficulty": "medium",
          "position": "WR",
          "team": "Buffalo",
          "teamId": "buf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4242433.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Gabe Davis",
          "college": "UCF",
          "difficulty": "medium",
          "position": "WR",
          "team": "Buffalo",
          "teamId": "buf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4243537.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Dalton Kincaid",
          "college": "Utah",
          "difficulty": "medium",
          "position": "TE",
          "team": "Buffalo",
          "teamId": "buf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4385690.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Dawson Knox",
          "college": "Ole Miss",
          "difficulty": "medium",
          "position": "TE",
          "team": "Buffalo",
          "teamId": "buf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png"
        }
      }
    ]
  },
  {
    "id": "chi",
    "name": "Chicago Bears",
    "city": "Chicago",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Caleb Williams",
          "college": "USC",
          "difficulty": "easy",
          "position": "QB",
          "team": "Chicago",
          "teamId": "chi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4431611.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "D'Andre Swift",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "RB",
          "team": "Chicago",
          "teamId": "chi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4259545.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Kyle Monangai",
          "college": "Rutgers",
          "difficulty": "medium",
          "position": "RB",
          "team": "Chicago",
          "teamId": "chi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4608686.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Rome Odunze",
          "college": "Washington",
          "difficulty": "medium",
          "position": "WR",
          "team": "Chicago",
          "teamId": "chi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4431299.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "DJ Moore",
          "college": "Maryland",
          "difficulty": "medium",
          "position": "WR",
          "team": "Chicago",
          "teamId": "chi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Luther Burden III",
          "college": "Missouri",
          "difficulty": "medium",
          "position": "WR",
          "team": "Chicago",
          "teamId": "chi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4685278.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Colston Loveland",
          "college": "Michigan",
          "difficulty": "medium",
          "position": "TE",
          "team": "Chicago",
          "teamId": "chi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4723086.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Cole Kmet",
          "college": "Notre Dame",
          "difficulty": "medium",
          "position": "TE",
          "team": "Chicago",
          "teamId": "chi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4258595.png"
        }
      }
    ]
  },
  {
    "id": "cin",
    "name": "Cincinnati Bengals",
    "city": "Cincinnati",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Joe Burrow",
          "college": "LSU",
          "difficulty": "easy",
          "position": "QB",
          "team": "Cincinnati",
          "teamId": "cin",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Chase Brown",
          "college": "Illinois",
          "difficulty": "medium",
          "position": "RB",
          "team": "Cincinnati",
          "teamId": "cin",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4362238.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Samaje Perine",
          "college": "Oklahoma",
          "difficulty": "medium",
          "position": "RB",
          "team": "Cincinnati",
          "teamId": "cin",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3116389.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Ja'Marr Chase",
          "college": "LSU",
          "difficulty": "medium",
          "position": "WR",
          "team": "Cincinnati",
          "teamId": "cin",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4362628.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Tee Higgins",
          "college": "Clemson",
          "difficulty": "medium",
          "position": "WR",
          "team": "Cincinnati",
          "teamId": "cin",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Andrei Iosivas",
          "college": "Princeton",
          "difficulty": "medium",
          "position": "WR",
          "team": "Cincinnati",
          "teamId": "cin",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4368003.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Mike Gesicki",
          "college": "Penn State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Cincinnati",
          "teamId": "cin",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Noah Fant",
          "college": "Iowa",
          "difficulty": "medium",
          "position": "TE",
          "team": "Cincinnati",
          "teamId": "cin",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png"
        }
      }
    ]
  },
  {
    "id": "cle",
    "name": "Cleveland Browns",
    "city": "Cleveland",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Shedeur Sanders",
          "college": "Colorado",
          "difficulty": "easy",
          "position": "QB",
          "team": "Cleveland",
          "teamId": "cle",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4432762.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Quinshon Judkins",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Cleveland",
          "teamId": "cle",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4685702.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Dylan Sampson",
          "college": "Tennessee",
          "difficulty": "medium",
          "position": "RB",
          "team": "Cleveland",
          "teamId": "cle",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/5081397.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Jerry Jeudy",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "WR",
          "team": "Cleveland",
          "teamId": "cle",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4241463.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Cedric Tillman",
          "college": "Tennessee",
          "difficulty": "medium",
          "position": "WR",
          "team": "Cleveland",
          "teamId": "cle",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4369863.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Isaiah Bond",
          "college": "Texas",
          "difficulty": "medium",
          "position": "WR",
          "team": "Cleveland",
          "teamId": "cle",
          "headshot_url": "https://a.espncdn.com/i/headshots/college-football/players/full/4808839.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Harold Fannin Jr.",
          "college": "Bowling Green",
          "difficulty": "medium",
          "position": "TE",
          "team": "Cleveland",
          "teamId": "cle",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/5083076.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "David Njoku",
          "college": "Miami",
          "difficulty": "medium",
          "position": "TE",
          "team": "Cleveland",
          "teamId": "cle",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png"
        }
      }
    ]
  },
  {
    "id": "dal",
    "name": "Dallas Cowboys",
    "city": "Dallas",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Dak Prescott",
          "college": "Mississippi State",
          "difficulty": "easy",
          "position": "QB",
          "team": "Dallas",
          "teamId": "dal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Javonte Williams",
          "college": "North Carolina",
          "difficulty": "medium",
          "position": "RB",
          "team": "Dallas",
          "teamId": "dal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361579.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Malik Davis",
          "college": "Florida",
          "difficulty": "medium",
          "position": "RB",
          "team": "Dallas",
          "teamId": "dal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4240603.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "CeeDee Lamb",
          "college": "Oklahoma",
          "difficulty": "medium",
          "position": "WR",
          "team": "Dallas",
          "teamId": "dal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "George Pickens",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "WR",
          "team": "Dallas",
          "teamId": "dal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426354.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Ryan Flournoy",
          "college": "Southeast Missouri State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Dallas",
          "teamId": "dal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/5083754.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Jake Ferguson",
          "college": "Wisconsin",
          "difficulty": "medium",
          "position": "TE",
          "team": "Dallas",
          "teamId": "dal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4242355.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Luke Schoonmaker",
          "college": "Michigan",
          "difficulty": "medium",
          "position": "TE",
          "team": "Dallas",
          "teamId": "dal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4372096.png"
        }
      }
    ]
  },
  {
    "id": "den",
    "name": "Denver Broncos",
    "city": "Denver",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Bo Nix",
          "college": "Oregon",
          "difficulty": "easy",
          "position": "QB",
          "team": "Denver",
          "teamId": "den",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426338.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "RJ Harvey",
          "college": "UCF",
          "difficulty": "medium",
          "position": "RB",
          "team": "Denver",
          "teamId": "den",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4568490.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Jaleel McLaughlin",
          "college": "Youngstown State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Denver",
          "teamId": "den",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4722893.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Courtland Sutton",
          "college": "SMU",
          "difficulty": "medium",
          "position": "WR",
          "team": "Denver",
          "teamId": "den",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Troy Franklin",
          "college": "Oregon",
          "difficulty": "medium",
          "position": "WR",
          "team": "Denver",
          "teamId": "den",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4431280.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Pat Bryant",
          "college": "Illinois",
          "difficulty": "medium",
          "position": "WR",
          "team": "Denver",
          "teamId": "den",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4600981.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Evan Engram",
          "college": "Ole Miss",
          "difficulty": "medium",
          "position": "TE",
          "team": "Denver",
          "teamId": "den",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Nate Adkins",
          "college": "South Carolina",
          "difficulty": "medium",
          "position": "TE",
          "team": "Denver",
          "teamId": "den",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4383440.png"
        }
      }
    ]
  },
  {
    "id": "det",
    "name": "Detroit Lions",
    "city": "Detroit",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Jared Goff",
          "college": "California",
          "difficulty": "easy",
          "position": "QB",
          "team": "Detroit",
          "teamId": "det",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Jahmyr Gibbs",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "RB",
          "team": "Detroit",
          "teamId": "det",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429795.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "David Montgomery",
          "college": "Iowa State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Detroit",
          "teamId": "det",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Amon-Ra St. Brown",
          "college": "USC",
          "difficulty": "medium",
          "position": "WR",
          "team": "Detroit",
          "teamId": "det",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4374302.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Jameson Williams",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "WR",
          "team": "Detroit",
          "teamId": "det",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426388.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Kalif Raymond",
          "college": "Holy Cross",
          "difficulty": "medium",
          "position": "WR",
          "team": "Detroit",
          "teamId": "det",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2973405.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Brock Wright",
          "college": "Notre Dame",
          "difficulty": "medium",
          "position": "TE",
          "team": "Detroit",
          "teamId": "det",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4242392.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Ross Dwelley",
          "college": "San Diego",
          "difficulty": "medium",
          "position": "TE",
          "team": "Detroit",
          "teamId": "det",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3120303.png"
        }
      }
    ]
  },
  {
    "id": "gb",
    "name": "Green Bay Packers",
    "city": "Green Bay",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Jordan Love",
          "college": "Utah State",
          "difficulty": "easy",
          "position": "QB",
          "team": "Green Bay",
          "teamId": "gb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4036378.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Josh Jacobs",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "RB",
          "team": "Green Bay",
          "teamId": "gb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Emanuel Wilson",
          "college": "Fort Valley State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Green Bay",
          "teamId": "gb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4887558.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Christian Watson",
          "college": "North Dakota State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Green Bay",
          "teamId": "gb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4248528.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Romeo Doubs",
          "college": "Nevada",
          "difficulty": "medium",
          "position": "WR",
          "team": "Green Bay",
          "teamId": "gb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361432.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Matthew Golden",
          "college": "Texas",
          "difficulty": "medium",
          "position": "WR",
          "team": "Green Bay",
          "teamId": "gb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4701936.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Luke Musgrave",
          "college": "Oregon State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Green Bay",
          "teamId": "gb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4428085.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "John FitzPatrick",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "TE",
          "team": "Green Bay",
          "teamId": "gb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4379401.png"
        }
      }
    ]
  },
  {
    "id": "ten",
    "name": "Tennessee Titans",
    "city": "Tennessee",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Cam Ward",
          "college": "Miami",
          "difficulty": "easy",
          "position": "QB",
          "team": "Tennessee",
          "teamId": "ten",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4688380.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Tony Pollard",
          "college": "Memphis",
          "difficulty": "medium",
          "position": "RB",
          "team": "Tennessee",
          "teamId": "ten",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Tyjae Spears",
          "college": "Tulane",
          "difficulty": "medium",
          "position": "RB",
          "team": "Tennessee",
          "teamId": "ten",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4428557.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Elic Ayomanor",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "WR",
          "team": "Tennessee",
          "teamId": "ten",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4883647.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Chimere Dike",
          "college": "Florida",
          "difficulty": "medium",
          "position": "WR",
          "team": "Tennessee",
          "teamId": "ten",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4431268.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Van Jefferson",
          "college": "Florida",
          "difficulty": "medium",
          "position": "WR",
          "team": "Tennessee",
          "teamId": "ten",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3930066.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Gunnar Helm",
          "college": "Texas",
          "difficulty": "medium",
          "position": "TE",
          "team": "Tennessee",
          "teamId": "ten",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4686728.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Chig Okonkwo",
          "college": "Maryland",
          "difficulty": "medium",
          "position": "TE",
          "team": "Tennessee",
          "teamId": "ten",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360635.png"
        }
      }
    ]
  },
  {
    "id": "ind",
    "name": "Indianapolis Colts",
    "city": "Indianapolis",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Daniel Jones",
          "college": "Duke",
          "difficulty": "easy",
          "position": "QB",
          "team": "Indianapolis",
          "teamId": "ind",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Jonathan Taylor",
          "college": "Wisconsin",
          "difficulty": "medium",
          "position": "RB",
          "team": "Indianapolis",
          "teamId": "ind",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Ameer Abdullah",
          "college": "Nebraska",
          "difficulty": "medium",
          "position": "RB",
          "team": "Indianapolis",
          "teamId": "ind",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2576336.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Michael Pittman Jr.",
          "college": "USC",
          "difficulty": "medium",
          "position": "WR",
          "team": "Indianapolis",
          "teamId": "ind",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4035687.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Alec Pierce",
          "college": "Cincinnati",
          "difficulty": "medium",
          "position": "WR",
          "team": "Indianapolis",
          "teamId": "ind",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360078.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Josh Downs",
          "college": "North Carolina",
          "difficulty": "medium",
          "position": "WR",
          "team": "Indianapolis",
          "teamId": "ind",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4688813.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Tyler Warren",
          "college": "Penn State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Indianapolis",
          "teamId": "ind",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4431459.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Mo Alie-Cox",
          "college": "VCU",
          "difficulty": "medium",
          "position": "TE",
          "team": "Indianapolis",
          "teamId": "ind",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2998565.png"
        }
      }
    ]
  },
  {
    "id": "kc",
    "name": "Kansas City Chiefs",
    "city": "Kansas City",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Patrick Mahomes",
          "college": "Texas Tech",
          "difficulty": "easy",
          "position": "QB",
          "team": "Kansas City",
          "teamId": "kc",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Kareem Hunt",
          "college": "Toledo",
          "difficulty": "medium",
          "position": "RB",
          "team": "Kansas City",
          "teamId": "kc",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Isiah Pacheco",
          "college": "Rutgers",
          "difficulty": "medium",
          "position": "RB",
          "team": "Kansas City",
          "teamId": "kc",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361529.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Rashee Rice",
          "college": "SMU",
          "difficulty": "medium",
          "position": "WR",
          "team": "Kansas City",
          "teamId": "kc",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4428331.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Xavier Worthy",
          "college": "Texas",
          "difficulty": "medium",
          "position": "WR",
          "team": "Kansas City",
          "teamId": "kc",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4683062.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Hollywood Brown",
          "college": "Oklahoma",
          "difficulty": "medium",
          "position": "WR",
          "team": "Kansas City",
          "teamId": "kc",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Travis Kelce",
          "college": "Cincinnati",
          "difficulty": "medium",
          "position": "TE",
          "team": "Kansas City",
          "teamId": "kc",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Noah Gray",
          "college": "Duke",
          "difficulty": "medium",
          "position": "TE",
          "team": "Kansas City",
          "teamId": "kc",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4240472.png"
        }
      }
    ]
  },
  {
    "id": "lv",
    "name": "Las Vegas Raiders",
    "city": "Las Vegas",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Geno Smith",
          "college": "West Virginia",
          "difficulty": "easy",
          "position": "QB",
          "team": "Las Vegas",
          "teamId": "lv",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/15864.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Ashton Jeanty",
          "college": "Boise State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Las Vegas",
          "teamId": "lv",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4890973.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Raheem Mostert",
          "college": "Purdue",
          "difficulty": "medium",
          "position": "RB",
          "team": "Las Vegas",
          "teamId": "lv",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Tre Tucker",
          "college": "Cincinnati",
          "difficulty": "medium",
          "position": "WR",
          "team": "Las Vegas",
          "teamId": "lv",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4428718.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Tyler Lockett",
          "college": "Kansas State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Las Vegas",
          "teamId": "lv",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Dont'e Thornton Jr.",
          "college": "Tennessee",
          "difficulty": "medium",
          "position": "WR",
          "team": "Las Vegas",
          "teamId": "lv",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4432775.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Brock Bowers",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "TE",
          "team": "Las Vegas",
          "teamId": "lv",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4432665.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Michael Mayer",
          "college": "Notre Dame",
          "difficulty": "medium",
          "position": "TE",
          "team": "Las Vegas",
          "teamId": "lv",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429086.png"
        }
      }
    ]
  },
  {
    "id": "lar",
    "name": "Los Angeles Rams",
    "city": "Los Angeles",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Matthew Stafford",
          "college": "Georgia",
          "difficulty": "easy",
          "position": "QB",
          "team": "Los Angeles",
          "teamId": "lar",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Kyren Williams",
          "college": "Notre Dame",
          "difficulty": "medium",
          "position": "RB",
          "team": "Los Angeles",
          "teamId": "lar",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4430737.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Blake Corum",
          "college": "Michigan",
          "difficulty": "medium",
          "position": "RB",
          "team": "Los Angeles",
          "teamId": "lar",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429096.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Puka Nacua",
          "college": "BYU",
          "difficulty": "medium",
          "position": "WR",
          "team": "Los Angeles",
          "teamId": "lar",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426515.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Davante Adams",
          "college": "Fresno State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Los Angeles",
          "teamId": "lar",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Xavier Smith",
          "college": "Florida A&M",
          "difficulty": "medium",
          "position": "WR",
          "team": "Los Angeles",
          "teamId": "lar",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4386544.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Colby Parkinson",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "TE",
          "team": "Los Angeles",
          "teamId": "lar",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4242557.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Davis Allen",
          "college": "Clemson",
          "difficulty": "medium",
          "position": "TE",
          "team": "Los Angeles",
          "teamId": "lar",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426553.png"
        }
      }
    ]
  },
  {
    "id": "mia",
    "name": "Miami Dolphins",
    "city": "Miami",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Tua Tagovailoa",
          "college": "Alabama",
          "difficulty": "easy",
          "position": "QB",
          "team": "Miami",
          "teamId": "mia",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4241479.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "De'Von Achane",
          "college": "Texas A&M",
          "difficulty": "medium",
          "position": "RB",
          "team": "Miami",
          "teamId": "mia",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429160.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Ollie Gordon II",
          "college": "Oklahoma State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Miami",
          "teamId": "mia",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4711533.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Jaylen Waddle",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "WR",
          "team": "Miami",
          "teamId": "mia",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4372016.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Malik Washington",
          "college": "Virginia",
          "difficulty": "medium",
          "position": "WR",
          "team": "Miami",
          "teamId": "mia",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4569603.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Nick Westbrook-Ikhine",
          "college": "Indiana",
          "difficulty": "medium",
          "position": "WR",
          "team": "Miami",
          "teamId": "mia",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3929785.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Darren Waller",
          "college": "Georgia Tech",
          "difficulty": "medium",
          "position": "TE",
          "team": "Miami",
          "teamId": "mia",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Greg Dulcich",
          "college": "UCLA",
          "difficulty": "medium",
          "position": "TE",
          "team": "Miami",
          "teamId": "mia",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4367209.png"
        }
      }
    ]
  },
  {
    "id": "min",
    "name": "Minnesota Vikings",
    "city": "Minnesota",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "J.J. McCarthy",
          "college": "Michigan",
          "difficulty": "easy",
          "position": "QB",
          "team": "Minnesota",
          "teamId": "min",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4433970.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Aaron Jones Sr.",
          "college": "UTEP",
          "difficulty": "medium",
          "position": "RB",
          "team": "Minnesota",
          "teamId": "min",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Jordan Mason",
          "college": "Georgia Tech",
          "difficulty": "medium",
          "position": "RB",
          "team": "Minnesota",
          "teamId": "min",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360569.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Justin Jefferson",
          "college": "LSU",
          "difficulty": "medium",
          "position": "WR",
          "team": "Minnesota",
          "teamId": "min",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4262921.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Jordan Addison",
          "college": "USC",
          "difficulty": "medium",
          "position": "WR",
          "team": "Minnesota",
          "teamId": "min",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429205.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Jalen Nailor",
          "college": "Michigan State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Minnesota",
          "teamId": "min",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4382466.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "T.J. Hockenson",
          "college": "Iowa",
          "difficulty": "medium",
          "position": "TE",
          "team": "Minnesota",
          "teamId": "min",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Josh Oliver",
          "college": "San Jos\u00e9 State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Minnesota",
          "teamId": "min",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3921690.png"
        }
      }
    ]
  },
  {
    "id": "ne",
    "name": "New England Patriots",
    "city": "New England",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Drake Maye",
          "college": "North Carolina",
          "difficulty": "easy",
          "position": "QB",
          "team": "New England",
          "teamId": "ne",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4431452.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "TreVeyon Henderson",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "RB",
          "team": "New England",
          "teamId": "ne",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4432710.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Rhamondre Stevenson",
          "college": "Oklahoma",
          "difficulty": "medium",
          "position": "RB",
          "team": "New England",
          "teamId": "ne",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4569173.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Stefon Diggs",
          "college": "Maryland",
          "difficulty": "medium",
          "position": "WR",
          "team": "New England",
          "teamId": "ne",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Kayshon Boutte",
          "college": "LSU",
          "difficulty": "medium",
          "position": "WR",
          "team": "New England",
          "teamId": "ne",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429022.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Mack Hollins",
          "college": "North Carolina",
          "difficulty": "medium",
          "position": "WR",
          "team": "New England",
          "teamId": "ne",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2991662.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Hunter Henry",
          "college": "Arkansas",
          "difficulty": "medium",
          "position": "TE",
          "team": "New England",
          "teamId": "ne",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Austin Hooper",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "TE",
          "team": "New England",
          "teamId": "ne",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png"
        }
      }
    ]
  },
  {
    "id": "no",
    "name": "New Orleans Saints",
    "city": "New Orleans",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Tyler Shough",
          "college": "Louisville",
          "difficulty": "easy",
          "position": "QB",
          "team": "New Orleans",
          "teamId": "no",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360689.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Alvin Kamara",
          "college": "Tennessee",
          "difficulty": "medium",
          "position": "RB",
          "team": "New Orleans",
          "teamId": "no",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Devin Neal",
          "college": "Kansas",
          "difficulty": "medium",
          "position": "RB",
          "team": "New Orleans",
          "teamId": "no",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4682652.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Chris Olave",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "WR",
          "team": "New Orleans",
          "teamId": "no",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361370.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Devaughn Vele",
          "college": "Utah",
          "difficulty": "medium",
          "position": "WR",
          "team": "New Orleans",
          "teamId": "no",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4569559.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Mason Tipton",
          "college": "Yale",
          "difficulty": "medium",
          "position": "WR",
          "team": "New Orleans",
          "teamId": "no",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4573697.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Juwan Johnson",
          "college": "Oregon",
          "difficulty": "medium",
          "position": "TE",
          "team": "New Orleans",
          "teamId": "no",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3929645.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Taysom Hill",
          "college": "BYU",
          "difficulty": "medium",
          "position": "TE",
          "team": "New Orleans",
          "teamId": "no",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2468609.png"
        }
      }
    ]
  },
  {
    "id": "nyg",
    "name": "New York Giants",
    "city": "New York",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Jaxson Dart",
          "college": "Ole Miss",
          "difficulty": "easy",
          "position": "QB",
          "team": "New York",
          "teamId": "nyg",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4689114.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Tyrone Tracy Jr.",
          "college": "Purdue",
          "difficulty": "medium",
          "position": "RB",
          "team": "New York",
          "teamId": "nyg",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360516.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Devin Singletary",
          "college": "Florida Atlantic",
          "difficulty": "medium",
          "position": "RB",
          "team": "New York",
          "teamId": "nyg",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Wan'Dale Robinson",
          "college": "Kentucky",
          "difficulty": "medium",
          "position": "WR",
          "team": "New York",
          "teamId": "nyg",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4569587.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Darius Slayton",
          "college": "Auburn",
          "difficulty": "medium",
          "position": "WR",
          "team": "New York",
          "teamId": "nyg",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Isaiah Hodgins",
          "college": "Oregon State",
          "difficulty": "medium",
          "position": "WR",
          "team": "New York",
          "teamId": "nyg",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4242540.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Theo Johnson",
          "college": "Penn State",
          "difficulty": "medium",
          "position": "TE",
          "team": "New York",
          "teamId": "nyg",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429148.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Daniel Bellinger",
          "college": "San Diego State",
          "difficulty": "medium",
          "position": "TE",
          "team": "New York",
          "teamId": "nyg",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361516.png"
        }
      }
    ]
  },
  {
    "id": "nyj",
    "name": "New York Jets",
    "city": "New York",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Tyrod Taylor",
          "college": "Virginia Tech",
          "difficulty": "easy",
          "position": "QB",
          "team": "New York",
          "teamId": "nyj",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/14163.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Breece Hall",
          "college": "Iowa State",
          "difficulty": "medium",
          "position": "RB",
          "team": "New York",
          "teamId": "nyj",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4427366.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Isaiah Davis",
          "college": "South Dakota State",
          "difficulty": "medium",
          "position": "RB",
          "team": "New York",
          "teamId": "nyj",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4695404.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "John Metchie III",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "WR",
          "team": "New York",
          "teamId": "nyj",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4567096.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Adonai Mitchell",
          "college": "Texas",
          "difficulty": "medium",
          "position": "WR",
          "team": "New York",
          "teamId": "nyj",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4597500.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Allen Lazard",
          "college": "Iowa State",
          "difficulty": "medium",
          "position": "WR",
          "team": "New York",
          "teamId": "nyj",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Mason Taylor",
          "college": "LSU",
          "difficulty": "medium",
          "position": "TE",
          "team": "New York",
          "teamId": "nyj",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4808766.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Jeremy Ruckert",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "TE",
          "team": "New York",
          "teamId": "nyj",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361372.png"
        }
      }
    ]
  },
  {
    "id": "phi",
    "name": "Philadelphia Eagles",
    "city": "Philadelphia",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Jalen Hurts",
          "college": "Oklahoma",
          "difficulty": "easy",
          "position": "QB",
          "team": "Philadelphia",
          "teamId": "phi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Saquon Barkley",
          "college": "Penn State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Philadelphia",
          "teamId": "phi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Tank Bigsby",
          "college": "Auburn",
          "difficulty": "medium",
          "position": "RB",
          "team": "Philadelphia",
          "teamId": "phi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429013.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "A.J. Brown",
          "college": "Ole Miss",
          "difficulty": "medium",
          "position": "WR",
          "team": "Philadelphia",
          "teamId": "phi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "DeVonta Smith",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "WR",
          "team": "Philadelphia",
          "teamId": "phi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4241478.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Jahan Dotson",
          "college": "Penn State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Philadelphia",
          "teamId": "phi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361409.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Dallas Goedert",
          "college": "South Dakota State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Philadelphia",
          "teamId": "phi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Grant Calcaterra",
          "college": "SMU",
          "difficulty": "medium",
          "position": "TE",
          "team": "Philadelphia",
          "teamId": "phi",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4241374.png"
        }
      }
    ]
  },
  {
    "id": "ari",
    "name": "Arizona Cardinals",
    "city": "Arizona",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Jacoby Brissett",
          "college": "NC State",
          "difficulty": "easy",
          "position": "QB",
          "team": "Arizona",
          "teamId": "ari",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Bam Knight",
          "college": "NC State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Arizona",
          "teamId": "ari",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4427728.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Emari Demercado",
          "college": "TCU",
          "difficulty": "medium",
          "position": "RB",
          "team": "Arizona",
          "teamId": "ari",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4362478.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Marvin Harrison Jr.",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Arizona",
          "teamId": "ari",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4432708.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Michael Wilson",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "WR",
          "team": "Arizona",
          "teamId": "ari",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360761.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Greg Dortch",
          "college": "Wake Forest",
          "difficulty": "medium",
          "position": "WR",
          "team": "Arizona",
          "teamId": "ari",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4037235.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Trey McBride",
          "college": "Colorado State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Arizona",
          "teamId": "ari",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361307.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Elijah Higgins",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "TE",
          "team": "Arizona",
          "teamId": "ari",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426844.png"
        }
      }
    ]
  },
  {
    "id": "pit",
    "name": "Pittsburgh Steelers",
    "city": "Pittsburgh",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Aaron Rodgers",
          "college": "California",
          "difficulty": "easy",
          "position": "QB",
          "team": "Pittsburgh",
          "teamId": "pit",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Jaylen Warren",
          "college": "Oklahoma State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Pittsburgh",
          "teamId": "pit",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4569987.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Kenneth Gainwell",
          "college": "Memphis",
          "difficulty": "medium",
          "position": "RB",
          "team": "Pittsburgh",
          "teamId": "pit",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4371733.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "DK Metcalf",
          "college": "Ole Miss",
          "difficulty": "medium",
          "position": "WR",
          "team": "Pittsburgh",
          "teamId": "pit",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Calvin Austin III",
          "college": "Memphis",
          "difficulty": "medium",
          "position": "WR",
          "team": "Pittsburgh",
          "teamId": "pit",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4243389.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Roman Wilson",
          "college": "Michigan",
          "difficulty": "medium",
          "position": "WR",
          "team": "Pittsburgh",
          "teamId": "pit",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4431492.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Darnell Washington",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "TE",
          "team": "Pittsburgh",
          "teamId": "pit",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4430802.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Jonnu Smith",
          "college": "Florida International",
          "difficulty": "medium",
          "position": "TE",
          "team": "Pittsburgh",
          "teamId": "pit",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png"
        }
      }
    ]
  },
  {
    "id": "lac",
    "name": "Los Angeles Chargers",
    "city": "Los Angeles",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Justin Herbert",
          "college": "Oregon",
          "difficulty": "easy",
          "position": "QB",
          "team": "Los Angeles",
          "teamId": "lac",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4038941.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Kimani Vidal",
          "college": "Troy",
          "difficulty": "medium",
          "position": "RB",
          "team": "Los Angeles",
          "teamId": "lac",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4430968.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Jaret Patterson",
          "college": "Buffalo",
          "difficulty": "medium",
          "position": "RB",
          "team": "Los Angeles",
          "teamId": "lac",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4362452.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Ladd McConkey",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "WR",
          "team": "Los Angeles",
          "teamId": "lac",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4612826.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Quentin Johnston",
          "college": "TCU",
          "difficulty": "medium",
          "position": "WR",
          "team": "Los Angeles",
          "teamId": "lac",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429025.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Keenan Allen",
          "college": "California",
          "difficulty": "medium",
          "position": "WR",
          "team": "Los Angeles",
          "teamId": "lac",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Oronde Gadsden II",
          "college": "Syracuse",
          "difficulty": "medium",
          "position": "TE",
          "team": "Los Angeles",
          "teamId": "lac",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4595342.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Tucker Fisk",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "TE",
          "team": "Los Angeles",
          "teamId": "lac",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4242558.png"
        }
      }
    ]
  },
  {
    "id": "sf",
    "name": "San Francisco 49ers",
    "city": "San Francisco",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Brock Purdy",
          "college": "Iowa State",
          "difficulty": "easy",
          "position": "QB",
          "team": "San Francisco",
          "teamId": "sf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361741.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Christian McCaffrey",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "RB",
          "team": "San Francisco",
          "teamId": "sf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Brian Robinson Jr.",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "RB",
          "team": "San Francisco",
          "teamId": "sf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4241474.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Jauan Jennings",
          "college": "Tennessee",
          "difficulty": "medium",
          "position": "WR",
          "team": "San Francisco",
          "teamId": "sf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3886598.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Ricky Pearsall",
          "college": "Florida",
          "difficulty": "medium",
          "position": "WR",
          "team": "San Francisco",
          "teamId": "sf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4428209.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Demarcus Robinson",
          "college": "Florida",
          "difficulty": "medium",
          "position": "WR",
          "team": "San Francisco",
          "teamId": "sf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3043116.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "George Kittle",
          "college": "Iowa",
          "difficulty": "medium",
          "position": "TE",
          "team": "San Francisco",
          "teamId": "sf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Luke Farrell",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "TE",
          "team": "San Francisco",
          "teamId": "sf",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4040612.png"
        }
      }
    ]
  },
  {
    "id": "sea",
    "name": "Seattle Seahawks",
    "city": "Seattle",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Sam Darnold",
          "college": "USC",
          "difficulty": "easy",
          "position": "QB",
          "team": "Seattle",
          "teamId": "sea",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Kenneth Walker III",
          "college": "Michigan State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Seattle",
          "teamId": "sea",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4567048.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Zach Charbonnet",
          "college": "UCLA",
          "difficulty": "medium",
          "position": "RB",
          "team": "Seattle",
          "teamId": "sea",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426385.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Jaxon Smith-Njigba",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Seattle",
          "teamId": "sea",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4430878.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Cooper Kupp",
          "college": "Eastern Washington",
          "difficulty": "medium",
          "position": "WR",
          "team": "Seattle",
          "teamId": "sea",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Rashid Shaheed",
          "college": "Weber State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Seattle",
          "teamId": "sea",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4032473.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "AJ Barner",
          "college": "Michigan",
          "difficulty": "medium",
          "position": "TE",
          "team": "Seattle",
          "teamId": "sea",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4576297.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Elijah Arroyo",
          "college": "Miami",
          "difficulty": "medium",
          "position": "TE",
          "team": "Seattle",
          "teamId": "sea",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4678006.png"
        }
      }
    ]
  },
  {
    "id": "tb",
    "name": "Tampa Bay Buccaneers",
    "city": "Tampa Bay",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Baker Mayfield",
          "college": "Oklahoma",
          "difficulty": "easy",
          "position": "QB",
          "team": "Tampa Bay",
          "teamId": "tb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Bucky Irving",
          "college": "Oregon",
          "difficulty": "medium",
          "position": "RB",
          "team": "Tampa Bay",
          "teamId": "tb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4596448.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Rachaad White",
          "college": "Arizona State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Tampa Bay",
          "teamId": "tb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4697815.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Emeka Egbuka",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Tampa Bay",
          "teamId": "tb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4567750.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Chris Godwin Jr.",
          "college": "Penn State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Tampa Bay",
          "teamId": "tb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Tez Johnson",
          "college": "Oregon",
          "difficulty": "medium",
          "position": "WR",
          "team": "Tampa Bay",
          "teamId": "tb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4608810.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Cade Otton",
          "college": "Washington",
          "difficulty": "medium",
          "position": "TE",
          "team": "Tampa Bay",
          "teamId": "tb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4243331.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Payne Durham",
          "college": "Purdue",
          "difficulty": "medium",
          "position": "TE",
          "team": "Tampa Bay",
          "teamId": "tb",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4372505.png"
        }
      }
    ]
  },
  {
    "id": "wsh",
    "name": "Washington Commanders",
    "city": "Washington",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Jayden Daniels",
          "college": "LSU",
          "difficulty": "easy",
          "position": "QB",
          "team": "Washington",
          "teamId": "wsh",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426348.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Chris Rodriguez Jr.",
          "college": "Kentucky",
          "difficulty": "medium",
          "position": "RB",
          "team": "Washington",
          "teamId": "wsh",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4362619.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Jeremy McNichols",
          "college": "Boise State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Washington",
          "teamId": "wsh",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3127586.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Terry McLaurin",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Washington",
          "teamId": "wsh",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Deebo Samuel",
          "college": "South Carolina",
          "difficulty": "medium",
          "position": "WR",
          "team": "Washington",
          "teamId": "wsh",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Treylon Burks",
          "college": "Arkansas",
          "difficulty": "medium",
          "position": "WR",
          "team": "Washington",
          "teamId": "wsh",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4567156.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Zach Ertz",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "TE",
          "team": "Washington",
          "teamId": "wsh",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "John Bates",
          "college": "Boise State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Washington",
          "teamId": "wsh",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4048228.png"
        }
      }
    ]
  },
  {
    "id": "car",
    "name": "Carolina Panthers",
    "city": "Carolina",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Bryce Young",
          "college": "Alabama",
          "difficulty": "easy",
          "position": "QB",
          "team": "Carolina",
          "teamId": "car",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4685720.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Rico Dowdle",
          "college": "South Carolina",
          "difficulty": "medium",
          "position": "RB",
          "team": "Carolina",
          "teamId": "car",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4038815.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Chuba Hubbard",
          "college": "Oklahoma State",
          "difficulty": "medium",
          "position": "RB",
          "team": "Carolina",
          "teamId": "car",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4241416.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Tetairoa McMillan",
          "college": "Arizona",
          "difficulty": "medium",
          "position": "WR",
          "team": "Carolina",
          "teamId": "car",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4685472.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Xavier Legette",
          "college": "South Carolina",
          "difficulty": "medium",
          "position": "WR",
          "team": "Carolina",
          "teamId": "car",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4430034.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Jalen Coker",
          "college": "Holy Cross",
          "difficulty": "medium",
          "position": "WR",
          "team": "Carolina",
          "teamId": "car",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4695883.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Tommy Tremble",
          "college": "Notre Dame",
          "difficulty": "medium",
          "position": "TE",
          "team": "Carolina",
          "teamId": "car",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4372780.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Ja'Tavion Sanders",
          "college": "Texas",
          "difficulty": "medium",
          "position": "TE",
          "team": "Carolina",
          "teamId": "car",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4431588.png"
        }
      }
    ]
  },
  {
    "id": "jax",
    "name": "Jacksonville Jaguars",
    "city": "Jacksonville",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Trevor Lawrence",
          "college": "Clemson",
          "difficulty": "easy",
          "position": "QB",
          "team": "Jacksonville",
          "teamId": "jax",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360310.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Travis Etienne Jr.",
          "college": "Clemson",
          "difficulty": "medium",
          "position": "RB",
          "team": "Jacksonville",
          "teamId": "jax",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4239996.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Bhayshul Tuten",
          "college": "Virginia Tech",
          "difficulty": "medium",
          "position": "RB",
          "team": "Jacksonville",
          "teamId": "jax",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4882093.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Brian Thomas Jr.",
          "college": "LSU",
          "difficulty": "medium",
          "position": "WR",
          "team": "Jacksonville",
          "teamId": "jax",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4432773.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Jakobi Meyers",
          "college": "NC State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Jacksonville",
          "teamId": "jax",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Parker Washington",
          "college": "Penn State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Jacksonville",
          "teamId": "jax",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4432620.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Brenton Strange",
          "college": "Penn State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Jacksonville",
          "teamId": "jax",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4430539.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Johnny Mundt",
          "college": "Oregon",
          "difficulty": "medium",
          "position": "TE",
          "team": "Jacksonville",
          "teamId": "jax",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3052096.png"
        }
      }
    ]
  },
  {
    "id": "bal",
    "name": "Baltimore Ravens",
    "city": "Baltimore",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "Lamar Jackson",
          "college": "Louisville",
          "difficulty": "easy",
          "position": "QB",
          "team": "Baltimore",
          "teamId": "bal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Derrick Henry",
          "college": "Alabama",
          "difficulty": "medium",
          "position": "RB",
          "team": "Baltimore",
          "teamId": "bal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Rasheen Ali",
          "college": "Marshall",
          "difficulty": "medium",
          "position": "RB",
          "team": "Baltimore",
          "teamId": "bal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4690013.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Zay Flowers",
          "college": "Boston College",
          "difficulty": "medium",
          "position": "WR",
          "team": "Baltimore",
          "teamId": "bal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429615.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Rashod Bateman",
          "college": "Minnesota",
          "difficulty": "medium",
          "position": "WR",
          "team": "Baltimore",
          "teamId": "bal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4360939.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "DeAndre Hopkins",
          "college": "Clemson",
          "difficulty": "medium",
          "position": "WR",
          "team": "Baltimore",
          "teamId": "bal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Mark Andrews",
          "college": "Oklahoma",
          "difficulty": "medium",
          "position": "TE",
          "team": "Baltimore",
          "teamId": "bal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Isaiah Likely",
          "college": "Coastal Carolina",
          "difficulty": "medium",
          "position": "TE",
          "team": "Baltimore",
          "teamId": "bal",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4361050.png"
        }
      }
    ]
  },
  {
    "id": "hou",
    "name": "Houston Texans",
    "city": "Houston",
    "offense": [
      {
        "position": "QB",
        "player": {
          "name": "C.J. Stroud",
          "college": "Ohio State",
          "difficulty": "easy",
          "position": "QB",
          "team": "Houston",
          "teamId": "hou",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4432577.png"
        }
      },
      {
        "position": "RB",
        "player": {
          "name": "Woody Marks",
          "college": "USC",
          "difficulty": "medium",
          "position": "RB",
          "team": "Houston",
          "teamId": "hou",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4429059.png"
        }
      },
      {
        "position": "RB2",
        "player": {
          "name": "Nick Chubb",
          "college": "Georgia",
          "difficulty": "medium",
          "position": "RB",
          "team": "Houston",
          "teamId": "hou",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png"
        }
      },
      {
        "position": "WR1",
        "player": {
          "name": "Nico Collins",
          "college": "Michigan",
          "difficulty": "medium",
          "position": "WR",
          "team": "Houston",
          "teamId": "hou",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4258173.png"
        }
      },
      {
        "position": "WR2",
        "player": {
          "name": "Jayden Higgins",
          "college": "Iowa State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Houston",
          "teamId": "hou",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4877706.png"
        }
      },
      {
        "position": "WR3",
        "player": {
          "name": "Xavier Hutchinson",
          "college": "Iowa State",
          "difficulty": "medium",
          "position": "WR",
          "team": "Houston",
          "teamId": "hou",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4686422.png"
        }
      },
      {
        "position": "TE",
        "player": {
          "name": "Dalton Schultz",
          "college": "Stanford",
          "difficulty": "medium",
          "position": "TE",
          "team": "Houston",
          "teamId": "hou",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/3117256.png"
        }
      },
      {
        "position": "TE2",
        "player": {
          "name": "Cade Stover",
          "college": "Ohio State",
          "difficulty": "medium",
          "position": "TE",
          "team": "Houston",
          "teamId": "hou",
          "headshot_url": "https://a.espncdn.com/i/headshots/nfl/players/full/4426496.png"
        }
      }
    ]
  }
];

// Flattened list of all players for easy access
export const allPlayers: Player[] = teams.flatMap(team =>
  team.offense.map(slot => slot.player)
);
