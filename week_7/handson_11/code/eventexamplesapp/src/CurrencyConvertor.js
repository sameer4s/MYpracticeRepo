import React, { useState } from 'react';

export default function CurrencyConvertor() {
  const [euros, setEuros] = useState('');
  const [ setConverted] = useState('');

  const handleChange = (e) => {
    setEuros(e.target.value);
  };

  const handleSubmit = () => {
    const euroToInrRate = 101;
    const rupees = (parseFloat(euros) / euroToInrRate).toFixed(2);

    if (!euros || isNaN(euros)) {
      alert("Please enter a valid number.");
      return;
    }

    alert(`Converting to Euro Amount is ${rupees}`);
    setConverted(rupees);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>

      <label>Amount: </label>
      <input
        type="number"
        value={euros}
        onChange={handleChange}
        placeholder="Enter amount in Rupees"
      /><br /><br />

      <label>Currency: </label>
      <input
        type="text"
        value="Euro"
        readOnly
      /><br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
