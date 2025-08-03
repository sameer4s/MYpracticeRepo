import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
  // Sample employee data
  const employees = [
    { id: 1, name: 'John Doe', position: 'Developer', email: 'john.doe@cognizant.com',
    phone: '+91-8778567352'},
    { id: 2, name: 'Jane Smith', position: 'Designer', email: 'jane.smith@cognizant.com',
    phone: '+91-9856743542'},
    { id: 3, name: 'Mike Johnson', position: 'Manager',   email: 'mike.johnson@cognizant.com',
    phone: '+91-8976345256'}
  ];

  return (
    <div className="employees-list">
      <h2>Employee List</h2>
      {employees.map(employee => (
       
        <EmployeeCard 
          key={employee.id} 
          employee={employee}
        />
      ))}
    </div>
  );
}

export default EmployeesList;