import React from "react";

import LogoMarvel from "../marvel-logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/characters">
        <img className="logo-marvel" alt="logo marvel" src={LogoMarvel} />
      </Link>
      <Link to={"/characters"}>
        <div>Personnages</div>
      </Link>
      <Link to={"/comics"}>
        <div>Comics</div>
      </Link>
      <Link to={"/favorites"}>
        <div>Favoris</div>
      </Link>
    </div>
  );
};
export default Header;
