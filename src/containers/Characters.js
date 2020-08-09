import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Character from "../components/Character";
import Pagination from "../components/Pagination";
import SearchCharacter from "../components/SearchCharacter.js";

const Characters = ({ favorite, setFavorite }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  Cookies.set("favorite", favorite);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:3000/characters?&offset=${offset}"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchData();
  }, [offset]);

  return isLoading ? (
    <div className="loading-page">En cours de chargement... </div>
  ) : (
    <>
      <SearchCharacter
        className="search-character"
        data={data}
        setData={setData}
        offset={offset}
      />
      {data.data.results.length > 0 ? (
        <div className="characters">
          {data.data.results.map((element, index) => {
            return (
              <div>
                <Link to={"/characters/" + element.id + "/comics"}>
                  <Character
                    element={element}
                    key={element.id}
                    name={element.name}
                    description={element.description}
                    image={
                      element.thumbnail.path + "." + element.thumbnail.extension
                    }
                    favorite={favorite}
                    setFavorite={setFavorite}
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
      <Pagination
        offset={offset}
        setOffset={setOffset}
        data={data}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Characters;
