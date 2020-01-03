import React, { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";
import { getArticlesList } from "../../../actions/ArticlesActions";
import { Article } from "../../../types/Articles";

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticlesList().then((data: Article[]) => {
      setArticles([...data]);
    });
  }, []);

  return (
    <div className="articles">
      <h1>Articles Module</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default Articles;
