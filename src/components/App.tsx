import React, { useEffect, useState } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import Scoreboard from "./Scoreboard";
import cardArray from "../cardArray";

function App() {
  const [cards, setCards] = useState(cardArray);
  const [cardOrder, setCardOrder] = useState<number[]>([]);
  const total = cards.length;
  const currentScore = cards.filter((card) => card.clicked).length;

  const shuffleArray = <Type extends unknown>(array: Type[]): Type[] => {
    const arrayCopy = array.slice();
    return arrayCopy.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id: number): void => {
    const clickedCard = cards.find((card) => card.id === id);

    // If card is clicked GAME OVER and time to reset
    if (clickedCard?.clicked) {
      setCards(cardArray);
      return;
    }

    // If card is clicked in wrong order GAME OVER
    if (id !== cardOrder[currentScore]) {
      setCards(cardArray);
      return;
    }

    // This toggles card with the given id to true
    const newCards = cards.map((card) =>
      card.id === id ? { ...card, clicked: true } : { ...card }
    );

    // This shuffles the array
    const shuffledCards = shuffleArray(newCards);

    setCards(shuffledCards);
  };

  // On mount shuffle card order
  useEffect(() => {
    if (currentScore !== 0) return;
    const shuffeledCards = shuffleArray(cards);
    setCards(shuffeledCards);
    const order = shuffeledCards.map((card) => card.id);
    setCardOrder(order);
  }, [currentScore]);

  return (
    <div className="flex flex-col place-items-center">
      <NavBar>
        <h1 className="text-3xl text-white">Remember The Dogs</h1>
        <Scoreboard score={currentScore} total={total} />
      </NavBar>
      <div className="p-10 flex flex-row flex-wrap gap-8 max-w-screen-xl justify-center">
        {cards.map(({ id }) => (
          <Card key={id} id={id} handleClick={() => handleCardClick(id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
