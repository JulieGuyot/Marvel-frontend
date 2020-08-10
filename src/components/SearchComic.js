import React, { useState } from "react";
import axios from "axios";

const SearchComic = ({ setData }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://marvel-backend-jg.herokuapp.com/comics?titleStartsWith=${search}`
    );
    setData(response.data);
    console.log(response.data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Quel comic recherchez-vous ? "
        type="text"
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button type="submit" value="Submit">
        Rechercher
      </button>
    </form>
  );
};
export default SearchComic;
