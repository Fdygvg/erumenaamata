import { useState } from 'react';
import { siteData } from '../data/content';
import './css/Books.css';

export default function Books() {
  const { books } = siteData;
  const [flippedBook, setFlippedBook] = useState(null);

  const handleFlip = (bookId, hasBackCover) => {
    if (hasBackCover) {
      setFlippedBook(flippedBook === bookId ? null : bookId);
    }
  };

  return (
    <section id="books" className="books">
      <div className="books-container">
        <div className="books-header">
          <h2>Published Works</h2>
          <p>Explore my collection of written works</p>
        </div>

        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div
                className={`book-cover-wrapper ${
                  flippedBook === book.id ? 'flipped' : ''
                } ${!book.coverBack ? 'no-flip' : ''}`}
                onClick={() => handleFlip(book.id, !!book.coverBack)}
              >
                <div className="book-cover-inner">
                  <img
                    src={book.coverFront}
                    alt={`${book.title} front cover`}
                    className="book-cover book-cover-front"
                    loading="lazy"
                  />
                  {book.coverBack && (
                    <img
                      src={book.coverBack}
                      alt={`${book.title} back cover`}
                      className="book-cover book-cover-back"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>

              <div className="book-info">
                <div className="book-meta">
                  <span className="book-genre">{book.genre}</span>
                  <span className="book-year">{book.year}</span>
                </div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <a
                  href={book.purchaseUrl}
                  className="btn-buy"
                  onClick={(e) => {
                    if (book.purchaseUrl === '#') {
                      e.preventDefault();
                      alert('Purchase link coming soon!');
                    }
                  }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
