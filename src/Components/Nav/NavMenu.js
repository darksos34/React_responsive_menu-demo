import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";
import {MdDarkMode} from "react-icons/md";
import AuthComponent from "../../Pages/Auth/AuthComponent";

export default function NavMenu() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);



    const [loggedIn, setLoggedIn] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const handleShowAuth = () => {
        setShowAuth(true);
        setShowLogin(false);
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
                <Link className="nav-menu-hoover" to="/" onClick={NavMenu}>Blog</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/expert">Expert</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/portfolio">portfolio</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/topiclist">Topiclijst</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/contact">Contact</Link>
            </p>
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
            <p>
              <button  className="links-wrapper-theme" onClick={toggleTheme}><MdDarkMode/></button>
            </p>
        </>
    )
}
