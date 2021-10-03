import React from "react";

import { Switch, Route } from "react-router-dom";
import AllAnime from "./pages/AllAnime";
import Home from "./pages/Home";
const Body = () => {
  // https://api.aniapi.com/v1/anime/
  // https://api.jikan.moe/v3/anime/
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all-anime" component={AllAnime} />
      </Switch>
    </section>
  );
};

export default Body;
