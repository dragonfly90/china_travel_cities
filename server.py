import http.server
import socketserver
import os
import json

PORT = 8000
VISITS_FILE = "visits.txt"

def get_visits():
    if not os.path.exists(VISITS_FILE):
        return 0
    with open(VISITS_FILE, "r") as f:
        try:
            return int(f.read().strip())
        except ValueError:
            return 0

def increment_visits():
    count = get_visits() + 1
    with open(VISITS_FILE, "w") as f:
        f.write(str(count))
    return count

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/visits':
            # Increment and return visits
            count = increment_visits()
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"visits": count}).encode())
        else:
            # Serve static files
            # If path is root or not a file, serve index.html for SPA routing
            if self.path == '/' or not os.path.exists(os.path.join(os.getcwd(), self.path.lstrip('/'))):
                 if not self.path.startswith('/src') and not self.path.startswith('/public') and not self.path.startswith('/node_modules'):
                    self.path = '/index.html'
            
            return http.server.SimpleHTTPRequestHandler.do_GET(self)

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
