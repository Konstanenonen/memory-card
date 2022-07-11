import React from "react";

interface ScoreboardProps {
  score: number;
  total: number;
}

function Scoreboard({ score, total }: ScoreboardProps) {
  return (
    <div>
      <p>{score}</p>
      <p>{total}</p>
    </div>
  );
}

export default Scoreboard;
