import React from 'react';
import "./Footer.css";
import LogoInstagram from "../../assets/logo-instagram.png";
import LogoTwitter from "../../assets/logo-twitter.png";

function FacebookLink() {
    return <>
        <div className="conatainer-social">
            <div className="links-instagram">
                <a href="https://www.instagram.com/jordy_model"><img src={LogoInstagram} alt="notfound" srcSet=""></img></a> </div>
        </div>
    </>
}function InstagramLink() {
    return <>

        <div className="conatainer-social">
            <div className="links-twitter">
                <a href="https://twitter.com/Unique_Jordy"><img src={LogoTwitter} alt="notfound" srcSet=""></img></a> </div>
        </div>
    </>
}

export default function Footer () {

    return (
        <div className="footer" >
            <div>
                <FacebookLink/>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
                <InstagramLink/>
            </div>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;© 2023 Jordy Coder - Powered by Jda
            </p>
        </div>
    );
}

