import React from 'react';
import './Pages.css';
import Footer from "./Footer";

export default function Home (){

    return (
        <>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <h1>Home</h1>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="footer-down">
                <Footer/>
            </div>
        </>
    )
}
