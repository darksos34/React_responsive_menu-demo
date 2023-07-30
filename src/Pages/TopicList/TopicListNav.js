import TopicsList from "./Topics/TopicsList";
import React, {useState} from "react";
import Footer from "../Footer/Footer";
import "./TopicList.css";
import AuthComponent from "../Auth/AuthComponent";
import './../Auth/AuthComponent.css';
export default function TopicListNav () {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = (email, password) => {
        // In a real application, you would send the login credentials to the server for verification
        // For this demonstration, we consider any input as valid credentials
        if (email && password) {
            setLoggedIn(true);
            setShowAuth(false);
        } else {
            alert('Please enter a valid email and password.');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const handleShowLogin = () => {
        setShowAuth(true);
        setIsLogin(true);
    };

    const handleShowRegister = () => {
        setShowAuth(true);
        setIsLogin(false);
    };
    return (
        <>
            <div className="topic-list-add">
                <div className="">
                    {loggedIn ? (
                        <button className="button-login" onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <button className="button-login" onClick={handleShowRegister}>Register</button>
                           <button className="button-login" onClick={handleShowLogin}>Login</button>
                        </>
                    )}
                </div>

            </div>
            <div className="topic-list-search">
                {loggedIn ? (
                   <TopicsList/>
                ) : (
                    showAuth && <AuthComponent onLogin={handleLogin} isLogin={isLogin} />
                )}
            </div>
            <div className="footer-topic">
            </div>
            <Footer/>
        </>
    )
}

