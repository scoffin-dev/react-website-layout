import React from "react";

import './Menu.css';

const HeaderMenu = () => {
    return (
        <div id="header-menu" className="menu">
            <p className="header-menu-tab left">Home</p>
            <p className="header-menu-tab right">Contact</p>
        </div>
    );
}

export default HeaderMenu;