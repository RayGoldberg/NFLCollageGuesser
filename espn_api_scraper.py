"""
ESPN API Scraper - Uses ESPN's unofficial API to get NFL team data

Gets depth chart and roster data for all NFL teams:
- First QB
- First 3 WRs  
- First 2 RBs
- First 2 TEs

For each player: name, college, headshot URL
"""

import requests
import json
import time

# NFL Team IDs (ESPN uses numeric IDs)
NFL_TEAMS = {
    1: {'abbr': 'atl', 'name': 'Atlanta Falcons'},
    2: {'abbr': 'buf', 'name': 'Buffalo Bills'},
    3: {'abbr': 'chi', 'name': 'Chicago Bears'},
    4: {'abbr': 'cin', 'name': 'Cincinnati Bengals'},
    5: {'abbr': 'cle', 'name': 'Cleveland Browns'},
    6: {'abbr': 'dal', 'name': 'Dallas Cowboys'},
    7: {'abbr': 'den', 'name': 'Denver Broncos'},
    8: {'abbr': 'det', 'name': 'Detroit Lions'},
    9: {'abbr': 'gb', 'name': 'Green Bay Packers'},
    10: {'abbr': 'ten', 'name': 'Tennessee Titans'},
    11: {'abbr': 'ind', 'name': 'Indianapolis Colts'},
    12: {'abbr': 'kc', 'name': 'Kansas City Chiefs'},
    13: {'abbr': 'lv', 'name': 'Las Vegas Raiders'},
    14: {'abbr': 'lar', 'name': 'Los Angeles Rams'},
    15: {'abbr': 'mia', 'name': 'Miami Dolphins'},
    16: {'abbr': 'min', 'name': 'Minnesota Vikings'},
    17: {'abbr': 'ne', 'name': 'New England Patriots'},
    18: {'abbr': 'no', 'name': 'New Orleans Saints'},
    19: {'abbr': 'nyg', 'name': 'New York Giants'},
    20: {'abbr': 'nyj', 'name': 'New York Jets'},
    21: {'abbr': 'phi', 'name': 'Philadelphia Eagles'},
    22: {'abbr': 'ari', 'name': 'Arizona Cardinals'},
    23: {'abbr': 'pit', 'name': 'Pittsburgh Steelers'},
    24: {'abbr': 'lac', 'name': 'Los Angeles Chargers'},
    25: {'abbr': 'sf', 'name': 'San Francisco 49ers'},
    26: {'abbr': 'sea', 'name': 'Seattle Seahawks'},
    27: {'abbr': 'tb', 'name': 'Tampa Bay Buccaneers'},
    28: {'abbr': 'wsh', 'name': 'Washington Commanders'},
    29: {'abbr': 'car', 'name': 'Carolina Panthers'},
    30: {'abbr': 'jax', 'name': 'Jacksonville Jaguars'},
    33: {'abbr': 'bal', 'name': 'Baltimore Ravens'},
    34: {'abbr': 'hou', 'name': 'Houston Texans'},
}


def get_team_depth_chart(team_id):
    """Get depth chart for a team"""
    url = f"https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/{team_id}/depthcharts"
    
    try:
        response = requests.get(url, headers={'Accept': 'application/json'})
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching depth chart for team {team_id}: {e}")
        return None


def get_team_roster(team_id):
    """Get roster for a team"""
    url = f"https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/{team_id}/roster"
    
    try:
        response = requests.get(url, headers={'Accept': 'application/json'})
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching roster for team {team_id}: {e}")
        return None


def extract_depth_chart_positions(depth_chart_data):
    """Extract QB, RB, WR, TE from depth chart"""
    positions = {
        'QB': [],
        'RB': [],
        'WR': [],
        'TE': []
    }
    
    if not depth_chart_data or 'depthchart' not in depth_chart_data:
        return positions
    
    # Iterate through all depth charts (Offense, Defense, Special Teams)
    for dc in depth_chart_data.get('depthchart', []):
        dc_positions = dc.get('positions', {})
        
        # Check if this is the offensive depth chart (contains 'qb')
        if 'qb' in dc_positions:
            # Extract QB
            if 'qb' in dc_positions:
                athletes = dc_positions['qb'].get('athletes', [])
                positions['QB'] = [a.get('displayName') for a in athletes[:1]]
            
            # Extract RB
            if 'rb' in dc_positions:
                athletes = dc_positions['rb'].get('athletes', [])
                positions['RB'] = [a.get('displayName') for a in athletes[:2]]
            
            # Extract WRs (wr1, wr2, wr3)
            wr_list = []
            for key in ['wr1', 'wr2', 'wr3']:
                if key in dc_positions:
                    athletes = dc_positions[key].get('athletes', [])
                    if athletes:
                        wr_list.append(athletes[0].get('displayName'))
            positions['WR'] = wr_list[:3]
            
            # Extract TE
            if 'te' in dc_positions:
                athletes = dc_positions['te'].get('athletes', [])
                positions['TE'] = [a.get('displayName') for a in athletes[:2]]
            
            # Found the offense, no need to check other charts
            break
            
    return positions


