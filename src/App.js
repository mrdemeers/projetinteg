import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import MovieDetails from "./pages/MovieDetails";
import ActorDetails from "./pages/ActorDetails";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Popular} />
        <Route path="/search/" exact component={Search} />
        <Route path="/categories/" exact component={Categories} />
        <Route path="/movieDetails/:id" exact component={MovieDetails} />
        <Route path="/actorDetails/:id" exact component={ActorDetails} />
      </Switch>   
    </BrowserRouter>
  )
}

export default App;