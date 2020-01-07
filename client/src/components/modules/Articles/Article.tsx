import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getArticle } from "../../../actions/ArticlesActions";
import { Article } from "../../../types/Articles";

interface ArticleParams {
  id: string;
}

const ArticleDetail: React.FC<RouteComponentProps<ArticleParams>> = props => {
  const [article, setArticle] = useState<Article>();
  const id: string = props.match.params.id;

  useEffect(() => {
    getArticle(id).then((res: Article) => {
      setArticle(res);
    });
  }, []);
  return (
    <div className="articles__article__container">
      {article ? (
        <div className="articles__article">
          <h2 className="articles__article__title">{article.title}</h2>
          <div className="articles__article__content">
            <p>{article.content}</p>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default ArticleDetail;
