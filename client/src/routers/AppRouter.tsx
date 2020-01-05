import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Index from "../components/modules/Index/Index";
import Articles from "../components/modules/Articles/Articles";
import Article from "../components/modules/Articles/Article";
import PageNotFound from "../components/PageNotFound";

const NavRouter: React.FC = props => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={Index} exact={true} />
        <PublicRoute path="/articles" component={Articles} exact={true} />
        <PublicRoute path="/articles/:id" component={Article} />
        <PublicRoute component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default NavRouter;
