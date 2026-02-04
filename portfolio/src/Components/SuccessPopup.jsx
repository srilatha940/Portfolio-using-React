import "./SuccessPopup.css";
export default function SuccessPopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-icon">✓</div>
        <h3>Form Submitted Successfully!</h3>
        <p>Thank you for reaching out 🚀</p>
        <button onClick={onClose}>Go Back</button>
      </div>
    </div>
  );
}
