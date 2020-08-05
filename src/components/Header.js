import React from "react";

import LogoMarvel from "../marvel-logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img className="logo-marvel" alt="logo marvel" src={LogoMarvel} />
      <Link to={"/characters"}>
        <div>Personnages</div>
      </Link>
      <Link to={"/comics"}>
        <div>Comics</div>
      </Link>
      <div>Favoris</div>
    </div>
  );
};
export default Header;
