import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import CharactersComics from "./containers/CharactersComics";
import Header from "./components/Header";
import Favorites from "./containers/Favorites";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);
function App() {
  const [favorite, setFavorite] = useState([]);
  const [page, setPage] = useState(1);
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/characters/:id/comics">
            <CharactersComics favorite={favorite} setFavorite={setFavorite} />
          </Route>
          <Route path="/characters">
            {" "}
            <Characters
              favorite={favorite}
              setFavorite={setFavorite}
              page={page}
              setPage={setPage}
            />
          </Route>
          <Route path="/comics">
            <Comics favorite={favorite} setFavorite={setFavorite} />
          </Route>
          <Route path="/favorites">
            <Favorites favorite={favorite} setFavorite={setFavorite} />
          </Route>
          <Route path="/">
            <Characters
              favorite={favorite}
              setFavorite={setFavorite}
              page={page}
              setPage={setPage}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
