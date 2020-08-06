import React, { useState, useEffect } from "react";
import axios from "axios";
import Comic from "../components/Comic";
import SearchComic from "../components/SearchComic";
import SearchCharacter from "../components/SearchCharacter";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/comics");
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
      {" "}
      <SearchComic setData={setData} />
      {data.data.results.length > 0 ? (
        <div className="comics">
          {data.data.results.map((element, index) => {
            return (
              <div>
                <Comic
                  title={element.title}
                  description={element.description}
                  image={
                    element.thumbnail.path + "." + element.thumbnail.extension
                  }
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
