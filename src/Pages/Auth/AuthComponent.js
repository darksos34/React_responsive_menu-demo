import React, { useState, useEffect, useRef } from 'react';
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

const AuthComponent = ({ onLogin, onRegister, onClose }) => {

    const [authType, setAuthType] = useState('login');
    const authRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (authRef.current && !authRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    return (
        <div className="auth-overlay">
            <div className="auth-container" ref={authRef}>
                <div className="auth-box">
                    <button className="button-login" className="close-button" onClick={onClose}>Close</button>
                    {authType === 'login' ? (
                        <>
                            <LoginComponent onLogin={onLogin} onClose={onClose} />
                            <p>Don't have an account? <span onClick={() => setAuthType('register')}>Register here</span></p>
                        </>
                    ) : (
                        <>
                            <RegisterComponent onRegister={onRegister} onClose={onClose} />
                            <p>Already have an account? <span onClick={() => setAuthType('login')}>Login here</span></p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthComponent;
