import { siteData } from '../data/content';
import BakingCarousel from './BakingCarousel';
import './css/BakingCorner.css';

export default function BakingCorner() {
  const { bakingCorner } = siteData;

  return (
    <section id="baking" className="baking-corner">
      <div className="baking-container">
        <div className="baking-grid">
          {/* Left Side - Content */}
          <div className="baking-content">
            <h2>{bakingCorner.title}</h2>
            <p className="baking-subtitle">{bakingCorner.subtitle}</p>
            <p className="baking-description">{bakingCorner.description}</p>
            
            <div className="baking-specialties">
              <h3>Specialties</h3>
              <ul>
                {bakingCorner.specialties.map((specialty, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-cookie-bite"></i>
                    <span>{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="baking-carousel-wrapper">
            <BakingCarousel images={bakingCorner.bakedCreations} />
          </div>
        </div>
      </div>
    </section>
  );
}
