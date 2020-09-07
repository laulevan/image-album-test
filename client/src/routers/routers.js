import React from "react";
import { Switch, Route } from "react-router-dom";
import { Demo } from "../screens/DEMO";

const Routers = () => {
  return (
    <Switch>
      <Route path="/" exact component={Demo} />
    </Switch>
  );
};

export default Routers;
