import React from 'react';
import '../../Style/Main.css';
import Footer from "../Footer/Footer";
import BigTextCard from "../../Components/Card/TextCards/Big/BigTextCard";

import CommentList from "../Comment/CommentList";



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

                    <div className="header-title">
                        <nav>
                            <BigTextCard title="React Card component" description="Generic Card" text="How to build a generic React component"/>
                        </nav>
                </div>
            </div>
               <CommentList/>
            <br></br>
            <div className="footer-down">
                <Footer/>
            </div>
        </>
    )
}
