import React from "react";
import { useLocation } from "react-router-dom";

const Favorites = () => {
  const location = useLocation();
  let { favorite } = location.state;
  return <div> {console.log(favorite.name)}</div>;
};
export default Favorites;
