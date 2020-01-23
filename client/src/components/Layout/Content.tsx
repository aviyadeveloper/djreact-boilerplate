import React from "react";
import BackToTop from "./BackToTop";

const Content: React.FC = props => (
  <div className="content-container">
    {props.children}
    <BackToTop />
  </div>
);

export default Content;
