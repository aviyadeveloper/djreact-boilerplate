import React, { useState, useEffect } from "react";
import List from "../../Layout/List";
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
    <div className="module-wrapper articles">
      <h2 className="module-title">Articles Module</h2>
      <List moduleName="articles" items={articles} />
    </div>
  );
};

export default Articles;
