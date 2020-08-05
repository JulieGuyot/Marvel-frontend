import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import CharactersComics from "./containers/CharactersComics";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/characters/:id/comics">
            <CharactersComics />
          </Route>
          <Route path="/characters">
            {" "}
            <Characters />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>

          <Route path="/">
            <Characters />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
