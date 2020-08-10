import React, { useState } from "react";
import axios from "axios";

const SearchCharacter = ({ setData, offset }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://marvel-backend-jg.herokuapp.com/characters?nameStartsWith=${search}&offset=${offset}`
    );
    setData(response.data);
    console.log(response.data);
  };
  return (
    <div classname="search-form">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          placeholder="Quel personnage recherchez-vous ? "
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <button className="search-button" type="submit" value="Submit">
          Rechercher
        </button>
      </form>
    </div>
  );
};
export default SearchCharacter;
