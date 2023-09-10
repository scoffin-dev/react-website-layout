import React from "react";

import SiteLogo from '../branding/SiteLogo';
import HeaderMenu from './menus/HeaderMenu';

const SiteHeader = () => {
    return (
        <div id="site-header">
            <SiteLogo/>
            <HeaderMenu/>
        </div>
    );
}

export default SiteHeader;