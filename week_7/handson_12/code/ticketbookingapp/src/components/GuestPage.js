import React from 'react';
import FlightList from '../FlightList';
import './GuestPage.css'
function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p className='log'> <b> Please log in to book tickets.</b> </p>
      <FlightList />
    </div>
  );
}

export default GuestPage;
