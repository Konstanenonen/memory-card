import React, { useEffect, useState } from "react";

interface ScoreboardProps {
  score: number;
  total: number;
}

function Scoreboard({ score, total }: ScoreboardProps) {
  const [highScore, setHighScore] = useState(score);

  const defineScoreColor = () => {
    if (score > 8) return "text-red-300";
    if (score > 5) return "text-yellow-300";
    return "text-white";
  };

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score]);

  return (
    <div className="flex flex-col gap-5 text-xl">
      <p className={defineScoreColor()}>
        Current score: {score} / {total}
      </p>
      <p className="text-white">High Score: {highScore}</p>
    </div>
  );
}

export default Scoreboard;
