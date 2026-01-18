import requests
import re
import json
import os

def scrape_videos():
    print("Fetching latest China Travel videos from YouTube...")
    
    # Use a realistic User-Agent to avoid immediate blocking
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    # Search for "China Travel guide" to get relevant content
    url = "https://www.youtube.com/results?search_query=China+Travel+Guide"
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        html = response.text
        
        # Extract the JSON blob containing the video data
        # ytInitialData is embedded in a script tag
        match = re.search(r'var ytInitialData = ({.*?});', html)
        if not match:
            print("Could not find video data on YouTube page.")
            return

        data = json.loads(match.group(1))
        
        # Navigate through the deeply nested JSON structure
        # contents -> twoColumnSearchResultsRenderer -> primaryContents -> sectionListRenderer -> contents -> itemSectionRenderer -> contents -> videoRenderer
        videos = []
        
        try:
            contents = data['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']['contents']
            
            for section in contents:
                if 'itemSectionRenderer' in section:
                    for item in section['itemSectionRenderer']['contents']:
                        if 'videoRenderer' in item:
                            video = item['videoRenderer']
                            
                            video_id = video['videoId']
                            title = video['title']['runs'][0]['text']
                            
                            # Get the best available thumbnail
                            thumbnails = video['thumbnail']['thumbnails']
                            thumbnail_url = thumbnails[-1]['url'] # Usually the largest one
                            
                            # Description snippet (optional)
                            description = ""
                            if 'detailedMetadataSnippets' in video:
                                description = video['detailedMetadataSnippets'][0]['snippetText']['runs'][0]['text']
                            elif 'descriptionSnippet' in video:
                                for run in video['descriptionSnippet']['runs']:
                                    description += run['text']
                            
                            # Limit description length
                            if len(description) > 150:
                                description = description[:147] + "..."
                                
                            if not description:
                                description = "Explore this amazing destination in China!"

                            videos.append({
                                "id": video_id, # Use YouTube ID as our ID for simplicity
                                "title": title.replace('"', '\\"'), # Escape quotes
                                "thumbnail": thumbnail_url,
                                "youtubeId": video_id,
                                "description": description.replace('"', '\\"').replace('\n', ' ')
                            })
                            
                            if len(videos) >= 12: # Limit to top 12 videos
                                break
                    if len(videos) >= 12:
                        break
                        
        except KeyError as e:
            print(f"Error parsing YouTube JSON structure: {e}")
            return

        if not videos:
            print("No videos found.")
            return

        # Write to src/data/videos.js
        output_path = os.path.join("src", "data", "videos.js")
        
        js_content = "export default [\n"
        for video in videos:
            js_content += "  {\n"
            js_content += f'    "id": "{video["id"]}",\n'
            js_content += f'    "title": "{video["title"]}",\n'
            js_content += f'    "thumbnail": "{video["thumbnail"]}",\n'
            js_content += f'    "youtubeId": "{video["youtubeId"]}",\n'
            js_content += f'    "description": "{video["description"]}"\n'
            js_content += "  },\n"
        js_content += "];\n"
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(js_content)
            
        print(f"Successfully scraped {len(videos)} videos and saved to {output_path}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    scrape_videos()
