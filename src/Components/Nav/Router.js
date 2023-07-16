import {Route, Routes} from "react-router-dom";
import React from "react";

import Expert from "../../Pages/Expert/Expert";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Contact from "../../Pages/Contact/Contact";

import TopicListNav from "../../Pages/TopicList/TopicListNav";
import Topic from "../../Pages/TopicList/Topics/Topic";
import SubNav from "./hamburgerMenu/main/SubNav";
import Blog from "../../Pages/Blog/Blog";

export default function Router(){
    console.log(Topic)
    return (

        <Routes>
            <Route exact path="/" element={<Blog></Blog>}/>
            <Route exact path="expert" element={<Expert></Expert>}/>
            <Route exact path="contact" element={<Contact></Contact>}/>
            <Route exact path="portfolio" element={<Portfolio></Portfolio>}/>
            <Route path="topiclist" element={<TopicListNav></TopicListNav>}/>
            <Route path="submenu" element={<SubNav></SubNav>}/>
        </Routes>

    )
}
