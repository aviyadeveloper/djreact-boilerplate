import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import {
  getArticle,
  getArticleContent
} from "../../../actions/ArticlesActions";
import { Article } from "../../../types/Articles";

interface ArticleParams {
  id: string;
}

const ArticleDetail: React.FC<RouteComponentProps<ArticleParams>> = props => {
  const [article, setArticle] = useState<Article>();
  const [content, setContent] = useState<string>();

  const id: string = props.match.params.id;

  useEffect(() => {
    getArticle(id).then((res: Article) => {
      setArticle(res);
    });
  }, []);

  useEffect(() => {
    getArticleContent(article && article.content).then((res: string) => {
      console.log(res);
      setContent(res);
    });
  }, [article]);

  return (
    <div className="articles__article__container">
      {article ? (
        <div className="articles__article">
          <h2 className="articles__article__title">{article.title}</h2>
          <div className="articles__article__content">
            <ReactMarkdown source={content} />
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default ArticleDetail;
