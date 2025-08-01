// src/App.js
import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true); // Change to false to test other view

  return (
    <div className="App">
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>Toggle View</button>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
