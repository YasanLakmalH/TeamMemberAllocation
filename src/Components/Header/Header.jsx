import "./Header.css";
import React from "react";

function Header({selectedTeam,teamMemberCount}){
    return(
        <>
        <ul>
            <li>Home</li>
            <li>Teams</li>            
        </ul>
        <br></br>
        <h1>Team Member Allocation</h1>
        <h2>{selectedTeam} has {teamMemberCount} members</h2>
        <br/>
        </>
    )
}

export default Header;