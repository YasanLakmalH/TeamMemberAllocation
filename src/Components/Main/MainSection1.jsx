import React from "react";
import "./MainSection1.css";
import MainSection2 from "./MainSection2";

const details = [
    {
      id:1,
      imgUrl:"img/male.png",
      name:"Member-1",
      description:"JavaScript, C++, C, Python"
    },
    {
      id:2,
      imgUrl:"img/male.png",
      name:"Member-2",
      description:"JavaScript, C++, C, Python"
    },
    {
      id:3,
      imgUrl:"img/male.png",
      name:"Member-3",
      description:"JavaScript, C++, C, Python"
    },
    {
      id:4,
      imgUrl:"img/male.png",
      name:"Member-4",
      description:"JavaScript, C++, C, Python"
    },
    {
      id:5,
      imgUrl:"img/male.png",
      name:"Member-5",
      description:"JavaScript, C++, C, Python"
    },
    {
      id:6,
      imgUrl:"img/male.png",
      name:"Member-6",
      description:"JavaScript, C++, C, Python"
    }
  ]
  
let teamA = false;
let teamB = false;
let teamC = false;

// function teamSelect(obj){
//     if (obj.value === "A"){
//         teamA = true;
//     }
//     if (obj.value === "B"){
//         teamB = true;
//     }
//     if (obj.value === "C"){
//         teamC = true;
//     }

//     // teamB = obj.value === "teamB" ? true:false;
//     // teamC = obj.value === "teamC" ? true:false;
//    }

function teamASelect(){
  teamA = true;
  return teamA;
}
function teamBSelect(){
  teamB = true;
  return teamB;
}
function teamCSelect(){
  teamC = true;
  return teamC;
}
   
function MainSection1(){
    return(
        <>
        <section>
        <section>
            <h4>Team Member Allocation</h4>
            <h5>Team Details</h5>
            <button className="btn btn-primary m-1" onClick={teamASelect}>TeamA</button>
            <button className="btn btn-primary m-1" onClick={teamBSelect}>TeamB</button>
            <button className="btn btn-primary m-1" onClick={teamCSelect}>TeamC</button>
            <div className="container">
                <select>
                    <option value="A">Team A</option>
                    <option value="B">Team B</option>
                    <option value="C">Team C</option>
                </select> 
            </div>
        </section>
        <div className='container col-lg-8 col-md-12 mt-4 '>
        <div className='row'>
          <MainSection2
            imgUrl = {details[0].imgUrl}
            name = {details[0].name}
            description = {details[0].description}
            id = {details[0].id}
            isTeamA = {teamA}
            isTeamB = {teamB}
            isTeamC = {teamC}
          />
          <MainSection2
            imgUrl = {details[1].imgUrl}
            name = {details[1].name}
            description = {details[1].description}
            id = {details[1].id}
          />
            <MainSection2
            imgUrl = {details[2].imgUrl}
            name = {details[2].name}
            description = {details[2].description}
            id = {details[2].id}
          />
          <MainSection2
            imgUrl = {details[3].imgUrl}
            name = {details[3].name}
            description = {details[3].description}
            id = {details[3].id}
          />
          <MainSection2
            imgUrl = {details[4].imgUrl}
            name = {details[4].name}
            description = {details[4].description}
            id = {details[4].id}
          />
            <MainSection2
            imgUrl = {details[5].imgUrl}
            name = {details[5].name}
            description = {details[5].description}
            id = {details[5].id}
          />
        </div>
      </div>
    </section>    
    </>
    )
}

export default MainSection1;