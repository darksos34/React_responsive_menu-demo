import React, {useEffect, useState} from 'react';
import './NavStyle.css';
import Logo from '../../assets/logo.png';

import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';
import NavMenu from "./NavMenu";
import Router from "./Router";

import Footer from "../pages/Footer";

const NavComponent = () =>  {
    const [toggleMenu, setToggleMenu] = useState(false);
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
        <div>
            <nav>
                <div className="container">
                    <div className="links">
                        <div className="links-logo">
                            <img src={Logo} alt="sss" srcSet=""></img>
                        </div><button onClick={toggleTheme}>Toggle Theme</button>
                        <div className="links-wrapper">
                            <NavMenu/>
                        </div>

                        <div className="nav-menu">
                            {toggleMenu ? (
                                <RiCloseLine
                                    color="#3333"
                                    size={27}
                                    onClick={() => setToggleMenu(false)}
                                />
                            ) : (
                                <RiMenu3Line
                                    color="#3333"
                                    size={27}
                                    onClick={() => setToggleMenu(true)}
                                />
                            )}
                        </div>
                    </div>

                </div>
            </nav>
            <div>
                <Router/>
            </div>
            <Footer/>
        </div>
    );
}
export default NavComponent;
