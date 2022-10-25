import React from "react";
import "./footer.css";
const Footer = () => {
    let today = new Date();
    return(
        <div className="footer p-2">
        <p>Team Member Allocation App - {today.getFullYear()} </p>
        </div>
    )
    }

export default Footer;