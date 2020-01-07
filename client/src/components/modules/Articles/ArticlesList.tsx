import React from "react";
import ArticleListItem from "./ArticlesListItem";
import { Article } from "../../../types/Articles";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = props => (
  <div className="articles__list">
    {props.articles.map(a => (
      <ArticleListItem {...a} key={a.id} />
    ))}
  </div>
);

export default ArticleList;
