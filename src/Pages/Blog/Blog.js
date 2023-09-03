import React from 'react';
import '../../Style/Main.css';
import Footer from "../Footer/Footer";

//TODO Remove all TEST DATA and only add 1 card component WIDE.
export default function Blog (){


    return (
        <>
            <div className="container-login">
                <div className="header-title">
                    <nav>
                        <h1>Blog</h1>
                    </nav>
                </div>
            </div>
            <div className="container-login">
                <div className="blog-card">

                    Deze website heeft nog geen backend verbinding.
                    <br/>
                    Alles wat nu zichtbaar moet nog gekoppeld worden met een rest server.
                    <br/>
                   Binnenkort zal er elke week een nieuwe feature's worden geüpload.
                </div>
            </div>
            <br></br>
            <div className="footer-down">
                <Footer/>
            </div>
        </>
    )
}
