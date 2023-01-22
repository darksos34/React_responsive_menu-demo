import React from 'react';
import {Link} from "react-router-dom";

import {
    FaBuromobelexperte,
    FaDatabase,
    FaHome,
    FaMedapps,
    FaReadme,
} from "react-icons/fa";

export default function NavIconMenu() {

    return (
        <>
            <p>
                <Link to="/home" onClick={NavIconMenu}><FaHome /> Home</Link>
            </p>
            <p>
                <Link to="/expert"><FaBuromobelexperte /> Expert</Link>
            </p>
            <p>
                <Link to="/contact"><FaMedapps />Contact</Link>
            </p>
            <p>
                <Link to="/portfolio"><FaReadme />  portfolio</Link>
            </p>
            <p>
                <Link to="/topiclist"><FaDatabase /> Topiclijst</Link>
            </p>

        </>
    );
}
