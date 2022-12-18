import React from 'react';

import {Link} from "react-router-dom";

export default function NavMenu() {
     return (
        <>
            <p>
                <Link to="/home">Home</Link>
            </p>
            <p>
                <Link to="/bestel">Bestel</Link>
            </p>
            <p>
                <Link to="/contact">Contact</Link>
            </p>
            <p>
                <Link to="/portfolio">portfolio</Link>
            </p>
        </>
    )

}
