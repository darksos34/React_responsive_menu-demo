import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "../../Pages/Home/Home";
import Expert from "../../Pages/Expert/Expert";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Contact from "../../Pages/Contact/Contact";

import TopicListNav from "../../Pages/TopicList/TopicListNav";
import Topic from "../../Pages/TopicList/Topics/Topic";
import SubNav from "./hamburgerMenu/main/SubNav";

export default function Router(){
    console.log(Topic)
    return (

        <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route exact path="expert" element={<Expert></Expert>}/>
            <Route exact path="contact" element={<Contact></Contact>}/>
            <Route exact path="portfolio" element={<Portfolio></Portfolio>}/>
            <Route path="topiclist" element={<TopicListNav></TopicListNav>}/>
            <Route path="submenu" element={<SubNav></SubNav>}/>
        </Routes>

    )
}
