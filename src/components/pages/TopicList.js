import TopicsList from "../storys/TopicsList";
import React from "react";
import AddTopic from "../storys/AddTopics";
import Footer from "./Footer";
import "./TopicList.css";

export default function TopicList () {

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

