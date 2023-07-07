import TopicsList from "./Topics/TopicsList";
import React from "react";
import AddTopic from "./Topics/AddTopics";
import Footer from "../Footer/Footer";
import "./TopicList.css";

export default function TopicListNav () {

    return (
        <>
            <div className="topic-list-add">
                <AddTopic/>
            </div>
            <div className="topic-list-search">
                <TopicsList/>
            </div>
            <div className="footer-topic">

            </div>
            <Footer/>
        </>
    )
}

