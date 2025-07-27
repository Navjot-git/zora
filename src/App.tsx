import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home, User, Scissors, Calendar, Phone } from 'lucide-react';

// Import pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import BookingPage from './pages/Booking';
import ContactPage from './pages/Contact';

function App() {
  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-container">
            <NavLink to="/" className="logo" onClick={handleNavClick}>
              <span className="logo-main">ZORA</span>
              <span className="logo-sub">SALON</span>
            </NavLink>
            <div className="nav-links">
              <NavLink to="/" onClick={handleNavClick}><Home size={18} /> Home</NavLink>
              <NavLink to="/about" onClick={handleNavClick}><User size={18} /> About</NavLink>
              <NavLink to="/services" onClick={handleNavClick}><Scissors size={18} /> Services</NavLink>
              <NavLink to="/booking" onClick={handleNavClick}><Calendar size={18} /> Booking</NavLink>
              <NavLink to="/contact" onClick={handleNavClick}><Phone size={18} /> Contact</NavLink>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer>
          <div className="footer-container">
            <div className="logo footer-logo">
              <span className="logo-main">ZORA</span>
              <span className="logo-sub">SALON</span>
            </div>
            <p className="footer-tagline">Where beauty meets luxury</p>
            <div className="footer-contact">
              <span>📍 Dhaliwal Complex, Surjit Singh Chowk, Batala</span>
              <span>📞 95013-14939 | 84277-50344</span>
                              <span>✉️ zorasalon07@gmail.com</span>
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} Zora Salon. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
