import React from 'react';
import './App.css';
import office_image from './assests/techPark.png'
import office_image1 from  './assests/startuphub.png' 
import office_image2 from  './assests/Business.png' 
function App() {
  const offices = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "Koramangala, Bangalore",
      image:office_image,
    },
    {
      name: "Startup Hub",
      rent: 75000,
      address: "Indiranagar, Bangalore",
      image:office_image1,

    },
    {
      name: "Business Center",
      rent: 60000,
      address: "MG Road, Bangalore",
      image:office_image2,
    }
  ];

return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space Rental</h1>

      {/* Loop through office list */}
      {offices.map((office, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          padding: "10px",
          margin: "10px",
          borderRadius: "8px"
        }}>
          {/* Office Image */}
          <img
            src={office.image}
            alt={office.name}
            width="300"
            height="200"
          />

          {/* Office Details */}
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;