import React from "react";

import Socials from './menus/Socials';

import './menus/Menu.css';

const SiteFooter = () => {
    return (
        <div id="site-footer">
            <p id="footer-copyright">&copy; Sondra Coffin, {new Date().getFullYear()}</p>
            <Socials/>
        </div>
    );
}

export default SiteFooter;