import React, { useEffect, useState } from "react";

interface ScoreboardProps {
  score: number;
  total: number;
}

function Scoreboard({ score, total }: ScoreboardProps) {
  const [highScore, setHighScore] = useState(score);

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score]);

  return (
    <div>
      <p>
        Current score: {score} / {total}
      </p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default Scoreboard;
