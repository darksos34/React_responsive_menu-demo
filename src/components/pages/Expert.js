import React from 'react';
import './Main.css';
import Footer from "./Footer";
import Card from "./Card";

export default function Expert (){

    return (
        <>
            <div className="container-login">
                <div className="header-title">
                    <nav>
                        <h1>Expert</h1>
                    </nav>
                </div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" title="Medior"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" title="Basic"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" title="Simple"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" title="Learning"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" title="Exploring"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="footer-topic">

            </div>
            <Footer/>
        </>
    )
}
