import React from "react";

const EmployeeForm = () => {
  return (
    <form className="row my-3">
      <div className="col-md-6">
        <label for="name">Name</label>
        <input type="text" id="name" className="form-control"/>
      </div>
      <div className="col-md-6">
        <label for="gender">Gender</label>
        <input type="text" id="gender"className="form-control"/>
      </div>

    </form>
  );
};

export default EmployeeForm;
