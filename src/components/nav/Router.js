import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Bestel from "../pages/Bestel";
import React from "react";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";


export default function Router(){
    return (

        <Routes>
            <Route exact path="home" element={<Home></Home>}/>
            <Route exact path="bestel" element={<Bestel></Bestel>}/>
            <Route exact path="portfolio" element={<Portfolio></Portfolio>}/>
            <Route exact path="contact" element={<Contact></Contact>}/>
        </Routes>

    )
}
