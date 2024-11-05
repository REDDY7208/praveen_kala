import React from 'react';
import './verifyMessageForget.css'; // Create a CSS file for styling

const VerifyMessageForget = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
       
        <p>{message}</p>
        <button className="modal-close" onClick={onClose}>Close</button> {/* Changed from '×' to 'Close' */}
      </div>
    </div>
  );
};

export default VerifyMessageForget;
