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
    <div className="flex flex-col gap-3 text-xl">
      <p className="text-white">
        Current score: {score} / {total}
      </p>
      <p className="text-white">High Score: {highScore}</p>
    </div>
  );
}

export default Scoreboard;
