import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { Error } from "components";

export const Router = () => (
  <Switch>
    <Route path="/" component={Home} />
    {/* <Route path="/:slug" component={Post} /> */}
    <Route component={Error} />
  </Switch>
);
