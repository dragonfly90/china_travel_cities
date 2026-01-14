// import './style.css' // Removed for static server compatibility
import { destinations, travelTips, costs, resources, bookingLink } from './data/destinations.js'
import products from './data/products.json'

// Router
const routes = {
  '/': Home,
  '/city/:id': CityDetail,
  '/tips': TravelTips,
  '/gear': Gear
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

// Components
function Header() {
  return `
    <header class="glass">
      <div class="container">
        <nav>
          <div class="logo">ChinaTravel</div>
          <div class="nav-links">
            <a href="#" data-link="/">Home</a>
            <a href="#" data-link="/tips">Travel Tips</a>
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

function Home() {
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
  const path = window.location.pathname
  const cityId = path.split('/city/')[1]
  const city = [...destinations.main, ...destinations.small].find(c => c.id === cityId)

  if (!city) return Home()

  return `
    ${Header()}
    <section class="hero" style="background-image: url('${city.image}'); height: 60vh;">
      <div class="hero-content fade-in">
        <h1>${city.name}</h1>
      </div>
    </section>

    <section class="section container">
      <div class="glass" style="padding: 40px; margin-top: -100px; position: relative; z-index: 10;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h2>About ${city.name}</h2>
          <a href="${bookingLink}" target="_blank" class="btn" style="text-decoration: none;">Book Your Stay</a>
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
  return `
    ${Header()}
    <section class="section container" style="margin-top: 80px;">
      <h1 class="fade-in">Recommended Gear</h1>
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

// Initial render
render()
