import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './css/Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAuthorMode = location.pathname.includes('/author');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-initial">E</span>
          <span className="logo-text">Editor & Author</span>
        </div>

        {/* Mode Toggle */}
        <div className="mode-toggle">
          <Link 
            to="/editor" 
            className={`mode-btn ${!isAuthorMode ? 'active' : ''}`}
          >
            Editor
          </Link>
          <Link 
            to="/author" 
            className={`mode-btn ${isAuthorMode ? 'active' : ''}`}
          >
            Author
          </Link>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('home')}>Home</button>
          {!isAuthorMode && (
            <>
              <button onClick={() => scrollToSection('services')}>Services</button>
              <button onClick={() => scrollToSection('pricing')}>Pricing</button>
            </>
          )}
          {isAuthorMode && (
            <button onClick={() => scrollToSection('books')}>Books</button>
          )}
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
