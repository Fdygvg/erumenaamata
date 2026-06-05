import { siteData } from '../data/content';
import './css/AuthorHero.css';

export default function AuthorHero() {
  const { authorHero, contact } = siteData;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="author-hero">
      <div className="author-hero-container">
        <div className="author-hero-grid">
          {/* Left Side - Author Image */}
          <div className="author-image-wrapper">
            <img 
              src={authorHero.image} 
              alt={authorHero.name}
              className="author-image"
            />
          </div>

          {/* Right Side - Hero Content */}
          <div className="author-hero-content">
            <h1 className="author-hero-headline">{authorHero.headline}</h1>
            <p className="author-hero-tagline">{authorHero.tagline}</p>
            <div className="author-hero-cta">
              <button className="btn-primary" onClick={scrollToContact}>
                Get in Touch
              </button>
              <a href={`mailto:${contact.email}`} className="btn-secondary">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
