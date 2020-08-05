import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import DetailedCharacter from "../components/DetailedCharacter";

const CharactersComics = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:3001/characters/" + id + "/comics"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchData();
  }, []);

  return isLoading ? <span>En cours de chargement... </span> : <div></div>;
};
export default CharactersComics;
