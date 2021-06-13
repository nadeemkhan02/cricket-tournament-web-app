import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Matches from "./Pages/Matches";
import Vanue from "./Pages/Venue";
import Teams from "./Pages/Teams";
import { Switch, Route } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/matches" component={Matches} />
        <Route exact path="/vanue" component={Vanue} />
        <Route exact path="/teams" component={Teams} />
        <Route component={Home} />
      </Switch>
    </>
  );
}

export default App;