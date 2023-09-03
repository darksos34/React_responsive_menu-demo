import React from "react";
import Footer from "../Footer/Footer";
import "./TopicList.css";
import './../Auth/AuthComponent.css';
import TopicsList from "./Topics/TopicsList";


export default function TopicListNav () {

    return (
        <>
            <div >

                <div className="topic-list-add">
                </div>
                <div className="topic-list-search">
                    <TopicsList/>
                </div>

                <div className="footer-topic">
                </div>
                <Footer/>
            </div>
        </>
    )
}

