/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [cards, setCards] = useState([
    { id: 0, name: "first", clicked: false },
    { id: 1, name: "second", clicked: false },
    { id: 2, name: "third", clicked: false },
    { id: 3, name: "fourth", clicked: false },
    { id: 4, name: "fifth", clicked: false },
  ]);

  const total = cards.length;
  const currentScore = cards.filter((card) => card.clicked).length;

  const handleCardClick = (id: number) => {
    const newCards = cards.map((card) =>
      card.id === id ? { ...card, clicked: true } : card
    );
    setCards(newCards);
  };

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <Scoreboard score={currentScore} total={total} />
      {cards.map(({ name, id }) => (
        <Card
          key={id}
          id={id}
          name={name}
          handleClick={() => handleCardClick(id)}
        />
      ))}
    </div>
  );
}

export default App;
