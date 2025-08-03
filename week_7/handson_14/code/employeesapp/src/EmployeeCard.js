import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);
  const buttonStyle = theme === 'dark' ? 'dark-button' : 'light-button';

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p><strong>Position:</strong> {employee.position}</p>
      
      <button className={buttonStyle} onClick={toggleDetails}>
        {showDetails ? 'Hide' : 'View'} Details
      </button>

      {showDetails && (
        <div className="details">
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeCard;
