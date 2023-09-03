import AuthComponent from "../../Pages/Auth/AuthComponent";
import React, {useState} from "react";


export default function LoginButton() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogout = () => {
        setLoggedIn(false);
    };


    const handleToggleAuth = () => {
        setShowAuth(!showAuth);
        setShowLogin(true);
    };

    const handleLogin = (email, password) => {
        // In a real application, you would send the login credentials to the server for verification
        // For this demonstration, you would consider any input as valid credentials
        if (email && password) {
            setLoggedIn(true);
            setShowAuth(false);
            setShowLogin(false);
        } else {
            alert('Please enter a valid email and password.');
        }
    };


    const handleCloseAuth = () => {
        setShowAuth(false);
    };
    return (
        <>
            <p>
                {loggedIn ? (
                    <button className="button-login" onClick={handleLogout}>Logout</button>
                ) : (
                    <button className="button-login" onClick={handleToggleAuth}>{showLogin ? 'Get Access' :'Get Access' }</button>
                )}
                {showAuth && (
                    <AuthComponent
                        onLogin={handleLogin}
                        onClose={handleCloseAuth}
                        showLogin={showLogin}
                    />
                )}
            </p>
        </>
    )
}
