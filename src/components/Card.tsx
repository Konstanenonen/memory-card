/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import dog1 from "../images/pexels-anna-shvets-4588047.jpg";
import dog2 from "../images/pexels-gillian-harrison-4668425.jpg";
import dog3 from "../images/pexels-kasuma-933498.jpg";
import dog4 from "../images/pexels-lucas-andrade-4681107.jpg";
import dog5 from "../images/pexels-miguel-constantin-montes-2623968.jpg";
import dog6 from "../images/pexels-valeria-boltneva-1805164.jpg";

interface CardProps {
  id: number;
  handleClick: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

function Card({ id, handleClick }: CardProps) {
  const pictureSrc = () => {
    switch (id) {
      case 0:
        return dog1;
      case 1:
        return dog2;
      case 2:
        return dog3;
      case 3:
        return dog4;
      case 4:
        return dog5;
      case 5:
        return dog6;
      default:
        return dog1;
    }
  };

  return (
    <Container onClick={handleClick}>
      <img width={125} height={200} src={pictureSrc()} alt="Dog" />
    </Container>
  );
}

export default Card;
