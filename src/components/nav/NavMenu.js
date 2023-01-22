import React from 'react';

import {Link} from "react-router-dom";

export default function NavMenu() {

    return (
        <>
            <p>
                <Link className="nav-menu-hoover" to="/home" onClick={NavMenu}>Home</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/expert">Expert</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/contact">Contact</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/portfolio">portfolio</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/topiclist">Topiclijst</Link>
            </p>
        </>
    )
}
