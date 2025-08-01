import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Mr. Jack", score: 50 },
    { name: "Mr. Michael", score: 70 },
    { name: "Mr. John", score: 40 },
    { name: "Mr. Amit", score: 90 },
    { name: "Mr. Elabesh", score: 61 },
    { name: "Mr. Sachin", score: 55 },
    { name: "Mr. Dhoni", score: 100 },
    { name: "Mr. Virat", score: 84 },
    { name: "Mr. Jadeja", score: 64 },
    { name: "Mr. Raina", score: 75 },
    { name: "Mr. Robin", score: 60 }
  ];

  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((p, idx) => (
          <li key={idx}>{p.name} {p.score}</li>
        ))}
      </ul>

      <h3>List of Players having Scores Less than 70</h3>
      <ul>
        {below70.map((p, idx) => (
          <li key={idx}>{p.name} {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
