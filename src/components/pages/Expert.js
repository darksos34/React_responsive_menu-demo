import React from 'react';
import './Pages.css';
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
            <div className="card__container">
                <Card   img="https://www.moneyunder30.com/wp-content/uploads/2021/10/shutterstock_1489795766.jpg" title="Homesweet"  description="Dit is een test card"/></div>
           <div> <Footer/></div>

        </>
    )
}
