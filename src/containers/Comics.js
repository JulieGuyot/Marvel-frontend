import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Comic from "../components/Comic";
import SearchComic from "../components/SearchComic";

const Comics = ({ favorite, setFavorite }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  Cookies.set("favorite", favorite);
  const fetchData = async () => {
    const response = await axios.get(
      "https://marvel-backend-jg.herokuapp.com/comics"
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
    <>
      {" "}
      <SearchComic setData={setData} />
      {data.data.results.length > 0 ? (
        <div className="comics">
          {data.data.results.map((element, index) => {
            return (
              <div>
                <Comic
                  element={element}
                  title={element.title}
                  description={element.description}
                  image={
                    element.thumbnail.path + "." + element.thumbnail.extension
                  }
                  favorite={favorite}
                  setFavorite={setFavorite}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bad-research">
          {
            "Aucun comic ne correspond à votre recherche, veuillez saisir un autre champ. "
          }
        </div>
      )}
    </>
  );
};

export default Comics;
