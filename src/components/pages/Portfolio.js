import React from 'react';
import './Main.css';
import Footer from "./Footer";
import Card from "./Card";

export default function Portfolio (){

    return (
        <>
            <div className="container-login">
                <div className="header-title">
                    <nav>
                        <h1>Portfolio</h1>
                    </nav>
                </div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card     img="data:image/jpeg;base64,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" title="Website"  description="Dit is een test card"
                            />
                        </nav>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.moneyunder30.com/wp-content/uploads/2021/10/shutterstock_1489795766.jpg" title="Carptenter"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.moneyunder30.com/wp-content/uploads/2021/10/shutterstock_1489795766.jpg" title="Decorating"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://www.insia.net/wp-content/uploads/2020/12/vmware-vision-vmworld2019-960x423.png" title="Machine"  description="Dit is een test card"/>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <Card   img="https://upload.wikimedia.org/wikipedia/commons/2/25/Linux_Mint_20_Cinnamon.png" title="Linux"  description="Dit is een test card"/>
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
