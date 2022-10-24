import React from "react";
import "./Employees.css";


const Employees = ({employees,selectedTeam,handleTeamSelectionChange,handleEmployeeCardClick}) => {
  

  return (
    <>
      <div className="container px-5">
        <select
          className="form-select"
          value={selectedTeam}
          onChange={handleTeamSelectionChange}
        >
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamC">TeamC</option>
        </select>
      </div>
      {employees.map((employee) => (
        <div className="col-lg-4">
          <div
            key={employee.id}
            id={employee.id}
            className={
              employee.teamName === selectedTeam
                ? "card p-4 border-danger"
                : "card p-4"
            }
            style={{ cursor: "pointer" }}
            onClick={handleEmployeeCardClick}
          >
            <div lassNcame="card-header">
              <img
                className="card-img-top"
                alt="person.png"
                src={employee.imgUrl}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{employee.name}</h5>
              <p className="card-text">{employee.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Employees;
