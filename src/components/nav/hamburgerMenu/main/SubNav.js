import React, { useState} from 'react';

import './../../../../App.css';

import SubMenu from "../menu/SubMenu";
import Toggle from "../menu/Toggle";

const SubNav = () => {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }

    return (
        <div className="App">

            <Toggle handleNavToggle={handleNavToggle}/>

            { navToggled ? <SubMenu handleNavToggle={handleNavToggle} /> : null }

        </div>
    );
}

export default SubNav;
