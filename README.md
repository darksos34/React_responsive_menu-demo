Menu tutorial

Dependencies needed:

### package.json
````
"axios": "^1.1.2",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^4.4.0",
"react-router": "^6.4.2",
"react-router-dom": "^6.4.2",
"react-table": "^7.8.0",
"react-validation": "^3.0.7",
"validator": "^13.7.0",
"web-vitals": "^2.1.4"
````


### src/components/pages/Home.js
```
import React from 'react';
import './Pages.css';

export default function Home (){

    return (
         <>
            <div className="container-login">
                <div className="card card-container">
                    <div className="header-title">
                        <nav>
                            <h1>Home</h1>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
```


### src/components/nav/Router.js
```` 

import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "../pages/Home";

export default function Router(){
    return (
        <Routes>
            <Route exact path="home" element={<Home></Home>}/>
        </Routes>
    )
}
````

### index.js
```
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

```

### src/components/nav/NavMenu.js
````
import React from 'react';
import {Link} from "react-router-dom";

export default function NavMenu() {

    return (
        <>
            <p>
                <Link to="/home" onClick={NavMenu}>Home</Link>
            </p>
        </>
    )

}
````
### NavComponent
````
import React, {useEffect, useState} from 'react';
import './NavStyle.css';
import Logo from '../../assets/logo.png';

import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';
import NavMenu from "./NavMenu";
import Router from "./Router";

const NavComponent = () =>  {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div >
            <nav>
                <div className="container">
                    <div className="links-logo">
                        <img src={Logo} alt="sss" srcSet=""></img>
                    </div>
                    <div className="links">
                        <div className="links-wrapper">
                            <NavMenu/>
                        </div>
                        <div className="nav-menu" >
                            {toggleMenu  ? (
                                <ul>
                                    <RiCloseLine
                                        color="#3333"
                                        size={27}
                                        onClick={() =>  setToggleMenu   (false)}
                                    /></ul>
                            ) : (
                                <ul>
                                    <RiMenu3Line
                                        color="#3333"
                                        size={27}

                                        onClick={() => setToggleMenu   (true )}
                                    /></ul>
                            )}
                            { toggleMenu &&
                                (
                                    <ul>
                                        <div className="nav-menu-wrapper">
                                            <div className="nav-menu-wrapper-links"  onClick={() => setToggleMenu   (false )}>
                                                <NavMenu/>
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

````

Css styling

````
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0.5rem 0;
    background-color: #fff;
    position: relative;
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);

}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.links{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.links-logo{
    margin-right: 2rem;
}

.links-logo img {
    width: 100px;
    height: 60px;
}

.links-wrapper {
    display: flex;
    flex-direction: row;
    margin: auto 0;
}

.links-wrapper-theme {
    width: 45px;
    height: 45px;
    margin-right: 150px;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
}

.nav-button:hover {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.links-wrapper p a,
.nav-button p,
.nav-menu-wrapper{
    transform: translateY(-7px);
    color: black;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
    text-decoration: none;
}

body {
    font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.nav-menu-wrapper p a {
    color: white;
}

.nav-button button,
.nav-menu-wrapper button {
    padding: 0.5rem 2rem;
    color: white;
    background-color: blue;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
}

.nav-menu {
    right: 10px;
    cursor: auto;
    position: fixed;
    margin-left: 1rem;
    display: none;
}

.nav-menu-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    text-align: end;
    background-color: rgba(40, 44, 52, 0.67);
    position: absolute;
    min-height: 100px;
    right: 10px;
    margin-top: 2rem;
    min-width: 150px;
    border-radius: 5px;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}

.nav-menu-wrapper p a {
    margin: 1rem 0;
    text-decoration: none;
}
.nav-menu-wrapper-button {
    display: none;
}

@media screen and (max-width: 1050px) {
    .links-wrapper {
        display: none;
    }
    .nav-menu {
        margin-left: auto;

        display: flex;
    }
    .nav-menu-wrapper{
        align-content: center;
        width: min-content;
        height: max-content;
    }
}

@media screen and (max-width:  700px) {
    .container {
        padding: 1rem 2rem;
    }
    .nav-menu-wrapper{
        align-items: center;
        width: min-content;
        height: max-content;
    }
}

@media screen and (max-width:  550px) {
    .container {
        padding: 1rem 2rem;
    }
    .nav-button {
        display: none;
    }
    .nav-menu-wrapper {
        top: 20px;
        height: auto;
    }
    .nav-menu-wrapper-button {
        display: block;
    }
}

````

## NEXT GOALS
1. Finish Card component without bootstrap
2. Add button styles as your own libary
3. Connect Backend with frontend. (Choose host)