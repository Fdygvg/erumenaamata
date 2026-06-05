import { useState, useEffect } from 'react';
import { siteData } from '../data/content';
import './css/Hero.css';

const textExamples = [
  {
    before: "Me and him went to the store yesterday and we seen alot of things their that was interesting.",
    after: "He and I went to the store yesterday and saw many interesting things there."
  },
  {
    before: "The company should of made there decision sooner because its affecting everyone.",
    after: "The company should have made their decision sooner because it's affecting everyone."
  },
  {
    before: "I was suppose to meet them at 5 o'clock but I got stuck in traffic for awhile.",
    after: "I was supposed to meet them at 5 o'clock, but I was stuck in traffic for a while."
  },
  {
    before: "Between you and I, this is definitely the best option irregardless of what they say.",
    after: "Between you and me, this is definitely the best option, regardless of what they say."
  }
];

export default function Hero() {
  const { hero, contact } = siteData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % textExamples.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Side - Before/After Examples */}
          <div className="hero-examples">
            <div className={`example-box before-box ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
              <div className="example-label">
                <i className="fa-solid fa-xmark"></i>
                <span>Before</span>
              </div>
              <p className="example-text">{textExamples[currentIndex].before}</p>
            </div>

            <div className={`example-box after-box ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
              <div className="example-label">
                <i className="fa-solid fa-check"></i>
                <span>After</span>
              </div>
              <p className="example-text">{textExamples[currentIndex].after}</p>
            </div>

            <div className="example-indicators">
              {textExamples.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                ></span>
              ))}
            </div>
          </div>

          {/* Right Side - Hero Content */}
          <div className="hero-content">
            <h1 className="hero-headline">{hero.headline}</h1>
            <p className="hero-subheadline">{hero.subheadline}</p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={scrollToContact}>
                Get Started
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
