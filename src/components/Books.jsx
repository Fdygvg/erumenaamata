import { useState } from 'react';
import { siteData } from '../data/content';
import Modal from './Modal';
import './css/Books.css';

export default function Books() {
  const { books } = siteData;
  const [flippedBook, setFlippedBook] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [messageModal, setMessageModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  const handleFlip = (bookId, hasBackCover) => {
    if (hasBackCover) {
      setFlippedBook(flippedBook === bookId ? null : bookId);
    }
  };

  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setCurrentVideo(null);
  };

  const openMessageModal = (title, message, type = 'info') => {
    setMessageModal({ isOpen: true, title, message, type });
  };

  const closeMessageModal = () => {
    setMessageModal({ ...messageModal, isOpen: false });
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
                
                <div className="book-actions">
                  <a
                    href={book.purchaseUrl}
                    className={`btn-buy ${book.comingSoon ? 'coming-soon' : ''}`}
                    target={book.purchaseUrl !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (book.purchaseUrl === '#') {
                        e.preventDefault();
                        if (!book.comingSoon) {
                          openMessageModal(
                            'Coming Soon',
                            'The purchase link for this book will be available soon. Stay tuned!',
                            'info'
                          );
                        }
                      }
                    }}
                  >
                    {book.comingSoon ? 'Coming Soon 🍪' : 'Buy Now'}
                  </a>
                  
                  {book.demoVideo && (
                    <button
                      className="btn-demo"
                      onClick={() => openVideoModal(book.demoVideo)}
                    >
                      <i className="fa-solid fa-play"></i>
                      Watch Demo Video
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <video controls autoPlay className="video-player">
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Message Modal */}
      <Modal
        isOpen={messageModal.isOpen}
        title={messageModal.title}
        message={messageModal.message}
        type={messageModal.type}
        onClose={closeMessageModal}
      />
    </section>
  );
}
