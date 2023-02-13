import React from 'react';
import './Main.css';
import Footer from "./Footer";
import Card from "./Card";
import "./Home.css";

//TODO Remove all TEST DATA and only add 1 card component WIDE.
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
                            <Card   img="https://t3.ftcdn.net/jpg/02/85/92/64/360_F_285926473_L4IqNJhss4ym9WOYUQYN0TCecpFDFerR.jpg" title="Coding"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://t3.ftcdn.net/jpg/02/85/92/64/360_F_285926473_L4IqNJhss4ym9WOYUQYN0TCecpFDFerR.jpg" title="Coding"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://t3.ftcdn.net/jpg/02/85/92/64/360_F_285926473_L4IqNJhss4ym9WOYUQYN0TCecpFDFerR.jpg" title="Coding"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="footer-down">
                <Footer/>
            </div>
        </>
    )
}
