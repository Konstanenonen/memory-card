/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([
    { id: 0, name: "0" },
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
  ]);

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      {cards.map(({ name, id }) => (
        <Card key={id} id={id} name={name} />
      ))}
    </div>
  );
}

export default App;
