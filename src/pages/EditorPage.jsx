import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import EditorAbout from '../components/EditorAbout';
import Contact from '../components/Contact';

export default function EditorPage() {
  useEffect(() => {
    document.body.classList.remove('author-mode');
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <EditorAbout />
      <Contact />
    </>
  );
}
