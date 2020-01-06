import React, { ReactElement } from "react";
import { Route, RouteProps } from "react-router-dom";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";

const PublicRoute: React.FC<RouteProps> = (props: RouteProps): ReactElement => (
  <div>
    <Header />
    <Content>
      <Route {...props} />
    </Content>
  </div>
);

export default PublicRoute;
