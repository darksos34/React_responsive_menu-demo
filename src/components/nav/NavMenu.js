import React from 'react';

import {Link} from "react-router-dom";

export default function NavMenu() {

    return (
        <>
            <p>
                <Link to="/home" onClick={NavMenu}>Home</Link>
            </p>
            <p>
                <Link to="/expert">Expert</Link>
            </p>
            <p>
                <Link to="/contact">Contact</Link>
            </p>
            <p>
                <Link to="/portfolio">portfolio</Link>
            </p>
            <p>
                <Link to="/topiclist">Topiclijst</Link>
            </p>

        </>
    )

}
