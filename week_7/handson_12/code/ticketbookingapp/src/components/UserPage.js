import React from 'react';
import FlightList from '../FlightList';
import './UserPage.css'
function UserPage() {
  return (
    <div>
      <h2 className='wlc'> Welcome User!</h2>
      <FlightList />
      <button>Book Tickets</button>
    </div>
  );
}

export default UserPage;
