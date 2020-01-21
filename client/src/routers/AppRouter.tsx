import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Index from "../components/modules/Index/Index";
import Articles from "../components/modules/Articles/Articles";
import Article from "../components/modules/Articles/Article";
import Lectures from "../components/modules/Lectures/Lectures";
import Lecture from "../components/modules/Lectures/Lecture";

import PageNotFound from "../components/PageNotFound";

const NavRouter: React.FC = props => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={Index} exact={true} />
        <PublicRoute path="/articles" component={Articles} exact={true} />
        <PublicRoute path="/articles/:id" component={Article} />
        <PublicRoute path="/lectures" component={Lectures} exact={true} />
        <PublicRoute path="/lectures/:id" component={Lecture} />
        <PublicRoute component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default NavRouter;
