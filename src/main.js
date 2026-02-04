import products from './data/products.js'
import videos from './data/videos.js'
import communityPosts from './data/community.js'
import xhsPosts from './data/xhs.js'
import flightDeals from './data/flights.js'
import { content, bookingLink } from './data/destinations.js'
import { hospitals, packages, guideSteps } from './data/medical.js'

// State
let currentLang = localStorage.getItem('lang') || 'en';

// Router
const routes = {
  '/': Home,
  '/city/:id': CityDetail,
  '/tips': TravelTips,
  '/gear': Gear,
  '/videos': VideoGallery,
  '/community': Community,
  '/guide': Guide,
  '/medical': MedicalGuide,
  '/planner': ItineraryBuilder
}

const app = document.querySelector('#app')

// Navigation
function navigate(path) {
  window.location.hash = path
}

window.addEventListener('hashchange', render)

function render() {
  const path = window.location.hash.slice(1) || '/'
  const route = routes[path] || (path.startsWith('/city/') ? CityDetail : Home)
  app.innerHTML = route()

  // Re-attach event listeners
  attachListeners()

  window.scrollTo(0, 0)

  // Update visit count after render
  updateVisitCount()
}

// Language Switcher
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('lang', currentLang);
  render();
}

// Header
function Header() {
  const t = content[currentLang].ui;
  return `
    <header class="glass">
      <div class="container">
        <nav>
          <div class="logo">ChinaTravel</div>
          <div class="menu-toggle" onclick="toggleMenu()">☰</div>
          <div class="nav-links" id="nav-links">
            <a href="#" data-link="/" onclick="closeMenu()">${t.nav.home}</a>
            <a href="#" data-link="/guide" onclick="closeMenu()">Start Here</a>
            <a href="#" data-link="/planner" onclick="closeMenu()">${t.nav.planner}</a>
            <a href="#" data-link="/tips" onclick="closeMenu()">${t.nav.tips}</a>
            <a href="#" data-link="/videos" onclick="closeMenu()">Videos</a>
            <a href="#" data-link="/community" onclick="closeMenu()">Community</a>
            <a href="#" data-link="/medical" onclick="closeMenu()">Medical Tour</a>
            <a href="#" data-link="/gear" onclick="closeMenu()">${t.nav.gear}</a>
            <button onclick="toggleLanguage(); closeMenu()" class="lang-btn" style="background: none; border: 1px solid var(--text-color); padding: 5px 10px; border-radius: 5px; cursor: pointer; color: var(--text-color); font-size: 0.9rem;">
                ${currentLang === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  `
}

// Menu Toggle Logic
window.toggleMenu = function () {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('nav-active');
}

window.closeMenu = function () {
  const nav = document.getElementById('nav-links');
  if (nav) nav.classList.remove('nav-active');
}

function Footer(count = '...') {
  const t = content[currentLang].ui;
  return `
    <footer>
    <div class="container">
      <p>${t.footer} <span id="visit-count">${count}</span></p>
    </div>
    </footer>
    `
}

// Fetch visits
async function updateVisitCount() {
  const countElement = document.getElementById('visit-count');
  if (!countElement) return;

  try {
    const response = await fetch('/api/visits');
    if (!response.ok) throw new Error('API not available');
    const data = await response.json();
    countElement.textContent = data.visits;
  } catch (error) {
    // Silent fallback expected for static deployment
    let localCount = parseInt(localStorage.getItem('visitCount') || '0');
    localCount++;
    localStorage.setItem('visitCount', localCount);
    // Only increment on session start or specific logic if needed, but for now simple fallback
    // Note: This logic increments on every re-render which might be too aggressive, 
    // but preserving original logic for now. 
    // Optimization: check if already incremented this session? 
    // For now, keeping as is to avoid scope creep.
    // Actually, originally it was incrementing on render. Let's keep consistency.
    // Ideally we shouldn't increment on every render, but that's a separate fix.
    countElement.textContent = `${localCount} (Local)`;
  }
}

// SEO Helper
function updateMeta(title, description, image) {
  document.title = `${title} | China Travel Guide`;

  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && image) {
    // Ensure absolute URL for social sharing
    const absoluteImage = image.startsWith('http') ? image : `https://dragonfly90.github.io/china_travel_cities/${image.replace('./', '')}`;
    ogImage.setAttribute('content', absoluteImage);
  }
}

// Share Helper
async function shareContent(title, text, url = window.location.href) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
    } catch (err) {
      console.log('Error sharing:', err);
    }
  } else {
    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      alert('Could not copy link.');
    }
  }
}

