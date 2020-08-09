import React from "react";
import Cookies from "js-cookie";
const Favorites = (favorite) => {
  Cookies.get("favorite");
  console.log(favorite);
  return (
    <div>
      {favorite.map((elem, index) => {
        return (
          <div>
            {elem.name}
            {elem.description}
          </div>
        );
      })}
    </div>
  );
};
export default Favorites;
