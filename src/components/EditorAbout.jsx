import { siteData } from '../data/content';
import './css/About.css';

export default function EditorAbout() {
  const { editorAbout } = siteData;

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-bio">{editorAbout.bio}</p>
        <div className="about-credentials">
          {editorAbout.credentials.map((credential, index) => (
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
