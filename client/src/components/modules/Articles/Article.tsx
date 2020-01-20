import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { getArticle } from "../../../actions/ArticlesActions";
import { Article } from "../../../types/Articles";
import ArticleLoader from "../../animations/ArticleLoader";
import CodeRenderer from "../../MDRenderers/CodeRenderer";

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
      {article && article.content ? (
        <div className="articles__article">
          <div className="articles__article__content fadeIn">
            <ReactMarkdown
              source={article.content}
              renderers={{ code: CodeRenderer }}
              escapeHtml={false}
            />
          </div>
        </div>
      ) : (
        <ArticleLoader />
      )}
    </div>
  );
};

export default ArticleDetail;
