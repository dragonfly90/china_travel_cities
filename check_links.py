import re
import requests
import sys

def check_urls(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Regex to find image URLs
    urls = re.findall(r"image:\s*['\"](https?://[^'\"]+)['\"]", content)
    
    unique_urls = list(set(urls))
    print(f"Found {len(unique_urls)} unique URLs to check.")

    broken_urls = []
    
    for url in unique_urls:
        try:
            response = requests.head(url, timeout=5)
            if response.status_code != 200:
                print(f"[BROKEN] {response.status_code} - {url}")
                broken_urls.append(url)
            else:
                print(f"[OK] {url}")
        except requests.RequestException as e:
            print(f"[ERROR] {e} - {url}")
            broken_urls.append(url)

    if broken_urls:
        print(f"\nFound {len(broken_urls)} broken URLs.")
        sys.exit(1)
    else:
        print("\nAll URLs are valid.")
        sys.exit(0)

if __name__ == "__main__":
    check_urls('src/data/destinations.js')
