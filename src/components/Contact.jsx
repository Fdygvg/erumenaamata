import { siteData } from '../data/content';
import './css/Contact.css';

export default function Contact() {
  const { contact, pricing } = siteData;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-tagline">{pricing.tagline}</p>
        
        <div className="contact-methods">
          <a href={`mailto:${contact.email}`} className="contact-card">
            <i className="fa-solid fa-envelope"></i>
            <span>{contact.email}</span>
          </a>
          
          <a href={`tel:${contact.phone}`} className="contact-card">
            <i className="fa-solid fa-phone"></i>
            <span>{contact.phone}</span>
          </a>
        </div>

        <p className="contact-availability">{contact.availability}</p>
      </div>
    </section>
  );
}
