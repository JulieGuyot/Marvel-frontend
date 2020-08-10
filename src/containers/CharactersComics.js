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
      "https://marvel-backend-jg.herokuapp.com/characters/" + id + "/comics"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading-page">En cours de chargement... </div>
  ) : (
    <div className="characters-comics">
      {data.data.results.map((element, index) => {
        return (
          <>
            <DetailedCharacter
              title={element.title}
              key={element.id}
              description={element.description}
              image={element.thumbnail.path + "." + element.thumbnail.extension}
            />
          </>
        );
      })}
    </div>
  );
};
export default CharactersComics;
