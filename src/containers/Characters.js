import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Character from "../components/Character";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
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
    <div className="characters">
      {data.data.results.map((element, index) => {
        return (
          <div>
            <Link to={"/characters/" + element.id + "/comics"}>
              <Character
                name={element.name}
                description={element.description}
                image={
                  element.thumbnail.path + "." + element.thumbnail.extension
                }
              />
            </Link>
          </div>
        );
      })}

      <div> {data.data.result}</div>
    </div>
  );
};

export default Characters;
