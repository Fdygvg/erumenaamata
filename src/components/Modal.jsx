import './css/Modal.css';

export default function Modal({ isOpen, title, message, onClose, type = 'info' }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className={`modal-header modal-${type}`}>
          <div className="modal-title">
            {type === 'info' && <i className="fa-solid fa-circle-info"></i>}
            {type === 'warning' && <i className="fa-solid fa-triangle-exclamation"></i>}
            {type === 'success' && <i className="fa-solid fa-check-circle"></i>}
            <h2>{title}</h2>
          </div>
        </div>

        <div className="modal-body">
          <p>{message}</p>
        </div>

        <div className="modal-footer">
          <button className="modal-btn-primary" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
