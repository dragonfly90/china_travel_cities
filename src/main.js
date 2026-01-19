import { destinations, travelTips, costs, resources, bookingLink } from './data/destinations.js'
import products from './data/products.js'
import videos from './data/videos.js'
import communityPosts from './data/community.js'

// Router
const routes = {
  '/': Home,
  '/city/:id': CityDetail,
  '/tips': TravelTips,
  '/gear': Gear,
  '/videos': VideoGallery,
  '/community': Community,
  '/guide': Guide
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

  // Load comments for current page
  const currentPath = window.location.hash.slice(1) || '/'
  if (currentPath === '/guide') renderComments('guide');
  if (currentPath.startsWith('/city/')) renderComments(`city-${currentPath.split('/city/')[1]}`);

  window.scrollTo(0, 0)

  // Update visit count after render
  updateVisitCount()
}

// Components
function Header() {
  return `
    <header class="glass">
      <div class="container">
        <nav>
          <div class="logo">ChinaTravel</div>
          <div class="nav-links">
            <a href="#" data-link="/">Home</a>
            <a href="#" data-link="/guide">Start Here</a>
            <a href="#" data-link="/tips">Travel Tips</a>
            <a href="#" data-link="/videos">Videos</a>
            <a href="#" data-link="/community">Community</a>
            <a href="#" data-link="/gear">Gear</a>
          </div>
        </nav>
      </div>
    </header>
  `
}

function Footer(count = '...') {
  return `
    <footer>
      <div class="container">
        <p>&copy; 2024 China Travel Guide. All rights reserved. | Total Visits: <span id="visit-count">${count}</span></p>
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
    // Fallback to localStorage for GitHub Pages or when backend is down
    let localCount = parseInt(localStorage.getItem('visitCount') || '0');
    localCount++;
    localStorage.setItem('visitCount', localCount);
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
  updateMeta("Discover China", "A journey through time, culture, and breathtaking landscapes.", destinations.main[0].image);
  return `
    ${Header()}
    <section class="hero">
      <div class="hero-content fade-in">
        <h1>Discover China</h1>
        <p>A journey through time, culture, and breathtaking landscapes.</p>
        <button class="btn" onclick="document.getElementById('destinations').scrollIntoView({behavior: 'smooth'})">Explore Destinations</button>
      </div>
    </section>

    <section id="destinations" class="section container">
      <h2 class="fade-in">Main Cities</h2>
      <div class="city-grid fade-in">
        ${destinations.main.map(city => `
          <div class="city-card" data-city="${city.id}">
            <img src="${city.image}" alt="${city.name}">
            <div class="city-info">
              <h3>${city.name}</h3>
              <p>${city.description}</p>
              <a href="${bookingLink}" target="_blank" class="btn-small" style="margin-top: 10px; display: inline-block; background: var(--primary-color); color: white; padding: 5px 10px; border-radius: 5px; text-decoration: none; font-size: 0.9em;" onclick="event.stopPropagation()">Book Hotel</a>
            </div>
          </div>
        `).join('')}
      </div>

      <h2 class="fade-in" style="margin-top: 60px;">Hidden Gems</h2>
      <div class="city-grid fade-in">
        ${destinations.small.map(city => `
          <div class="city-card" data-city="${city.id}">
            <img src="${city.image}" alt="${city.name}">
            <div class="city-info">
              <h3>${city.name}</h3>
              <p>${city.description}</p>
              <a href="${bookingLink}" target="_blank" class="btn-small" style="margin-top: 10px; display: inline-block; background: var(--primary-color); color: white; padding: 5px 10px; border-radius: 5px; text-decoration: none; font-size: 0.9em;" onclick="event.stopPropagation()">Book Hotel</a>
            </div>
          </div>
        `).join('')}
      </div>

      <h2 class="fade-in" style="margin-top: 60px;">Trusted Resources</h2>
      <div class="info-grid fade-in" style="margin-top: 30px;">
        ${resources.map(resource => `
          <div class="info-card glass">
            <h3>${resource.name}</h3>
            <p>${resource.description}</p>
            <a href="${resource.url}" target="_blank" style="color: var(--primary-color); text-decoration: none; font-weight: bold; margin-top: 10px; display: inline-block;">Visit Website &rarr;</a>
          </div>
        `).join('')}
      </div>
    </section>
    ${Footer()}
`
}

function CityDetail() {
  const path = window.location.hash.slice(1)
  const cityId = path.split('/city/')[1]
  const city = [...destinations.main, ...destinations.small].find(c => c.id === cityId)

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
          <h2>About ${city.name}</h2>
          <div style="display: flex; gap: 10px;">
            <button class="btn-small" style="background: var(--text-color); color: var(--bg-color);" onclick="shareContent('${city.name}', 'Check out this guide to ${city.name}!')">Share Guide</button>
            <a href="${bookingLink}" target="_blank" class="btn" style="text-decoration: none;">Book Your Stay</a>
          </div>
        </div>
        <p>${city.description}</p>
        
        <h3 style="margin-top: 30px;">Highlights</h3>
        <ul>
          ${city.highlights.map(h => `<li>• ${h}</li>`).join('')}
        </ul>

        <h3 style="margin-top: 30px;">Best Time to Visit</h3>
        <p>${city.bestTime}</p>
      </div>
    </section>
    ${Footer()}
`
}

