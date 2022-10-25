
import React from "react";


function Header({selectedTeam,teamMemberCount}){
    return(
        <>
        <br></br>
        <h1>Team Member Allocation</h1>
        <h2>{selectedTeam} has {teamMemberCount} members</h2>
        <br/>
        </>
    )
}

export default Header;