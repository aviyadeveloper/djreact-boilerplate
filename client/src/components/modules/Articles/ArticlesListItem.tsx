import React from "react";
import { Link } from "react-router-dom";
import path from "path";

interface ArticleListItemProps {
  id: string;
  title: string;
}

const ArticleListItem: React.FC<ArticleListItemProps> = props => (
  <div>
    <Link to={path.join(window.location.pathname, `${props.id}`)}>
      <h4>{props.title}</h4>
    </Link>
  </div>
);

export default ArticleListItem;
