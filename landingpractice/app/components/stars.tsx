import React from "react";

const Stars: React.FC = () => {
  const starCount = 50;
  const stars = Array.from({ length: starCount }).map((_, index) => <div key={index} className="star" />);

  return <div className="stars">{stars}</div>;
};

export default Stars;
