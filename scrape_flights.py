
import json
import datetime
from datetime import timedelta

def generate_flight_deals():
    print("Checking flight routes from SFO to China...")
    
    # Configuration
    origin = "SFO"
    destinations = [
        {"code": "PEK", "city": "Beijing", "image": "./public/images/beijing_great_wall_1766986793824.png"},
        {"code": "PVG", "city": "Shanghai", "image": "./public/images/shanghai_bund_1766986928821.png"},
        {"code": "HKG", "city": "Hong Kong", "image": "https://images.unsplash.com/photo-1506318137071-a8bcbf90d346?auto=format&fit=crop&w=800&q=80"}, 
        {"code": "TFU", "city": "Chengdu", "image": "./public/images/chengdu_panda_1766987114674.png"}
    ]
    
    # Calculate dates: shoulder season (approx 3 months out)
    today = datetime.date.today()
    depart_date = today + timedelta(days=90)
    return_date = depart_date + timedelta(days=14)
    
    # Format dates for URLs
    # Kayak/Google Flights format: YYYY-MM-DD
    str_depart = depart_date.strftime("%Y-%m-%d")
    str_return = return_date.strftime("%Y-%m-%d")
    
    deals = []
    
    for dest in destinations:
        # Construct Google Flights URL
        # https://www.google.com/travel/flights?q=Flights%20to%20PEK%20from%20SFO%20on%202024-05-01%20through%202024-05-15
        google_url = f"https://www.google.com/travel/flights?q=Flights%20to%20{dest['code']}%20from%20{origin}%20on%20{str_depart}%20through%20{str_return}"
        
        # Construct Skyscanner URL (approximate format, often redirects to search)
        # https://www.skyscanner.com/transport/flights/sfo/pek/240501/240515/
        skyscanner_date_out = depart_date.strftime("%y%m%d")
        skyscanner_date_in = return_date.strftime("%y%m%d")
        skyscanner_url = f"https://www.skyscanner.com/transport/flights/{origin.lower()}/{dest['code'].lower()}/{skyscanner_date_out}/{skyscanner_date_in}/"
        
        # Mock "Benchmark" Price
        benchmark = 950
        if dest['code'] == "HKG": benchmark = 850
        if dest['code'] == "TFU": benchmark = 1100
        
        deals.append({
            "origin": origin,
            "destination": dest['city'],
            "code": dest['code'],
            "dates": f"{depart_date.strftime('%b %d')} - {return_date.strftime('%b %d, %Y')}",
            "benchmarkPrice": benchmark,
            "image": dest['image'],
            "links": {
                "google": google_url,
                "skyscanner": skyscanner_url
            }
        })
        
    js_content = "export default " + json.dumps(deals, indent=2) + ";"
    
    with open('src/data/flights.js', 'w') as f:
        f.write(js_content)
        
    print(f"Generated {len(deals)} flight search configurations to src/data/flights.js")

if __name__ == "__main__":
    generate_flight_deals()
