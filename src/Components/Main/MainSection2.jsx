import React from "react";
import "./MainSection2.css";

let teamAmembers = [1,3];
let teamBmembers = [2,4];
let teamCmembers = [5,6];

function MainSection2(props) {
  let cardClass = "p-2 ";
  console.log(props.isTeamA);
  console.log(props.isTeamA);
  console.log(props.isTeamA);
  
  if (props.isTeamA){
    cardClass += teamAmembers.includes(props.id) ? "bg-danger" : "border-success";
  }
  if (props.isTeamB){
    cardClass += teamBmembers.includes(props.id) ? "bg-danger" : "border-success";
  }
  if (props.isTeamC){
    cardClass += teamCmembers.includes(props.id) ? "bg-danger" : "border-success";
  }

 
  return (
    <section className="col-lg-4 col-md-6 col-sm-12 col-12 g-2">
      <div className={cardClass}>
            <div lassNcame="card-header">
            <img className="card-img-top" alt="person.png" src={props.imgUrl} />
            </div>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            </div>
      </div>
    </section>
  );
}

export default MainSection2;
