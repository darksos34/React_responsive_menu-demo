import React from "react";

import AddTopic from "../storys/AddTopics";


export default function List (){

    return (
        <>
            <div className="container-login">
                <div className="header-title">
                    <nav>
                        <h1>Topics</h1>
                    </nav>
                    <AddTopic/>
                </div>

            </div>
        </>
    )
}