def build_roster_map(roster_data):
    """Build a map of player name -> {college, headshot}"""
    roster_map = {}
    
    if not roster_data or 'athletes' not in roster_data:
        return roster_map
    
    # Roster data is grouped by position (offense, defense, special teams)
    for group in roster_data.get('athletes', []):
        for athlete in group.get('items', []):
            name = athlete.get('displayName')
            if not name:
                continue
            
            # Get college
            college = athlete.get('college', {}).get('name', '')
            
            # Get headshot
            headshot = athlete.get('headshot', {}).get('href', '')
            
            roster_map[name] = {
                'college': college,
                'headshot_url': headshot
            }
            # Also add lowercase version for matching
            roster_map[name.lower()] = {
                'college': college,
                'headshot_url': headshot
            }
    
    return roster_map


def match_player(name, roster_map):
    """Find player in roster map"""
    if name in roster_map:
        return roster_map[name]
    if name.lower() in roster_map:
        return roster_map[name.lower()]
    
    # Fuzzy match
    name_lower = name.lower()
    for key in roster_map:
        if name_lower in key or key in name_lower:
            return roster_map[key]
    
    return {'college': '', 'headshot_url': ''}


def scrape_team(team_id, team_info):
    """Scrape a single team"""
    print(f"\n{'='*60}")
    print(f"Processing {team_info['name']} (ID: {team_id})")
    print(f"{'='*60}")
    
    # Get depth chart
    depth_chart = get_team_depth_chart(team_id)
    if not depth_chart:
        print(f"  ❌ Failed to get depth chart")
        return None
    
    # Get roster
    roster = get_team_roster(team_id)
    if not roster:
        print(f"  ❌ Failed to get roster")
        return None
    
    # Extract positions from depth chart
    positions = extract_depth_chart_positions(depth_chart)
    print(f"  Depth Chart: QB={len(positions['QB'])}, RB={len(positions['RB'])}, WR={len(positions['WR'])}, TE={len(positions['TE'])}")
    
    # Build roster map
    roster_map = build_roster_map(roster)
    print(f"  Roster: {len(roster_map)//2} players indexed")
    
    # Build team data
    city = team_info['name'].rsplit(' ', 1)[0]
    team_data = {
        'id': team_info['abbr'],
        'name': team_info['name'],
        'city': city,
        'offense': []
    }
    
    def add_player(position_label, player_name, difficulty='medium'):
        info = match_player(player_name, roster_map)
        print(f"  ✓ {position_label}: {player_name} - {info['college']}")
        
        team_data['offense'].append({
            'position': position_label,
            'player': {
                'name': player_name,
                'college': info['college'],
                'difficulty': difficulty,
                'position': position_label.rstrip('123'),
                'team': city,
                'teamId': team_info['abbr'],
                'headshot_url': info['headshot_url']
            }
        })
    
    # Add players
    if positions['QB']:
        add_player('QB', positions['QB'][0], 'easy')
    
    for i, name in enumerate(positions['RB']):
        label = 'RB' if i == 0 else f'RB{i+1}'
        diff = 'medium' if i == 0 else 'hard'
        add_player(label, name, diff)
    
    for i, name in enumerate(positions['WR']):
        diff = 'medium' if i == 0 else 'hard'
        add_player(f'WR{i+1}', name, diff)
    
    for i, name in enumerate(positions['TE']):
        label = 'TE' if i == 0 else f'TE{i+1}'
        diff = 'medium' if i == 0 else 'hard'
        add_player(label, name, diff)
    
    return team_data


def main():
    """Main function"""
    print("ESPN API NFL Scraper")
    print("="*60)
    
    all_teams = []
    
    # Scrape all teams
    for team_id, team_info in NFL_TEAMS.items():
        team_data = scrape_team(team_id, team_info)
        
        if team_data:
            all_teams.append(team_data)
        
        # Be polite to the API
        time.sleep(1)
        
    # Save to file
    with open('nfl_teams_data.json', 'w', encoding='utf-8') as f:
        json.dump(all_teams, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*60}")
    print(f"✓ Successfully scraped {len(all_teams)} team(s)")
    print(f"✓ Data saved to: nfl_teams_data.json")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
