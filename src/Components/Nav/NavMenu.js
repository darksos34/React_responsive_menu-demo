import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {MdDarkMode} from "react-icons/md";


export default function NavMenu() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <p>
                <Link className="nav-menu-hoover" to="/" onClick={NavMenu}>Blog</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/expert">Expert</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/portfolio">portfolio</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/topiclist">Topiclijst</Link>
            </p>
            <p>
                <Link className="nav-menu-hoover" to="/contact">Contact</Link>
            </p>
            {/*<LoginButton/>*/}
            <p>
                <button  className="links-wrapper-theme" onClick={toggleTheme}><MdDarkMode/></button>
            </p>
        </>
    )
}
