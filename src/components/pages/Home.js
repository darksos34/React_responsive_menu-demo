import React from 'react';
import './Pages.css';
import Footer from "./Footer";
import Card from "./Card";

export default function Home (){

    return (
        <>
            <div className="container-login">
                <div className="header-title">
                    <nav>
                        <h1>Home</h1>
                    </nav>
                </div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.moneyunder30.com/wp-content/uploads/2021/10/shutterstock_1489795766.jpg" title="Homesweet"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.moneyunder30.com/wp-content/uploads/2021/10/shutterstock_1489795766.jpg" title="Homesweet"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.moneyunder30.com/wp-content/uploads/2021/10/shutterstock_1489795766.jpg" title="Homesweet"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.moneyunder30.com/wp-content/uploads/2021/10/shutterstock_1489795766.jpg" title="Homesweet"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.moneyunder30.com/wp-content/uploads/2021/10/shutterstock_1489795766.jpg" title="Homesweet"  description="Dit is een test card"/>
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
