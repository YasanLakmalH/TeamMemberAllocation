import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Employees from './Components/Main/Employees';
import Footer from './Components/footer/footer';
import { useState,useEffect } from "react";

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) ||[{
      id: 1,
      imgUrl: "img/male.png",
      name: "Member-1",
      description: "JavaScript, C++, C, Python",
      teamName: "TeamA",
    },
    {
      id: 2,
      imgUrl: "img/male.png",
      name: "Member-2",
      description: "JavaScript, C++, C, Python",
      teamName: "TeamA",
    },
    {
      id: 3,
      imgUrl: "img/female.png",
      name: "Member-3",
      description: "JavaScript, C++, C, Python",
      teamName: "TeamB",
    },
    {
      id: 4,
      imgUrl: "img/male.png",
      name: "Member-4",
      description: "JavaScript, C++, C, Python",
      teamName: "TeamB",
    },
    {
      id: 5,
      imgUrl: "img/male.png",
      name: "Member-5",
      description: "JavaScript, C++, C, Python",
      teamName: "TeamC",
    },
    {
      id: 6,
      imgUrl: "img/male.png",
      name: "Member-6",
      description: "JavaScript, C++, C, Python",
      teamName: "TeamC",
    },
  ]);

  useEffect(()=>{
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));
  },[selectedTeam]);

  useEffect(()=>{
    localStorage.setItem('employeeList',JSON.stringify(employees));
  },[employees]);



  const handleTeamSelectionChange = (event) => {
    setTeam(event.target.value);
  };

  const handleEmployeeCardClick = (event) => {
    
    const transformedEmployees = employees.map((employee) =>(
      employee.id === parseInt(event.currentTarget.id)
        ? 
      employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
        )
    );
    setEmployees(transformedEmployees);
  };

  return (
    <div className="App">
      <Header
      selectedTeam={selectedTeam}
      teamMemberCount={
        employees.filter((employee)=>employee.teamName === selectedTeam).length}
      />
      <main>
        <div className='container col-8'>
        <div className="row g-2">
          <Employees 
          employees={employees}
          selectedTeam={selectedTeam}
          handleTeamSelectionChange={handleTeamSelectionChange}
          handleEmployeeCardClick={handleEmployeeCardClick}
          />
        </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
