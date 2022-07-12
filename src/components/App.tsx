import React, { useState } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import Scoreboard from "./Scoreboard";

function App() {
  const [cards, setCards] = useState([
    { id: 0, clicked: false },
    { id: 1, clicked: false },
    { id: 2, clicked: false },
    { id: 3, clicked: false },
    { id: 4, clicked: false },
    { id: 5, clicked: false },
  ]);

  const total = cards.length;
  const currentScore = cards.filter((card) => card.clicked).length;

  const handleCardClick = (id: number) => {
    const clickedCard = cards.find((card) => card.id === id);

    // If card is clicked GAME OVER and time to reset
    if (clickedCard?.clicked) {
      setCards([
        { id: 0, clicked: false },
        { id: 1, clicked: false },
        { id: 2, clicked: false },
        { id: 3, clicked: false },
        { id: 4, clicked: false },
        { id: 5, clicked: false },
      ]);
      return;
    }

    // This toggles card with the given id to true
    const newCards = cards.map((card) =>
      card.id === id ? { ...card, clicked: true } : { ...card }
    );

    // This shuffles the array
    newCards.sort(() => Math.random() - 0.5);

    setCards(newCards);
  };

  return (
    <div className="flex flex-col place-items-center">
      <NavBar>
        <h1 className="text-3xl text-white">Memory Card Game</h1>
        <Scoreboard score={currentScore} total={total} />
      </NavBar>
      <div className="p-5 flex flex-row flex-wrap gap-6 place-items-center">
        {cards.map(({ id }) => (
          <Card key={id} id={id} handleClick={() => handleCardClick(id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
