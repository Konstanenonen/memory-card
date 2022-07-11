/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 125px 125px 125px;
  grid-template-rows: 200px 200px;
  gap: 10px;
`;

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
    <AppContainer>
      <h1>Memory Card Game</h1>
      <Scoreboard score={currentScore} total={total} />
      <Grid>
        {cards.map(({ id }) => (
          <Card key={id} id={id} handleClick={() => handleCardClick(id)} />
        ))}
      </Grid>
    </AppContainer>
  );
}

export default App;
