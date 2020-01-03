import React, { ReactElement } from "react";
import { Route, RouteProps } from "react-router-dom";
import Header from "../components/sections/Header";

const PublicRoute: React.FC<RouteProps> = (props: RouteProps): ReactElement => (
  <div>
    <Header />
    <Route {...props} />
  </div>
);

export default PublicRoute;
