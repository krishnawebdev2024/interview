// CardList.tsx
import React from "react";
import Card from "./Card";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const CardList: React.FC = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
