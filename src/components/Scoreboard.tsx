import React from "react";

interface ScoreboardProps {
  score: number;
  total: number;
}

function Scoreboard({ score, total }: ScoreboardProps) {
  return (
    <div>
      <p>
        Current score: {score} / {total}
      </p>
    </div>
  );
}

export default Scoreboard;
