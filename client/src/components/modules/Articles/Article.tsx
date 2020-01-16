import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import {
  getArticle,
  getArticleContent
} from "../../../actions/ArticlesActions";
import { Article } from "../../../types/Articles";
import ArticleLoader from "../../animations/ArticleLoader";

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
    if (article && article.content) {
      getArticleContent(article.content).then((res: string) => {
        setContent(res);
      });
    }
  }, [article]);

  return (
    <div className="articles__article__container">
      {article && content ? (
        <div className="articles__article">
          <div className="articles__article__content fadeIn">
            <ReactMarkdown source={content} />
          </div>
        </div>
      ) : (
        <ArticleLoader />
      )}
    </div>
  );
};

export default ArticleDetail;
