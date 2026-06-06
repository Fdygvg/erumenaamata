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
          <a href={`mailto:${contact.email}`} className="contact-card gmail">
            <i className="fa-brands fa-google"></i>
            <span>Gmail</span>
          </a>
          
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-card whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
