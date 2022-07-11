import React from "react";
import styled from "styled-components";

interface CardProps {
  id: number;
  name: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Card({ id, name }: CardProps) {
  return (
    <Container>
      <p>{id}</p>
      <p>{name}</p>
    </Container>
  );
}

export default Card;
