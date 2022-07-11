/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

interface CardProps {
  id: number;
  name: string;
  handleClick: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

function Card({ id, name, handleClick }: CardProps) {
  return (
    <div>
      <Container onClick={handleClick}>
        <p>{id}</p>
        <p>{name}</p>
      </Container>
    </div>
  );
}

export default Card;
