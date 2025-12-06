import json

def inspect():
    with open('debug_api_response.json', 'r') as f:
        data = json.load(f)
    
    print(f"Team: {data.get('team', {}).get('displayName')}")
    
    dcs = data.get('depthchart', [])
    print(f"Depth Charts found: {len(dcs)}")
    
    for i, dc in enumerate(dcs):
        print(f"\n--- Depth Chart {i+1} ---")
        print(f"Name: {dc.get('name')}")
        positions = dc.get('positions', {})
        print(f"Positions: {list(positions.keys())}")
        
        # Check for QB
        if 'qb' in positions:
            print("FOUND QB!")
            athletes = positions['qb'].get('athletes', [])
            for a in athletes:
                print(f"  QB: {a.get('displayName')}")

if __name__ == "__main__":
    inspect()
