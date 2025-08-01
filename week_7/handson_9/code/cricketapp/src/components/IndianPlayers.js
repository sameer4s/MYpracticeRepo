import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ["First: Sachin", "Third: Virat", "Fifth: Yuvraj"];
  const evenPlayers = ["Second: Dhoni", "Fourth: Rahul", "Sixth: Raina"];

  const T20players = ["Mr. First Player", "Mr. Second Player", "Mr. Third Player"];
  const RanjiPlayers = ["Mr. Fourth Player", "Mr. Fifth Player", "Mr. Sixth Player"];

  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddPlayers.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul>
        {evenPlayers.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <h3>List of Indian Players Merged:</h3>
      <ul>
        {allPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
