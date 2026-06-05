import { siteData } from '../data/content';
import './css/About.css';

export default function AuthorAbout() {
  const { authorAbout } = siteData;

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About the Author</h2>
        <p className="about-bio">{authorAbout.bio}</p>
        <div className="about-credentials">
          {authorAbout.credentials.map((credential, index) => (
            <div key={index} className="credential-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>{credential}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
