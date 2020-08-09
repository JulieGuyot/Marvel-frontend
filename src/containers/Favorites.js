import React from "react";
import Cookies from "js-cookie";

const Favorites = ({ favorite, setFavorite }) => {
  Cookies.get("favori");

  return (
    <div className="favorites-page">
      {favorite.map((elem, index) => {
        return (
          <div className="character">
            {console.log({ elem })}
            <div>
              {elem.element.name ? (
                <div className="character-name">{elem.element.name}</div>
              ) : (
                <div className="comic-title">{elem.element.title}</div>
              )}
            </div>

            <div className="character-description">
              {" "}
              {elem.element.description}
            </div>
            <img
              className="character-image"
              src={
                elem.element.thumbnail.path +
                "." +
                elem.element.thumbnail.extension
              }
            />
          </div>
        );
      })}
    </div>
  );
};
export default Favorites;