function TravelTips() {
  updateMeta("Travel Tips", "Essential visa, payment, and transport tips for China.");
  return `
    ${Header()}
<section class="section container" style="margin-top: 80px;">
  <h1 class="fade-in">Travel Tips & Costs</h1>

  <div class="info-grid fade-in" style="margin-top: 40px;">
    <div class="info-card glass">
      <div class="info-icon">🛂</div>
      <h3>${travelTips.visa.title}</h3>
      <p>${travelTips.visa.content}</p>
    </div>
    <div class="info-card glass">
      <div class="info-icon">💳</div>
      <h3>${travelTips.payment.title}</h3>
      <p>${travelTips.payment.content}</p>
    </div>
    <div class="info-card glass">
      <div class="info-icon">🌐</div>
      <h3>${travelTips.internet.title}</h3>
      <p>${travelTips.internet.content}</p>
    </div>
    <div class="info-card glass">
      <div class="info-icon">🚄</div>
      <h3>${travelTips.transport.title}</h3>
      <p>${travelTips.transport.content}</p>
    </div>
    <div class="info-card glass">
      <div class="info-icon">📱</div>
      <h3>${travelTips.apps.title}</h3>
      <p>${travelTips.apps.content}</p>
    </div>
  </div>

  <h2 style="margin-top: 60px;">Estimated Costs (Per Person/Day)</h2>
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
        <h1 class="fade-in">Community Discussions</h1>
        <p class="fade-in" style="margin-bottom: 30px;">See what travelers are saying on Reddit.</p>
        
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
  const comments = JSON.parse(localStorage.getItem(`comments-${pageId}`) || '[]');
  comments.push(comment);
  localStorage.setItem(`comments-${pageId}`, JSON.stringify(comments));

  renderComments(pageId);
  form.reset();
  alert("Comment posted! (Saved locally)");
};

function renderComments(pageId) {
  const list = document.getElementById(`comments-list-${pageId}`);
  if (!list) return;

  const comments = JSON.parse(localStorage.getItem(`comments-${pageId}`) || '[]');
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
window.shareContent = shareContent;

// Initial render
try {
  console.log("Starting app render...");
  render();
  console.log("App render successful");
} catch (e) {
  console.error("Critical Render Error:", e);
  document.body.innerHTML += `<div style="color: red; padding: 20px;"><h1>App Error</h1><pre>${e.message}\n${e.stack}</pre></div>`;
}
