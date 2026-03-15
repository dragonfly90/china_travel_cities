# 🇨🇳 China Travel Guide

> An interactive, bilingual (EN / 中文) travel guide covering China's most iconic cities — built with vanilla JavaScript and deployed on GitHub Pages.

🌐 **Live site:** [dragonfly90.github.io/china_travel_cities](https://dragonfly90.github.io/china_travel_cities/)

---

## Features

| Section | Description |
|---|---|
| 🏙️ **Destinations** | In-depth guides for 17 cities — main hubs and hidden gems |
| 🖋️ **Poetry Gallery** | Famous classical Chinese poems curated for each city, with English translations and cultural context |
| 🍜 **Food Guide** | Regional cuisines, street food, and dining tips |
| 🛂 **Visa Guide** | Up-to-date visa-free & transit policies for 2026 |
| 🗺️ **Trip Planner** | Drag-and-drop itinerary builder with cost estimates |
| 🎥 **Videos** | Curated YouTube travel videos for each destination |
| 👥 **Community** | Reddit & XHS (小红书) travel posts |
| 🏥 **Medical Tour** | Medical tourism packages and hospital guide |
| 🎒 **Gear** | Recommended travel gear sourced from Amazon |
| 🌐 **Bilingual** | Full English / Chinese language toggle throughout |

---

## Destinations Covered

**Main Cities**

Beijing · Shanghai · Xi'an · Chengdu · Chongqing · Hangzhou · Harbin · Suzhou · Xiamen · Guilin · Kunming · Zhangjiajie · Hainan

**Hidden Gems**

Dali · Yangshuo · Lijiang · Fenghuang

---

## Poetry Gallery

Each city page features a classical Chinese poem that captures its spirit — from Du Fu writing in Chengdu to Su Shi exiled on Hainan. The standalone `/poetry` gallery brings all 17 poems together with:

- Original Chinese verse
- English translation
- Author & dynasty
- Cultural context note in both languages

| City | Poem | Poet |
|---|---|---|
| Beijing | 沁园春·雪 | 毛泽东 |
| Shanghai | 春江花月夜 | 张若虚 |
| Xi'an | 出塞 | 王昌龄 |
| Chengdu | 春夜喜雨 | 杜甫 |
| Chongqing | 早发白帝城 | 李白 |
| Hangzhou | 饮湖上初晴后雨 | 苏轼 |
| Harbin | 白雪歌送武判官归京 | 岑参 |
| Suzhou | 枫桥夜泊 | 张继 |
| Xiamen | 次北固山下 | 王湾 |
| Guilin | 送桂州严大夫 | 韩愈 |
| Kunming | 临江仙·滚滚长江东逝水 | 杨慎 |
| Zhangjiajie | 望天门山 | 李白 |
| Hainan | 六月二十日夜渡海 | 苏轼 |
| Dali | 山居秋暝 | 王维 |
| Yangshuo | 江雪 | 柳宗元 |
| Lijiang | 长相思·山一程 | 纳兰性德 |
| Fenghuang | 梦江南·千万恨 | 温庭筠 |

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/dragonfly90/china_travel_cities.git
cd china_travel_cities

# 2. Install dependencies
npm install

# 3. Run dev server (includes visit counter API)
python3 server.py
# → Open http://localhost:8000
```

---

## Deployment (GitHub Pages)

1. Go to **Settings → Pages** in your GitHub repository
2. Under **Source**, select `main` branch and `/ (root)` folder
3. Click **Save**
4. Live at: `https://dragonfly90.github.io/china_travel_cities/`

> **Note:** The visit counter requires a backend and will fall back to local storage on GitHub Pages.

---

## Tech Stack

- **Frontend:** Vanilla JavaScript (ES Modules), HTML5, CSS3
- **Routing:** Hash-based SPA router
- **Data:** Static JS data files (no backend required for core features)
- **Server:** Python `http.server` for local development + visit counter API
- **Deployment:** GitHub Pages

---

## Affiliate

Hotel booking links powered by [Trip.com](https://www.trip.com/?Allianceid=7659513&SID=286708661&trip_sub1=&trip_sub3=D9560539).
