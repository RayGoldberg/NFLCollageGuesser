import requests
import json

def debug_roster():
    # Try the roster endpoint for Chiefs (ID 12)
    url = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/12/roster"
    print(f"Fetching {url}...")
    try:
        response = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        print(f"Status Code: {response.status_code}")
        data = response.json()
        print("Keys in response:", data.keys())
        
        # Save raw response to inspect
        with open('debug_roster_response.json', 'w') as f:
            json.dump(data, f, indent=2)
        print("Saved response to debug_roster_response.json")
        
        # Inspect structure
        if 'athletes' in data:
            print(f"Athletes found: {len(data['athletes'])}")
            if len(data['athletes']) > 0:
                print("First athlete:", json.dumps(data['athletes'][0], indent=2))
        else:
            print("'athletes' key not found at top level")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    debug_roster()
