/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import dog1 from "../images/pexels-anna-shvets-4588047.jpg";
import dog2 from "../images/pexels-gillian-harrison-4668425.jpg";
import dog3 from "../images/pexels-kasuma-933498.jpg";
import dog4 from "../images/pexels-lucas-andrade-4681107.jpg";
import dog5 from "../images/pexels-miguel-constantin-montes-2623968.jpg";
import dog6 from "../images/pexels-valeria-boltneva-1805164.jpg";
import dog7 from "../images/pexels-orlando-allo-3658120.jpg";
import dog8 from "../images/pexels-anna-shvets-4588052.jpg";
import dog9 from "../images/pexels-pixabay-220938.jpg";
import dog10 from "../images/pexels-karolina-grabowska-4197483.jpg";
import dog11 from "../images/pexels-erin-profaci-1638724.jpg";
import dog12 from "../images/pexels-pixabay-46505.jpg";

interface CardProps {
  id: number;
  handleClick: () => void;
}

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
      case 6:
        return dog7;
      case 7:
        return dog8;
      case 8:
        return dog9;
      case 9:
        return dog10;
      case 10:
        return dog11;
      case 11:
        return dog12;
      default:
        return dog1;
    }
  };

  return (
    <div className="p-2 shadow-md shadow-blue-500/50 cursor-pointer border-blue-500 rounded-md">
      <img
        className="h-52"
        onClick={handleClick}
        src={pictureSrc()}
        alt="Dog"
      />
    </div>
  );
}

export default Card;
