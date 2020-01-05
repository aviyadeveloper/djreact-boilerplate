import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getArticle } from "../../../actions/ArticlesActions";
import { ArticleFull } from "../../../types/Articles";

interface ArticleParams {
  id: string;
}

const ArticleDetail: React.FC<RouteComponentProps<ArticleParams>> = props => {
  const [article, setArticle] = useState<ArticleFull>();
  const id: string = props.match.params.id;

  useEffect(() => {
    getArticle(id).then((res: ArticleFull) => {
      setArticle(res);
    });
  }, []);
  return (
    <div>
      {article ? (
        <div>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default ArticleDetail;
