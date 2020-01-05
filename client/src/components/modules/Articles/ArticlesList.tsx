import React from "react";
import ArticleListItem from "./ArticlesListItem";
import { ArticleShort } from "../../../types/Articles";

interface ArticleListProps {
  articles: ArticleShort[];
}

const ArticleList: React.FC<ArticleListProps> = props => (
  <div>
    {props.articles.map(a => (
      <ArticleListItem {...a} key={a.id} />
    ))}
  </div>
);

export default ArticleList;