function Home() {
  const t = content[currentLang].ui;
  const d = content[currentLang].destinations;

  updateMeta(t.homeTitle, t.homeSubtitle, d.main[0].image);

  return `
    ${Header()}
    <section class="hero">
      <div class="hero-content fade-in">
        <h1>${t.homeTitle}</h1>
        <p>${t.homeSubtitle}</p>
        <button class="btn" onclick="document.getElementById('destinations').scrollIntoView({behavior: 'smooth'})">${t.exploreBtn}</button>
      </div>
    </section>

    <section id="destinations" class="section container">
      <h2 class="fade-in">${t.mainCities}</h2>
      <div class="bento-grid fade-in">
        ${d.main.map((city, index) => {
    // Bento Logic: 
    // Index 0 (Beijing): Big Square (2x2)
    // Index 1 (Shanghai): Wide (2x1)
    // Others: Standard (1x1)
    let spanClass = '';
    if (index === 0) spanClass = 'span-2-col span-2-row';
    else if (index === 1) spanClass = 'span-2-col';

    // For the big featured item (Index 0), we use an overlay style
    if (index === 0) {
      return `
              <div class="bento-card ${spanClass}" data-city="${city.id}" onclick="navigate('/city/${city.id}')">
                <div class="card-image">
                    <img src="${city.image}" alt="${city.name}">
                </div>
                <div class="card-overlay">
                  <h3>${city.name}</h3>
                  <p>${city.description}</p>
                  <div style="margin-top: 15px;">
                      <button class="btn-small">${t.bookHotel}</button>
                  </div>
                </div>
              </div>
              `
    }

    return `
          <div class="bento-card ${spanClass}" data-city="${city.id}" onclick="navigate('/city/${city.id}')">
            <div class="card-image">
                <img src="${city.image}" alt="${city.name}">
            </div>
            <div class="card-content">
              <h3>${city.name}</h3>
              <p>${city.description}</p>
              <div style="margin-top: 15px;">
                  <button class="btn-small">${t.bookHotel}</button>
              </div>
            </div>
          </div>
        `}).join('')}
      </div>

      <h2 class="fade-in" style="margin-top: 80px;">${t.hiddenGems}</h2>
      <div class="bento-grid fade-in">
        ${d.small.map(city => `
          <div class="bento-card" data-city="${city.id}" onclick="navigate('/city/${city.id}')">
            <div class="card-image" style="height: 200px;">
                <img src="${city.image}" alt="${city.name}">
            </div>
            <div class="card-content">
              <h3>${city.name}</h3>
              <p>${city.description}</p>
              <div style="margin-top: 15px;">
                  <button class="btn-small">${t.bookHotel}</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <h2 class="fade-in" style="margin-top: 80px;">${t.trustedResources}</h2>
      <div class="info-grid fade-in" style="margin-top: 30px;">
        ${content[currentLang].resources.map(resource => `
          <div class="info-card">
            <h3>${resource.name}</h3>
            <p style="color: var(--text-secondary); margin-top: 10px;">${resource.description}</p>
            <a href="${resource.url}" target="_blank" class="btn-small" style="margin-top: 20px;">${t.visitWebsite}</a>
          </div>
        `).join('')}
      </div>

      <!-- Newsletter Section -->
      <div class="fade-in" style="margin-top: 80px; padding: 60px; text-align: center; background: white; border-radius: 24px;">
        <h2 style="color: var(--primary-color);">🇨🇳 Join the China Travel Community</h2>
        <p style="margin: 15px 0 25px; color: var(--text-secondary);">Get the latest travel tips, visa updates, and hidden gems sent to your inbox.</p>
        <form onsubmit="handleSubscribe(event)" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <input type="email" name="email" placeholder="Enter your email address" required style="padding: 14px 24px; border-radius: 40px; border: 1px solid #eee; width: 300px; max-width: 100%; outline: none; background: var(--bg-color);">
            <button type="submit" class="btn">Subscribe</button>
        </form>
      </div>
    </section>
    ${Footer()}
  `
}

// Email Subscription (Formspree)
// 1. Go to https://formspree.io
// 2. Create a new form
// 3. Paste your form ID here: e.g. 'mkgoyoaa'
const FORMSPREE_ID = 'xkozbayj';

// Subscribe Handler
window.handleSubscribe = async function (event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const btn = form.querySelector('button');
  const originalText = btn.textContent;

  // Optimistic UI update
  btn.textContent = 'Subscribing...';
  btn.disabled = true;

  try {
    if (FORMSPREE_ID === 'xkozbayj') {
      alert("Developer Note: You need to create a free Formspree form to receive emails.\n\n1. Go to formspree.io\n2. Create form\n3. Update 'FORMSPREE_ID' in src/main.js");
      throw new Error('Formspree ID not set');
    }

    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: JSON.stringify({ email: email }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      alert(`Thanks! ${email} has been sent to your inbox.`);
      form.reset();

      // Save to local storage as backup/history
      const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
      }
    } else {
      const data = await response.json();
      if (Object.hasOwn(data, 'errors')) {
        alert(data["errors"].map(error => error["message"]).join(", "));
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    }
  } catch (error) {
    if (error.message !== 'Formspree ID not set') {
      console.error('Subscription error:', error);
      alert("There was an error subscribing. Please try again later.");
    }
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

function CityDetail() {
  const t = content[currentLang].ui;
  const d = content[currentLang].destinations;

  const path = window.location.hash.slice(1)
  const cityId = path.split('/city/')[1]
  const city = [...d.main, ...d.small].find(c => c.id === cityId)

  if (!city) return Home()

  updateMeta(city.name, city.description, city.image);

  return `
    ${Header()}
    <section class="hero" style="background-image: url('${city.image}'); height: 60vh;">
      <div class="hero-content fade-in">
        <h1>${city.name}</h1>
      </div>
    </section>

    <section class="section container">
      <div class="glass" style="padding: 40px; margin-top: -100px; position: relative; z-index: 10;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <h2>${t.about} ${city.name}</h2>
          <div style="display: flex; gap: 10px;">
            <button class="btn-small" style="background: var(--text-color); color: var(--bg-color);" onclick="shareContent('${city.name}', 'Check out this guide to ${city.name}!')">${t.shareGuide}</button>
            <a href="${bookingLink}" target="_blank" class="btn" style="text-decoration: none;">${t.bookStay}</a>
          </div>
        </div>
        <p>${city.description}</p>
        
        <h3 style="margin-top: 30px;">${t.highlights}</h3>
        <ul>
          ${city.highlights.map(h => `<li>• ${h}</li>`).join('')}
        </ul>
        
        ${city.itinerary ? `
        <h3 style="margin-top: 30px;">Suggested Itinerary</h3>
        <ul style="list-style: none; padding-left: 0;">
            ${city.itinerary.map(item => `<li style="margin-bottom: 8px;">🗓️ ${item}</li>`).join('')}
        </ul>
        ` : ''}

        ${city.food ? `
        <h3 style="margin-top: 30px;">Must-Try Food</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            ${city.food.map(f => `<span style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 15px; font-size: 0.9em;">🥢 ${f}</span>`).join('')}
        </div>
        ` : ''}

        ${city.stay ? `
        <h3 style="margin-top: 30px;">Where to Stay</h3>
        <p>${city.stay.join(', ')}</p>
        ` : ''}

        <h3 style="margin-top: 30px;">${t.bestTime}</h3>
        <p>${city.bestTime}</p>

        <h3 style="margin-top: 30px;">City Map</h3>
        <div style="width: 100%; height: 350px; border-radius: 10px; overflow: hidden; margin-top: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <iframe 
                width="100%" 
                height="100%" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src="${city.mapUrl}"
            ></iframe>
        </div>
      </div>
    </section>
    ${Footer()}
  `
}

function TravelTips() {
  const t = content[currentLang].ui;
  const tips = content[currentLang].travelTips;
  const costs = content[currentLang].costs;

  updateMeta(t.tipsTitle, "Essential visa, payment, and transport tips for China.");
  return `
    ${Header()}
    <section class="section container" style="margin-top: 80px;">
      <h1 class="fade-in">${t.tipsTitle}</h1>
      
      <div class="info-grid fade-in" style="margin-top: 40px;">
        <div class="info-card glass">
          <div class="info-icon">🛂</div>
          <h3>${tips.visa.title}</h3>
          <p>${tips.visa.content}</p>
        </div>
        <div class="info-card glass">
          <div class="info-icon">💳</div>
          <h3>${tips.payment.title}</h3>
          <p>${tips.payment.content}</p>
        </div>
        <div class="info-card glass">
          <div class="info-icon">🌐</div>
          <h3>${tips.internet.title}</h3>
          <p>${tips.internet.content}</p>
        </div>
        <div class="info-card glass">
          <div class="info-icon">🚄</div>
          <h3>${tips.transport.title}</h3>
          <p>${tips.transport.content}</p>
        </div>
        <div class="info-card glass">
          <div class="info-icon">📱</div>
          <h3>${tips.apps.title}</h3>
          <p>${tips.apps.content}</p>
        </div>
      </div>

      <h2 style="margin-top: 60px;">${t.costsTitle}</h2>
      <div class="info-grid fade-in" style="margin-top: 30px;">
        <div class="info-card glass">
          <h3>${costs.budget.type}</h3>
          <h2 style="color: var(--primary-color);">${costs.budget.daily}</h2>
          <p>${costs.budget.desc}</p>
        </div>
        <div class="info-card glass">
          <h3>${costs.midRange.type}</h3>
          <h2 style="color: var(--primary-color);">${costs.midRange.daily}</h2>
          <p>${costs.midRange.desc}</p>
        </div>
        <div class="info-card glass">
          <h3>${costs.luxury.type}</h3>
          <h2 style="color: var(--primary-color);">${costs.luxury.daily}</h2>
          <p>${costs.luxury.desc}</p>
        </div>
      </div>
    </section>
    ${Footer()}
  `
}

function Gear() {
  updateMeta("Recommended Gear", "Curated travel essentials for your China trip.");
  return `
    ${Header()}
  <section class="section container" style="margin-top: 80px;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h1 class="fade-in">Recommended Gear</h1>
      <button class="btn-small fade-in" style="background: var(--text-color); color: var(--bg-color);" onclick="shareContent('China Travel Gear', 'Essential gear for your China trip!')">Share List</button>
    </div>
    <p class="fade-in" style="margin-bottom: 30px;">Essential items for your trip to China, curated from Amazon.</p>

    <div class="city-grid fade-in">
      ${products.map(product => `
          <div class="city-card">
            <div style="height: 200px; overflow: hidden; display: flex; align-items: center; justify-content: center; background: white;">
                <img src="${product.image}" alt="${product.title}" style="width: auto; height: 100%; object-fit: contain;">
            </div>
            <div class="city-info">
              <h3>${product.title}</h3>
              <p style="color: var(--primary-color); font-weight: bold; font-size: 1.2em;">${product.price}</p>
              <a href="${product.link}" target="_blank" class="btn-small" style="margin-top: 10px; display: inline-block; background: #FF9900; color: white; padding: 5px 10px; border-radius: 5px; text-decoration: none; font-size: 0.9em;">Buy on Amazon</a>
            </div>
          </div>
        `).join('')}
    </div>
  </section>
    ${Footer()}
  `
}

function VideoGallery() {
  updateMeta("Video Gallery", "Watch curated videos about China's landscapes, food, and culture.");
  return `
      ${Header()}
  <section class="section container" style="margin-top: 80px;">
    <h1 class="fade-in">Video Gallery</h1>
    <p class="fade-in" style="margin-bottom: 30px;">Immerse yourself in China before you go.</p>

    <div class="city-grid fade-in">
      ${videos.map(video => `
            <div class="city-card">
              <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                <iframe 
                  src="https://www.youtube.com/embed/${video.youtubeId}" 
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                  allowfullscreen 
                  title="${video.title}"
                ></iframe>
              </div>
              <div class="city-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
              </div>
            </div>
          `).join('')}
    </div>
  </section>
      ${Footer()}
  `
}

function Community() {
  updateMeta("Community", "Latest discussions and travel tips from the China Travel community.");
  return `
      ${Header()}
  <section class="section container" style="margin-top: 80px;">
    <h1 class="fade-in">Community & Social Buzz</h1>
    <p class="fade-in" style="margin-bottom: 30px;">See what travelers are saying on Reddit and Xiaohongshu (Little Red Book).</p>

    <h2 class="fade-in">Reddit Discussions</h2>
    <div class="info-grid fade-in">
      ${communityPosts.map(post => `
            <div class="info-card glass">
              <span style="font-size: 0.8em; color: var(--primary-color);">${post.subreddit} • u/${post.author}</span>
              <h3 style="margin: 10px 0;"><a href="${post.url}" target="_blank" style="text-decoration: none; color: inherit;">${post.title}</a></h3>
              <div style="display: flex; gap: 15px; font-size: 0.9em; color: #666;">
                 <span>⬆️ ${post.score}</span>
                 <span>💬 ${post.num_comments} comments</span>
              </div>
            </div>
          `).join('')}
    </div>

    <h2 class="fade-in" style="margin-top: 60px;">
        <a href="https://www.xiaohongshu.com/explore" target="_blank" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
            XHS Buzz (Little Red Book) 
            <span style="font-size: 0.6em; color: #ff2442; border: 1px solid #ff2442; padding: 2px 8px; border-radius: 12px;">Visit Site ↗</span>
        </a>
    </h2>
    <p style="margin-bottom: 20px;">Trending posts about "Westerners in China".</p>
    <div class="city-grid fade-in">
      ${xhsPosts.map(post => `
            <div class="city-card">
              <div style="height: 200px; overflow: hidden;">
                <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="city-info">
                <a href="https://www.xiaohongshu.com/explore" target="_blank" style="text-decoration: none;">
                    <span style="font-size: 0.8em; color: #ff2442;">📕 Xiaohongshu</span>
                </a>
                <h3><a href="${post.url}" target="_blank" style="text-decoration: none; color: inherit;">${post.title}</a></h3>
                <p style="font-size: 0.9em; color: #666;">by ${post.author}</p>
                <div style="margin-top: 10px; font-weight: bold; color: #ff2442;">❤️ ${post.likes}</div>
              </div>
            </div>
          `).join('')}
    </div>

  </section>
    ${Footer()}
  `
}


function Guide() {
  updateMeta("Simple Guide to China 2026", "A simple, practical guide for first-time travelers to China.");
  return `
    ${Header()}
  <section class="section container" style="margin-top: 80px;">
    <h1 class="fade-in">The Simple Guide to Traveling in China (2026 Edition)</h1>

    <div class="glass fade-in" style="padding: 40px; margin-top: 30px;">
      <p style="font-size: 1.1em; line-height: 1.6;">I’ve been seeing a lot of questions lately about traveling to China ("Is it hard?", "Do I need a visa?", "What apps do I need?"), so I aggregated the latest advice from our community and research into a simple, practical guide.</p>
      <p style="font-size: 1.1em; line-height: 1.6; margin-top: 20px;">If you’ve been hesitant because of the "complexity," trust me: it’s easier than ever.</p>

      <h2 style="margin-top: 40px; border-bottom: 2px solid var(--primary-color); padding-bottom: 10px;">1. The "Big Three" Hurdles (Solved)</h2>

      <div style="margin-top: 20px;">
        <h3>🛂 Visa: You Might Not Need One</h3>
        <p>If you are from the US, UK, Canada, Aus, etc., check out the <strong>144-Hour Visa-Free Transit</strong>.</p>
        <ul style="list-style-type: disc; margin-left: 20px; margin-top: 10px;">
          <li><strong>How it works</strong>: Fly A -> China -> B (A and B must be different countries).</li>
          <li><strong>Where</strong>: Works in Beijing, Shanghai, Chengdu, Kunming, and many more.</li>
          <li><strong>Tip</strong>: Great for a 6-day stopover to see the Great Wall or the Bund without the visa paperwork hassle.</li>
        </ul>
      </div>

      <div style="margin-top: 30px;">
        <h3>💳 Payment: Cash is Dead(ish)</h3>
        <p>You cannot survive on cash alone.</p>
        <ul style="list-style-type: disc; margin-left: 20px; margin-top: 10px;">
          <li><strong>The Fix</strong>: Download <strong>Alipay</strong> or <strong>WeChat</strong>.</li>
          <li><strong>Easy Mode</strong>: You can now link your <strong>foreign credit card</strong> (Visa/Mastercard) directly to Alipay. No Chinese bank account needed. It works for everything from subway rides to street food.</li>
        </ul>
      </div>

      <div style="margin-top: 30px;">
        <h3>🌐 Internet: The Firewall</h3>
        <p>Google, Instagram, and Reddit are blocked.</p>
        <ul style="list-style-type: disc; margin-left: 20px; margin-top: 10px;">
          <li><strong>The Old Way</strong>: Buying a VPN (Astrill is the reliable one, others are hit-or-miss).</li>
          <li><strong>The Better Way</strong>: Get an <strong>eSIM</strong> (like <a href="https://airalo.pxf.io/nXq9WX" target="_blank" style="color: var(--primary-color);">Airalo</a> or Holafly) before you land. Roaming data bypasses the firewall automatically. You land, turn it on, and Instagram just works.</li>
        </ul>
      </div>

      <h2 style="margin-top: 40px; border-bottom: 2px solid var(--primary-color); padding-bottom: 10px;">2. Where to Go (Beyond Beijing)</h2>
      <p>Based on recent videos and threads, here is a mix of the classics and the trending spots:</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
          <h3 style="margin-top: 0;">The "Classics"</h3>
          <p><strong>Beijing</strong>: Great Wall & Forbidden City. (History buff's dream).</p>
          <p><strong>Shanghai</strong>: The "Blade Runner" city. Insane skylines meets colonial architecture.</p>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
          <h3 style="margin-top: 0;">The "Avatar" Mountains</h3>
          <p><strong>Zhangjiajie</strong>: The inspiration for Pandora. The sandstone pillars are surreal. The glass bridge is terrifying but worth it.</p>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
          <h3 style="margin-top: 0;">The "Chill" Vibe</h3>
          <p><strong>Kunming</strong>: The "City of Eternal Spring".</p>
          <p><strong>Dali</strong>: A backpacker haven with pagodas, massive lakes, and a relaxed pace.</p>
        </div>
      </div>

      <h2 style="margin-top: 40px; border-bottom: 2px solid var(--primary-color); padding-bottom: 10px;">3. Essential Apps Checklist</h2>
      <p>Download these BEFORE you get on the plane:</p>
      <ol style="margin-left: 20px; margin-top: 10px; line-height: 1.8;">
        <li><strong>Alipay</strong>: For payments.</li>
        <li><strong>Trip.com</strong>: For booking hotels and <strong>High-Speed Trains</strong> (easier than the official railway app).</li>
        <li><strong>Apple Maps</strong>: Works great in China. (Google Maps is useless).</li>
        <li><strong>Translate App</strong>: Google Translate (download offline Chinese) or DeepL.</li>
      </ol>

      <h2 style="margin-top: 40px; border-bottom: 2px solid var(--primary-color); padding-bottom: 10px;">Final Tips</h2>
      <ul style="list-style-type: none; margin-top: 10px;">
        <li style="margin-bottom: 10px;">🛑 <strong>Crowds</strong>: Avoid "Golden Week" (first week of Oct) and CNY unless you love chaos.</li>
        <li style="margin-bottom: 10px;">🚄 <strong>Trains</strong>: The high-speed rail is faster and more comfortable than flying for 3-5 hour distances.</li>
        <li style="margin-bottom: 10px;">🗣️ <strong>Language</strong>: The language barrier is real, but translation apps + younger people speaking English make it manageable.</li>
      </ul>

      <div style="text-align: center; margin-top: 40px;">
        <button class="btn" onclick="document.getElementById('destinations').scrollIntoView({behavior: 'smooth'}) || navigate('/')">Start Exploring Cities</button>
      </div>
    </div>
    ${CommentSection('guide')}
  </section>
    ${Footer()}
  `
}



// Itinerary State
function getItinerary() {
  return JSON.parse(localStorage.getItem('myItinerary') || '[]');
}

function saveItinerary(itinerary) {
  localStorage.setItem('myItinerary', JSON.stringify(itinerary));
  render(); // Re-render to update UI
}

function addToItinerary(cityId) {
  const list = getItinerary();
  // Prevent duplicates (optional, but good for MVP)
  if (list.includes(cityId)) {
    alert("City already in itinerary!");
    return;
  }
  list.push(cityId);
  saveItinerary(list);
}

function removeFromItinerary(index) {
  const list = getItinerary();
  list.splice(index, 1);
  saveItinerary(list);
}

function moveItem(index, direction) {
  const list = getItinerary();
  if (direction === 'up' && index > 0) {
    [list[index], list[index - 1]] = [list[index - 1], list[index]];
  } else if (direction === 'down' && index < list.length - 1) {
    [list[index], list[index + 1]] = [list[index + 1], list[index]];
  }
  saveItinerary(list);
}

function shareItinerary() {
  const list = getItinerary();
  if (list.length === 0) return;

  // Create shareable text
  const d = content[currentLang].destinations;
  const allCities = [...d.main, ...d.small];
  const cityNames = list.map(id => allCities.find(c => c.id === id)?.name || id).join(' -> ');
  const text = `Check out my China trip plan: ${cityNames}`;

  shareContent(content[currentLang].ui.planner.title, text);
}

// Make globally available
window.addToItinerary = addToItinerary;
window.removeFromItinerary = removeFromItinerary;
window.moveItem = moveItem;
window.shareItinerary = shareItinerary;


function ItineraryBuilder() {
  const t = content[currentLang].ui.planner;
  const d = content[currentLang].destinations;
  const allCities = [...d.main, ...d.small];
  const myItineraryIds = getItinerary();
  const myItinerary = myItineraryIds.map(id => allCities.find(c => c.id === id)).filter(Boolean); // Filter out any invalid IDs

  updateMeta(t.title, t.subtitle);

  return `
    ${Header()}
    <section class="section container" style="margin-top: 80px;">
      <h1 class="fade-in">${t.title}</h1>
      <p class="fade-in">${t.subtitle}</p>

      <div class="itinerary-container fade-in" style="display: flex; gap: 40px; flex-wrap: wrap; margin-top: 40px;">
        
        <!-- Available Cities -->
        <div style="flex: 1; min-width: 300px;">
            <h3>${t.availableCities}</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; margin-top: 20px;">
                ${allCities.map(city => `
                    <div class="glass" style="padding: 15px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                         <img src="${city.image}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
                         <h4>${city.name}</h4>
                         <button class="btn-small" style="margin-top: 10px; font-size: 0.8rem; background: var(--secondary-color); color: #333;" onclick="addToItinerary('${city.id}')">
                            + ${t.addCity}
                         </button>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- My Itinerary -->
        <div style="flex: 1; min-width: 300px; background: rgba(255,255,255,0.5); padding: 20px; border-radius: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3>${t.myTrip}</h3>
                <button class="btn-small" onclick="shareItinerary()" style="background: var(--primary-color);">${t.share}</button>
            </div>
            
            ${myItinerary.length === 0 ? `<p style="margin-top: 20px; color: #666; font-style: italic;">${t.empty}</p>` : ''}

            <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 15px;">
                ${myItinerary.map((city, index) => `
                    <div class="glass" style="padding: 15px; display: flex; align-items: center; gap: 15px;">
                        <div style="font-weight: bold; background: var(--primary-color); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${index + 1}</div>
                        <img src="${city.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                        <div style="flex: 1;">
                            <h4>${city.name}</h4>
                            <div style="font-size: 0.8rem; color: #666;">${city.bestTime}</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 5px;">
                            <button onclick="moveItem(${index}, 'up')" style="border: none; background: none; cursor: pointer; opacity: 0.6;">⬆️</button>
                            <button onclick="moveItem(${index}, 'down')" style="border: none; background: none; cursor: pointer; opacity: 0.6;">⬇️</button>
                        </div>
                        <button onclick="removeFromItinerary(${index})" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; margin-left: 10px;">❌</button>
                    </div>
                    ${index < myItinerary.length - 1 ? `<div style="text-align: center; color: var(--primary-color); font-size: 1.5rem;">⬇</div>` : ''}
                `).join('')}
            </div>
        </div>

      </div>
    </section>
    ${Footer()}
  `
}
function MedicalGuide() {
  console.log("MedicalGuide rendering...", { hospitals, packages, guideSteps });
  updateMeta("Medical & Health Guide", "World-class health checkups in China: Fast, Affordable, Efficiency.");
  return `
    ${Header()}
  <section class="section container" style="margin-top: 80px;">
    <h1 class="fade-in">Medical Tourism: The "China Speed" Checkup</h1>
    <p class="fade-in" style="font-size: 1.1em; margin-bottom: 30px;">
      One of the best-kept secrets for travelers to China is the <strong>medical efficiency</strong>.
      You can get a comprehensive, high-tech full-body health screening (MRI, CT, Ultrasound, Blood panel) done in
      <strong>under 4 hours</strong> for a fraction of the cost in the West.
    </p>

    <h2 class="fade-in">Why do a Checkup here?</h2>
    <div class="info-grid fade-in">
      <div class="info-card glass">
        <div class="info-icon">⚡️</div>
        <h3>Incredible Speed</h3>
        <p>No weeks of waiting. Walk in at 8 AM, done by 11 AM. Digital results often same-day.</p>
      </div>
      <div class="info-card glass">
        <div class="info-icon">💰</div>
        <h3>Affordable</h3>
        <p>A "CEO-level" full body scan often costs $200-$400. No insurance bureaucracy.</p>
      </div>
      <div class="info-card glass">
        <div class="info-icon">🔬</div>
        <h3>Advanced Tech</h3>
        <p>Top hospitals use the latest Siemens/GE CT and MRI scanners. Preventative screening is standard.</p>
      </div>
    </div>

    <h2 class="fade-in" style="margin-top: 60px;">Top Hospitals (International Depts)</h2>
    <p style="margin-bottom: 20px;">We recommend the <strong>International Departments</strong> (VIP Wings) of top public hospitals for English service and privacy.</p>
    <div class="city-grid fade-in">
      ${hospitals.map(h => `
                <div class="city-card">
                  <div style="height: 180px; overflow: hidden;">
                    <img src="${h.image}" alt="${h.name}" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="city-info">
                    <span style="font-size: 0.8em; color: var(--primary-color); font-weight: bold;">${h.city}</span>
                    <h3>${h.name}</h3>
                    <p>${h.desc}</p>
                    <p style="margin-top: 10px; font-size: 0.9em; color: #666;">📍 ${h.location}</p>
                    <div style="margin-top: 10px; font-size: 0.8em; background: rgba(0,0,0,0.05); padding: 5px; border-radius: 5px;">
                        🏅 Best for: ${h.specialty}
                    </div>
                  </div>
                </div>
            `).join('')}
    </div>

    <h2 class="fade-in" style="margin-top: 60px;">Typical Checkup Packages</h2>
    <div class="info-grid fade-in">
      ${packages.map(pkg => `
                <div class="info-card glass" style="border-top: 4px solid var(--primary-color);">
                    <h3>${pkg.name}</h3>
                    <h2 style="color: var(--primary-color); margin: 10px 0;">${pkg.price}</h2>
                    <p style="font-weight: bold; margin-bottom: 15px;">⏱️ ${pkg.time}</p>
                    <ul style="text-align: left; padding-left: 20px; font-size: 0.9em; line-height: 1.6;">
                        ${pkg.includes.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
    </div>

    <h2 class="fade-in" style="margin-top: 60px;">How to Do It</h2>
    <div class="glass fade-in" style="padding: 30px; margin-top: 20px;">
      ${guideSteps.map(step => `
                <div style="margin-bottom: 20px;">
                    <h3 style="color: var(--text-color);">${step.title}</h3>
                    <p>${step.desc}</p>
                </div>
            `).join('')}
      <div style="margin-top: 30px; padding: 15px; background: rgba(255,165,0,0.1); border-left: 4px solid orange; border-radius: 5px;">
        <strong>💡 Pro Tip:</strong> Ask for the "International Medical Center" (IMC) or "VIP Wing". Regular departments are extremely crowded, but the VIP wings are quiet, cleaner, and comparable to 5-star hotels.
      </div>
    </div>

  </section>
    ${Footer()}
  `
}


function CommentSection(pageId) {
  return `
    <section class="section container" style="margin-top: 40px;">
        <h2 class="fade-in">Visitor Comments (Guestbook)</h2>
        <div class="glass fade-in" style="padding: 20px; margin-top: 20px;">
            <div id="comments-list-${pageId}" style="margin-bottom: 30px;">
                <!-- Comments will be loaded here -->
                <p style="color: #666; font-style: italic;">No comments yet. Be the first!</p>
            </div>
            
            <h3 style="margin-bottom: 15px;">Leave a Comment</h3>
            <form onsubmit="handleCommentSubmit(event, '${pageId}')" style="display: flex; flex-direction: column; gap: 10px;">
                <input type="text" name="name" placeholder="Your Name" required style="padding: 10px; border-radius: 5px; border: 1px solid #ccc; background: rgba(255,255,255,0.8);">
                <textarea name="comment" placeholder="Share your thoughts or questions..." required style="padding: 10px; border-radius: 5px; border: 1px solid #ccc; min-height: 80px; background: rgba(255,255,255,0.8);"></textarea>
                <div style="font-size: 0.8em; color: #666;">Note: Comments are stored locally in your browser for this demo.</div>
                <button type="submit" class="btn-small" style="background: var(--primary-color); color: white; align-self: flex-start;">Post Comment</button>
            </form>
        </div>
      </section>
    `;
}

// Comment Logic
window.handleCommentSubmit = function (event, pageId) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const text = form.comment.value;
  const date = new Date().toLocaleDateString();

  const comment = { name, text, date };
  const comments = JSON.parse(localStorage.getItem(`comments - ${pageId} `) || '[]');
  comments.push(comment);
  localStorage.setItem(`comments - ${pageId} `, JSON.stringify(comments));

  renderComments(pageId);
  form.reset();
  alert("Comment posted! (Saved locally)");
};

function renderComments(pageId) {
  const list = document.getElementById(`comments - list - ${pageId} `);
  if (!list) return;

  const comments = JSON.parse(localStorage.getItem(`comments - ${pageId} `) || '[]');
  if (comments.length === 0) {
    list.innerHTML = '<p style="color: #666; font-style: italic;">No comments yet. Be the first!</p>';
    return;
  }

  list.innerHTML = comments.map(c => `
    <div style="border-bottom: 1px solid rgba(0,0,0,0.1); padding: 10px 0;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <strong style="color: var(--primary-color);">${c.name}</strong>
                <span style="font-size: 0.8em; color: #666;">${c.date}</span>
            </div>
            <p style="margin: 0;">${c.text}</p>
        </div>
    `).join('').split('\n').reverse().join('\n'); // Show newest first (simple reverse hack)
}

function attachListeners() {
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(e.target.getAttribute('data-link'))
    })
  })

  document.querySelectorAll('.city-card').forEach(card => {
    card.addEventListener('click', () => {
      navigate(`/city/${card.getAttribute('data-city')}`)
    })
  })

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (window.scrollY > 50) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })
}

// Make shareContent globally available for inline onclick handlers
// Make shareContent globally available for inline onclick handlers
window.shareContent = shareContent;
window.toggleLanguage = toggleLanguage;
window.navigate = navigate;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;



// Initial render
try {
  console.log("Starting app render...");
  render();
  console.log("App render successful");
} catch (e) {
  console.error("Critical Render Error:", e);
  document.body.innerHTML += `<div style="color: red; padding: 20px;"><h1>App Error</h1><pre>${e.message}\n${e.stack}</pre></div>`;
}
// Force rebuild timestamp: Tue Feb  3 22:03:39 PST 2026
