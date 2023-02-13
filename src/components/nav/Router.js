import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import Expert from "../pages/Expert";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

import TopicList from "../pages/TopicList";
import Topic from "../storys/Topic";
import SubNav from "./hamburgerMenu/main/SubNav";

export default function Router(){
    console.log(Topic)
    return (

        <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route exact path="expert" element={<Expert></Expert>}/>
            <Route exact path="contact" element={<Contact></Contact>}/>
            <Route exact path="portfolio" element={<Portfolio></Portfolio>}/>
            <Route path="topiclist" element={<TopicList></TopicList>}/>
            <Route path="submenu" element={<SubNav></SubNav>}/>
        </Routes>

    )
}
