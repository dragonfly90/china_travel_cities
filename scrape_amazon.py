import requests
from bs4 import BeautifulSoup
import json
import time

def scrape_amazon():
    search_query = "china+travel+essentials"
    url = f"https://www.amazon.com/s?k={search_query}"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    products = []
    
    try:
        print(f"Scraping {url}...")
        response = requests.get(url, headers=headers, timeout=10)
        
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            results = soup.find_all('div', {'data-component-type': 's-search-result'})
            
            for item in results[:12]: # Limit to 12 items
                try:
                    title_tag = item.find('h2')
                    if not title_tag: continue
                    title = title_tag.text.strip()
                    
                    # Image
                    img = item.find('img', {'class': 's-image'})
                    image_url = img['src'] if img else ''
                    
                    # Link
                    link_tag = item.find('a', {'class': 'a-link-normal'})
                    link = "https://www.amazon.com" + link_tag['href'] if link_tag else ''
                    
                    # Price
                    price_whole = item.find('span', {'class': 'a-price-whole'})
                    price_fraction = item.find('span', {'class': 'a-price-fraction'})
                    price = "N/A"
                    if price_whole:
                        price = "$" + price_whole.text.strip()
                        if price_fraction:
                            price += "." + price_fraction.text.strip()
                    
                    if title and link and image_url:
                        products.append({
                            'title': title,
                            'image': image_url,
                            'price': price,
                            'link': link
                        })
                except Exception as e:
                    continue
        else:
            print(f"Failed to scrape (status code: {response.status_code})")

    except Exception as e:
        print(f"Error scraping: {e}")

    # Fallback if blocked or no results found
    if not products:
        print("Using fallback data (Scraper blocked or no results).")
        products = [
            {
                "title": "Universal Travel Power Adapter",
                "image": "https://m.media-amazon.com/images/I/61+4T2-O4mL._AC_SL1500_.jpg",
                "price": "$19.99",
                "link": "https://www.amazon.com/s?k=universal+travel+adapter"
            },
            {
                "title": "Travel Neck Pillow Memory Foam",
                "image": "https://m.media-amazon.com/images/I/71w-1tB1KBL._AC_SL1500_.jpg",
                "price": "$24.99",
                "link": "https://www.amazon.com/s?k=travel+neck+pillow"
            },
             {
                "title": "Portable Charger 10000mAh",
                "image": "https://m.media-amazon.com/images/I/71R3y-eWJ+L._AC_SL1500_.jpg",
                "price": "$29.99",
                "link": "https://www.amazon.com/s?k=power+bank"
            },
            {
                "title": "Compression Packing Cubes",
                "image": "https://m.media-amazon.com/images/I/71Xg+K-vEEL._AC_SL1500_.jpg",
                "price": "$15.99",
                "link": "https://www.amazon.com/s?k=packing+cubes"
            },
             {
                "title": "Portable Luggage Scale",
                "image": "https://m.media-amazon.com/images/I/71+y-J+Q-JL._AC_SL1500_.jpg",
                "price": "$9.99",
                "link": "https://www.amazon.com/s?k=luggage+scale"
            },
            {
                "title": "Refillable Travel Bottles",
                "image": "https://m.media-amazon.com/images/I/61g-w+v+x+L._AC_SL1500_.jpg",
                "price": "$12.99",
                "link": "https://www.amazon.com/s?k=travel+bottles"
            }
        ]

    # ensure data dir exists
    import os
    os.makedirs('src/data', exist_ok=True)
    
    with open('src/data/products.js', 'w') as f:
        # Write as valid JavaScript export
        f.write("export default ")
        json.dump(products, f, indent=2)
        f.write(";")
        
    print(f"Successfully saved {len(products)} products to src/data/products.js")

if __name__ == "__main__":
    scrape_amazon()
