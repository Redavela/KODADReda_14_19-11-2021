import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropDown } from 'dropdownlib-reda';
import { states, department } from '../DropDownData';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const Register = () => {
  const [employeeForm, setEmployeeForm] = useState({
    firstName: '',
    lastName: '',
    birth: '',
    startDate: '',
    street: '',
    city: '',
    state: states[0].value,
    zipCode: '',
    department: department[0].value,
  });

  const dateMajority = new Date();
  dateMajority.setFullYear(dateMajority.getFullYear()-18);

  const handleChange = (e) => {
    setEmployeeForm({
      ...employeeForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isEmpty = false;
    for (let employeeField in employeeForm) {
      if (!employeeForm[employeeField]) {
        isEmpty = true;
      }
    }

    if (isEmpty) {
      toast.warn('All fields must be completed !'); 
    } else {
      let listeEmployees =
        JSON.parse(localStorage.getItem('listeEmployees')) || [];
      listeEmployees = [...listeEmployees, employeeForm];
      localStorage.setItem('listeEmployees', JSON.stringify(listeEmployees));
      toast.success('employee successfully created !');
    }
  };
  return (
    <main>
      <div className="title un">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link className='link' to="/liste">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={employeeForm.firstName}
            onChange={handleChange}
            id="firstName"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={employeeForm.lastName}
            onChange={handleChange}
            id="lastName"
          />

          <label htmlFor="birth">Date of Birth</label>
          <input
            id="birth"
            value={employeeForm.birth}
            onChange={handleChange}
            type="date"
            max={format(dateMajority, 'yyyy-MM-dd')}
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            value={employeeForm.startDate}
            onChange={handleChange}
            type="date"
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              value={employeeForm.street}
              onChange={handleChange}
              type="text"
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              value={employeeForm.city}
              onChange={handleChange}
              type="text"
            />

            <DropDown
              options={states}
              id="state"
              handleSelect={handleChange}
              label="State"
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              value={employeeForm.zipCode}
              onChange={handleChange}
              type="number"
            />
          </fieldset>
          <DropDown
            options={department}
            id="department"
            handleSelect={handleChange}
            label="Department"
          />
          <button type="submit" >Save</button>
        </form>
      </div>
    </main>
  );
};

export default Register;
