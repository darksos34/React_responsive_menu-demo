import TopicsList from "../storys/TopicsList";
import React from "react";
import AddTopic from "../storys/AddTopics";

export default function TopicList () {

    return (
        <>
            <div className="topic-list-add">
                <AddTopic/>
            </div>
            <div className="topic-list-search">
                <TopicsList/>
            </div>
        </>
    )
}

