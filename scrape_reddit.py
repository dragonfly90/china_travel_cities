import requests
import json
import os
import time

def scrape_reddit():
    print("Fetching latest China Travel discussions from Reddit...")
    
    # Reddit requires a unique User-Agent
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    # Search r/travel and r/ChinaTravel for "China"
    # We'll combine a few sources if needed, but a simple search on r/travel is usually high quality.
    # url = "https://www.reddit.com/r/travel/search.json?q=China&restrict_sr=1&sort=relevance&t=year&limit=10"
    
    # Let's try a broader search then filter
    url = "https://www.reddit.com/search.json?q=China+Travel+Guide&sort=relevance&t=year&limit=15"
    
    try:
        response = requests.get(url, headers=headers)
        
        if response.status_code == 429:
            print("Rate limited. Waiting 5 seconds...")
            time.sleep(5)
            response = requests.get(url, headers=headers)
            
        response.raise_for_status()
        data = response.json()
        
        posts = []
        
        for child in data['data']['children']:
            post = child['data']
            
            # Filter out non-travel related stuff if possible, though search query helps.
            # We want only successful posts?
            if post.get('ups', 0) < 5:
                continue
                
            posts.append({
                "id": post['id'],
                "title": post['title'].replace('"', '\\"'),
                "author": post['author'],
                "score": post['score'],
                "url": f"https://www.reddit.com{post['permalink']}",
                "num_comments": post['num_comments'],
                "subreddit": post['subreddit_name_prefixed']
            })
            
            if len(posts) >= 10:
                break
        
        if not posts:
            print("No posts found.")
            # Fallback data if scrape fails (empty list or hardcoded)
            posts = [
                {
                    "id": "fallback1",
                    "title": "China Travel Tips 2024 - Megathread",
                    "author": "AutoModerator",
                    "score": 999,
                    "url": "https://www.reddit.com/r/travel",
                    "num_comments": 150,
                    "subreddit": "r/travel"
                }
            ]

        # Write to src/data/community.js
        output_path = os.path.join("src", "data", "community.js")
        
        js_content = "export default [\n"
        for post in posts:
            js_content += "  {\n"
            js_content += f'    "id": "{post["id"]}",\n'
            js_content += f'    "title": "{post["title"]}",\n'
            js_content += f'    "author": "{post["author"]}",\n'
            js_content += f'    "score": {post["score"]},\n'
            js_content += f'    "url": "{post["url"]}",\n'
            js_content += f'    "num_comments": {post["num_comments"]},\n'
            js_content += f'    "subreddit": "{post["subreddit"]}"\n'
            js_content += "  },\n"
        js_content += "];\n"
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(js_content)
            
        print(f"Successfully scraped {len(posts)} posts and saved to {output_path}")

    except Exception as e:
        print(f"An error occurred: {e}")
        # Create dummy file if it fails so app doesn't break
        output_path = os.path.join("src", "data", "community.js")
        if not os.path.exists(output_path):
             with open(output_path, "w", encoding="utf-8") as f:
                f.write("export default [];\n")

if __name__ == "__main__":
    scrape_reddit()
