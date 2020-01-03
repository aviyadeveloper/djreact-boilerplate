import React from "react";
import ArticleListItem from "./ArticlesListItem";
import { Article } from "../../../types/Articles";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = props => (
  <div>
    {props.articles.map(a => (
      <ArticleListItem title={a.title} key={a.title} />
    ))}
  </div>
);

export default ArticleList;
