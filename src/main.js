// import './style.css' // Removed for static server compatibility
import { destinations, travelTips, costs } from './data/destinations.js'

// Router
const routes = {
  '/': Home,
  '/city/:id': CityDetail,
  '/tips': TravelTips
}

const app = document.querySelector('#app')

// Navigation
function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path)
  render()
}

window.onpopstate = render

function render() {
  const path = window.location.pathname
  const route = routes[path] || (path.startsWith('/city/') ? CityDetail : Home)
  app.innerHTML = route()

  // Re-attach event listeners
  attachListeners()
  window.scrollTo(0, 0)
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
          </div>
        </nav>
      </div>
    </header>
  `
}

function Footer() {
  return `
    <footer>
      <div class="container">
        <p>&copy; 2024 China Travel Guide. All rights reserved.</p>
      </div>
    </footer>
  `
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
            </div>
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
        <h2>About ${city.name}</h2>
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
