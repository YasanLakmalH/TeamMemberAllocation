import React from "react"

function TeamSelect(props){  
    return(
        <section>
            <h4>Team Member Allocation</h4>
            <h5>Team Details</h5>
            <div className="container">
                <select>
                    <option value="A">Team A</option>
                    <option value="B">Team B</option>
                    <option value="C">Team C</option>
                </select>   
            </div>
        </section>
    )
}
export default TeamSelect;