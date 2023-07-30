import TopicsList from "./Topics/TopicsList";
import React, {useState} from "react";
import Footer from "../Footer/Footer";
import "./TopicList.css";
import './../Auth/AuthComponent.css';
import AuthComponent from "../Auth/AuthComponent";

export default function TopicListNav () {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const handleLogin = (email, password) => {
        // In a real application, you would send the login credentials to the server for verification
        // For this demonstration, you would consider any input as valid credentials
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

    const handleToggleAuth = () => {
        setShowAuth(!showAuth);
        setShowLogin(true);
    };

    const handleCloseAuth = () => {
        setShowAuth(false);
    };

    return (
        <>
        <div >

                <>
            <div className="topic-list-add">
            </div>
            <div className="topic-list-search">


            </div></>

                {loggedIn ? (    <TopicsList/>
            ) : (
                <>
                    {showAuth && (
                        <AuthComponent
                            onLogin={handleLogin}
                            onClose={handleCloseAuth}
                            showLogin={showLogin}
                        />
                    )}
                </>
            )}
            <div className="footer-topic">
            </div>
            <Footer/>
        </div>
        </>
    )
}

