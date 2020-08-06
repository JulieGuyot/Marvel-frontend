import React from "react";

const Character = ({ addFavorite, favorite, name, description, image }) => {
  return (
    <div className="character">
      <img className="character-image" src={image} />
      <div className="character-name">{name}</div>
      <div className="character-description">{description}</div>
    </div>
  );
};
export default Character;
