import React, { useState, useEffect } from 'react';
import './style/filter.css'; // Import your CSS
import logo from './images/vuedata-logo.png';

const employeeData = [
  { name: 'Muthukumaran', mailId: 'muthukumaran@vuedata.in', empId: 'VD350', status: 'Active', substatus: 'Operation' },
  { name: 'Monisha', mailId: 'monisha@vuedata.in', empId: 'VD351', status: 'Inprogress', substatus: 'Waiting for approval' },
  { name: 'Vignesh', mailId: 'vignesh@vuedata.in', empId: 'VD352', status: 'Rejected', substatus: 'Declined' },
  { name: 'Rajesh', mailId: 'rajesh@vuedata.in', empId: 'VD353', status: 'Active', substatus: 'Onboarding' },
  { name: 'Priya', mailId: 'priya@vuedata.in', empId: 'VD354', status: 'Inprogress', substatus: 'Pending info' },
  { name: 'Arun', mailId: 'arun@vuedata.in', empId: 'VD355', status: 'Rejected', substatus: 'Position filled' },
  { name: 'Kumar', mailId: 'kumar@vuedata.in', empId: 'VD356', status: 'Active', substatus: 'Training' },
  { name: 'Sanjay', mailId: 'sanjay@vuedata.in', empId: 'VD357', status: 'Inprogress', substatus: 'Document review' },
  { name: 'Divya', mailId: 'divya@vuedata.in', empId: 'VD358', status: 'Rejected', substatus: 'Insufficient documents' },
  { name: 'Krishnan', mailId: 'krishnan@vuedata.in', empId: 'VD359', status: 'Active', substatus: 'Operation' },
  { name: 'Aravind', mailId: 'aravind@vuedata.in', empId: 'VD360', status: 'Inprogress', substatus: 'Waiting for approval' },
  { name: 'Anitha', mailId: 'anitha@vuedata.in', empId: 'VD361', status: 'Rejected', substatus: 'Declined' },
  { name: 'Suresh', mailId: 'suresh@vuedata.in', empId: 'VD362', status: 'Active', substatus: 'Onboarding' },
  { name: 'Gowtham', mailId: 'gowtham@vuedata.in', empId: 'VD363', status: 'Inprogress', substatus: 'Pending info' },
  { name: 'Ravi', mailId: 'ravi@vuedata.in', empId: 'VD364', status: 'Rejected', substatus: 'Position filled' },
  { name: 'Swetha', mailId: 'swetha@vuedata.in', empId: 'VD365', status: 'Active', substatus: 'Training' },
  { name: 'Ramesh', mailId: 'ramesh@vuedata.in', empId: 'VD366', status: 'Inprogress', substatus: 'Document review' },
  { name: 'Nithya', mailId: 'nithya@vuedata.in', empId: 'VD367', status: 'Rejected', substatus: 'Insufficient documents' },
  { name: 'Karthik', mailId: 'karthik@vuedata.in', empId: 'VD368', status: 'Active', substatus: 'Operation' },
  { name: 'Meena', mailId: 'meena@vuedata.in', empId: 'VD369', status: 'Inprogress', substatus: 'Waiting for approval' },
  { name: 'Ashok', mailId: 'ashok@vuedata.in', empId: 'VD370', status: 'Rejected', substatus: 'Declined' },
  { name: 'Vimal', mailId: 'vimal@vuedata.in', empId: 'VD371', status: 'Active', substatus: 'Onboarding' },
  { name: 'Lakshmi', mailId: 'lakshmi@vuedata.in', empId: 'VD372', status: 'Inprogress', substatus: 'Pending info' },
  { name: 'Balaji', mailId: 'balaji@vuedata.in', empId: 'VD373', status: 'Rejected', substatus: 'Position filled' },
  { name: 'Geetha', mailId: 'geetha@vuedata.in', empId: 'VD374', status: 'Active', substatus: 'Training' },
  { name: 'Vivek', mailId: 'vivek@vuedata.in', empId: 'VD375', status: 'Inprogress', substatus: 'Document review' },
  { name: 'Ramya', mailId: 'ramya@vuedata.in', empId: 'VD376', status: 'Rejected', substatus: 'Insufficient documents' },
  { name: 'Deepak', mailId: 'deepak@vuedata.in', empId: 'VD377', status: 'Active', substatus: 'Operation' },
  { name: 'Selvi', mailId: 'selvi@vuedata.in', empId: 'VD378', status: 'Inprogress', substatus: 'Waiting for approval' },
  { name: 'Vinoth', mailId: 'vinoth@vuedata.in', empId: 'VD379', status: 'Rejected', substatus: 'Declined' },
];

const EmployeeTable = () => {
  const [filteredEmployees, setFilteredEmployees] = useState(employeeData);
  const [filter, setFilter] = useState('All');
  const [substatuses, setSubstatuses] = useState([]);
  const [selectedSubstatus, setSelectedSubstatus] = useState([]);

  useEffect(() => {
    setFilteredEmployees(employeeData); // Show all data initially
  }, []);

  const filterByStatus = (status) => {
    if (status === 'Active' || status === 'Inprogress' || status === 'Rejected') {
      const uniqueSubstatuses = [...new Set(employeeData.filter(emp => emp.status === status).map(emp => emp.substatus))];
      setSubstatuses(uniqueSubstatuses);
      setSelectedSubstatus([]); // Reset selected substatus on status change
    }

    if (status === 'All') {
      setFilteredEmployees(employeeData);
    } else {
      setFilteredEmployees(employeeData.filter(emp => emp.status === status));
    }

    setFilter(status);
  };

  const handleSubstatusChange = (substatus) => {
    let updatedSelectedSubstatus;

    if (selectedSubstatus.includes(substatus)) {
      updatedSelectedSubstatus = selectedSubstatus.filter(s => s !== substatus);
    } else {
      updatedSelectedSubstatus = [...selectedSubstatus, substatus];
    }

    setSelectedSubstatus(updatedSelectedSubstatus);

    if (updatedSelectedSubstatus.length > 0) {
      setFilteredEmployees(
        employeeData.filter(emp => emp.status === filter && updatedSelectedSubstatus.includes(emp.substatus))
      );
    } else {
      setFilteredEmployees(employeeData.filter(emp => emp.status === filter));
    }
  };

  return (
    <div>
      <div className='head-container'>
      <h2>Employee Information</h2>
      <img src={logo} alt="VueData Logo" className="Vuedatalogo" />
      </div>
      <div>
        <button onClick={() => filterByStatus('All')}>All</button>
        <button onClick={() => filterByStatus('Active')}>Active</button>
        <button onClick={() => filterByStatus('Inprogress')}>Inprogress</button>
        <button onClick={() => filterByStatus('Rejected')}>Rejected</button>
      </div>

      {(filter === 'Active' || filter === 'Inprogress' || filter === 'Rejected') && substatuses.length > 0 && (
        <div>
          <h3>Filter by Substatus:</h3>
          {substatuses.map(substatus => (
            <label key={substatus}>
              <input
                type="checkbox"
                value={substatus}
                onChange={() => handleSubstatusChange(substatus)}
                checked={selectedSubstatus.includes(substatus)}
              />
              {substatus}
            </label>
          ))}
        </div>
      )}

      <h3>Showing: {filter === 'All' ? 'All Employees' : `${filter} Employees`}</h3>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>EMP ID</th>
            <th>Status</th>
            <th>Substatus</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.mailId}</td>
              <td>{employee.empId}</td>
              <td>{employee.status}</td>
              <td>{employee.substatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
