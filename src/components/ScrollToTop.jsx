import { useState, useEffect } from 'react';
import './css/ScrollToTop.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button 
        className="scroll-to-top" 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
        <span>Back to Top</span>
      </button>
    )
  );
}
