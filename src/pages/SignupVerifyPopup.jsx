import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './signupVerifyPopup.css'; // You can style the modal with CSS

const SignupVerifyPopup = ({ message, onClose }) => {
    const navigate = useNavigate(); // Create a navigate function

    const handleClose = () => {
        onClose(); // Call the onClose prop (if you have any cleanup logic)
        navigate('/Login'); // Redirect to Login page
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h3>Verification</h3>
                <p>{message}</p>
                <button onClick={handleClose}>Close</button> {/* Use handleClose */}
            </div>
        </div>
    );
};

export default SignupVerifyPopup;
