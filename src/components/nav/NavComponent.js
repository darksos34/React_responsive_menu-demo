import React, {useEffect, useState} from 'react';
import './NavStyle.css';
import Logo from '../../assets/logo.png';
import NavMenu from "./NavMenu";
import Router from "./Router";
import SubNav from "./hamburgerMenu/main/SubNav";
import NavIconMenu from "./NavIconMenu";
import {MdDarkMode} from "react-icons/md";
import {Link} from "react-router-dom";

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
        <div >
            <nav>

                <div className="container">

                    <div className="links-logo">
                        <Link to="/home">
                        <button className="links-wrapper">
                   <img src={Logo} alt="sss" srcSet=""></img></button></Link>
                    </div>
                    <div className="links">
                        <div className="links-wrapper">
                            <NavMenu/>
                        </div>
                        <div className="nav-menu" >
                            {toggleMenu  ? (
                                <ul>
                                    <SubNav
                                        color="#3333"
                                        size={27}
                                        onClick={() =>  setToggleMenu   (false)}
                                    />    <button  className="links-wrapper-theme" onClick={toggleTheme}><MdDarkMode/></button></ul>
                            ) : (
                                <ul>
                                    <SubNav
                                        color="#3333"
                                        size={27}
                                        onClick={() => setToggleMenu   (true )}
                                    />           <button  className="links-wrapper-theme" onClick={toggleTheme}><MdDarkMode/></button></ul>
                            )}
                            { toggleMenu &&
                                (
                                    <ul>
                                        <div className="nav-menu-wrapper">
                                            <div className="nav-menu-wrapper-links"  onClick={() => setToggleMenu   (false )}>
                                                <NavIconMenu/>
                                            </div>
                                        </div>
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <Router/>
            </div>
        </div>
    );
}
export default NavComponent;
