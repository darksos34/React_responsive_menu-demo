import React, { useState } from 'react';
import AuthComponent from './AuthComponent';
import './AuthComponent.css';
const LoginButton = () => {
    const [showAuth, setShowAuth] = useState(false);

    const handleShowAuth = () => {
        setShowAuth(true);
    };

    return (
        <div>
            <button className="button-login" onClick={handleShowAuth}>Login</button>
            {showAuth && <AuthComponent />}
        </div>
    );
};

export default LoginButton;
