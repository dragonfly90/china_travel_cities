# China Travel Guide

A modern, interactive travel guide for China, featuring popular destinations, travel tips, and cultural insights.

## Features
- **Destinations**: Detailed guides for major cities like Beijing, Shanghai, Xi'an, Suzhou, and Xiamen.
- **Travel Tips**: Essential information on visas, transport, and apps.
- **Competitor Analysis**: Curated list of trusted travel resources.
- **Responsive Design**: Works on desktop and mobile.

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/dragonfly90/china_travel_cities.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server (with visit counter):
   ```bash
   python3 server.py
   ```
   Open http://localhost:8000

## Deployment (GitHub Pages)

This project is ready for GitHub Pages.

1. Go to **Settings** > **Pages** in your GitHub repository.
2. Under **Source**, select `main` branch and `/ (root)` folder.
3. Click **Save**.
4. Your site will be live at `https://dragonfly90.github.io/china_travel_cities/`.

> **Note**: The visit counter will show "N/A (Static)" on GitHub Pages because it requires a backend server.
