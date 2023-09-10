import React from "react";

import "./Menu.css";

const Socials = () => {
    return (
        <div id="footer-socials">
            <a className="footer-icon left" href="https://www.linkedin.com">
            <img className="footer-icon" src={require("./linkedin-icon.png")} alt="LinkedIn"/>
            </a>
            <a className="footer-icon right" href="https://www.microsoft.com">
                <img className="footer-icon" src={require("./email-icon.png")} alt="Email"/>
            </a>
        </div>
    );
}

export default Socials;