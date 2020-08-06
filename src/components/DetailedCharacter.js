import React from "react";

const DetailedCharacter = ({ title, description, image }) => {
  return (
    <div className="detailed-character">
      <div className="detailed-character-title">{title}</div>
      <div className="detailed-character-description">{description} </div>
      <img className="detailed-character-image" src={image} />
    </div>
  );
};
export default DetailedCharacter;
