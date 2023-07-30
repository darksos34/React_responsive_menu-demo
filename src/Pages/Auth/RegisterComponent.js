import React, { useState } from 'react';
import AuthComponent from './AuthComponent';
import './AuthComponent.css';
const RegisterButton = () => {
    const [showAuth, setShowAuth] = useState(false);

    const handleShowAuth = () => {
        setShowAuth(true);
    };

    return (
        <div>
            <button className="button-login" onClick={handleShowAuth}>Register</button>
            {showAuth && <AuthComponent />}
        </div>
    );
};

export default RegisterButton;
