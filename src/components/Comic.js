import React from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comic = ({
  element,
  setFavorite,
  favorite,
  title,
  description,
  image,
}) => {
  return (
    <div className="comic">
      <button
        className="favori"
        onClick={() => {
          let newFavorite = [...favorite];
          newFavorite.push({ element });
          Cookies.set("favori", newFavorite, { expires: 30 });
          setFavorite(newFavorite);
          alert("Le comic a bien été ajouté aux favoris");
        }}
      >
        {<FontAwesomeIcon classname="heart" icon="heart" />}
      </button>
      <img className="comic-photo" alt="comic-photo" src={image} />
      <div className="comic-title">{title}</div>
      <div className="comic-description">{description}</div>
    </div>
  );
};
export default Comic;
