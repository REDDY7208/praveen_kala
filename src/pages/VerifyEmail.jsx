import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VerifyEmail = () => {
    const { token } = useParams();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5001/verify-email/${token}`, {
                    method: 'GET',
                });

                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                setMessage('Error: Unable to verify email.');
            }
        };

        verifyEmail();
    }, [token]);

    return (
        <div>
            <h2>Email Verification</h2>
            {message && <p>{message}</p>}
        </div>
    );
};

export default VerifyEmail;
