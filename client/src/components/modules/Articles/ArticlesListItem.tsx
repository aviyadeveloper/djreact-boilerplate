import React from "react";

interface ArticleListItemProps {
  title: string;
}

const ArticleListItem: React.FC<ArticleListItemProps> = props => (
  <div>
    <h4>{props.title}</h4>
  </div>
);

export default ArticleListItem;
