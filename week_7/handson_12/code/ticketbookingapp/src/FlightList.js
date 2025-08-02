import React from 'react';

function FlightList() {
  const flights = [
    { id: 1, from: 'Bhubaneswar', to: 'Delhi', time: '10:00 AM' },
    { id: 2, from: 'Mumbai', to: 'Bangalore', time: '12:00 PM' },
    { id: 3, from: 'Kolkata', to: 'Bhubaneswar', time: '5:00 PM' },
  ];

  return (
    <div>
      <h3>Available Flights</h3>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.from} → {flight.to} at {flight.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;
