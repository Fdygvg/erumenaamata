import { siteData } from '../data/content';
import './css/Services.css';

export default function Services() {
  const { services, documentTypes } = siteData;

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Core Services</h2>
          <p>Professional editing tailored to your needs</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <i className={`service-icon ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="document-types">
          <h3>Document Types</h3>
          <div className="document-tags">
            {documentTypes.map((type, index) => (
              <span key={index} className="document-tag">
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
