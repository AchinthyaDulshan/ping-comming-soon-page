import { useState, useEffect } from 'react';

const useEmailValidation = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e, callback) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Please provide a valid emal address');
        } else {
            setError('');
            if (callback) {
                callback(); // Optional callback function after successful validation
            }
        }
    };
    
    return { email, setEmail, error, handleSubmit};

};

export default useEmailValidation;
