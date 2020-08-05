import React from "react";

const Character = ({ name, description, image }) => {
  return (
    <div className="character">
      <div className="character-name">{name}</div>
      <div className="character-description">{description}</div>
      <img className="character-image" src={image} />
    </div>
  );
};
export default Character;
