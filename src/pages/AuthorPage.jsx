import { useEffect } from 'react';
import AuthorHero from '../components/AuthorHero';
import Books from '../components/Books';
import BakingCorner from '../components/BakingCorner';
import AuthorAbout from '../components/AuthorAbout';
import Contact from '../components/Contact';

export default function AuthorPage() {
  useEffect(() => {
    document.body.classList.add('author-mode');
    return () => {
      document.body.classList.remove('author-mode');
    };
  }, []);

  return (
    <>
      <AuthorHero />
      <Books />
      <BakingCorner />
      <AuthorAbout />
      <Contact />
    </>
  );
}
