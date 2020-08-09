import React from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Character = ({
  element,
  setFavorite,
  favorite,
  name,
  description,
  image,
}) => {
  return (
    <div className="character">
      <button
        className="favori"
        onClick={() => {
          let newFavorite = [...favorite];
          newFavorite.push({ element });
          Cookies.set("favori", newFavorite, { expires: 30 });
          setFavorite(newFavorite);
          alert("Le personnage a bien été ajouté aux favoris");
        }}
      >
        {<FontAwesomeIcon classname="heart" icon="heart" />}
      </button>
      <img className="character-image" src={image} />
      <div className="character-name">{name}</div>
      <div className="character-description">{description}</div>
    </div>
  );
};
export default Character;
