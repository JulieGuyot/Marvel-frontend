import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";
import Character from "../components/Character";
// import Pagination from "../components/Pagination";
import Search from "../components/SearchCharacter.js";
import SearchCharacter from "../components/SearchCharacter.js";

const Characters = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [favorite, addFavorite] = useState([]);
  console.log("favoris :", favorite);
  // const [page, setPage] = useState(1);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/characters");
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <SearchCharacter
        className="search-character"
        data={data}
        setData={setData}
      />
      <button
        className="favorites"
        onClick={() => {
          history.push("/favorites", {
            favorite: favorite,
          });
        }}
      >
        Accéder aux favoris
      </button>

      {data.data.results.length > 0 ? (
        <div className="characters">
          {data.data.results.map((element, index) => {
            return (
              <div>
                <button
                  className="favori"
                  onClick={() => {
                    const newFavorite = [...favorite];
                    newFavorite.push(element);
                    addFavorite(newFavorite);
                  }}
                >
                  {"Favori"}
                </button>
                <Link to={"/characters/" + element.id + "/comics"}>
                  <Character
                    name={element.name}
                    description={element.description}
                    image={
                      element.thumbnail.path + "." + element.thumbnail.extension
                    }
                    favorite={favorite}
                    addFavorite={addFavorite}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bad-research">
          {
            "Aucun personnage ne correspond à votre recherche, veuillez saisir un autre champ. "
          }
        </div>
      )}
    </>
  );
};

export default Characters;
