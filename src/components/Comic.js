import React from "react";

const Comic = ({ title, description, image }) => {
  return (
    <div className="comic">
      <img className="comic-photo" alt="comic-photo" src={image} />
      <div className="comic-title">{title}</div>
      <div className="comic-description">{description}</div>
    </div>
  );
};
export default Comic;
