import "./Modal.css";

export default function ConfirmationModal({ visible, onClose, message }) {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🎉 {message} 🎉</h2>
        <a href="/" className="btn-primary" onClick={onClose}>
          Close and to Home
        </a>
      </div>
    </div>
  );
}