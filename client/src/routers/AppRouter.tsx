import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Index from "../components/modules/Index";
import Articles from "../components/modules/Articles";

const NavRouter: React.FC = props => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/index" component={Index} exact={true} />
        <PublicRoute path="/articles" component={Articles} />
        <PublicRoute component={Index} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default NavRouter;
