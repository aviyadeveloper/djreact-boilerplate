import React from "react";
import { Link } from "react-router-dom";
import path from "path";
import { Article } from "../../../types/Articles";

const ArticleListItem: React.FC<Article> = props => (
  <Link
    className="articles__list__item_wrapper"
    to={path.join(window.location.pathname, `${props.id}`)}
  >
    <div className="articles__list__item">
      <img
        className="articles__list__item__image"
        src={props.image}
        alt={props.title}
      />
      <div className="articles__list__item__content">
        <h4 className="articles__list__item__content__title">{props.title}</h4>
        <p className="articles__list__item__content__description">
          {props.description}
        </p>
        <p className="articles__list__item__content__publication-date">
          {props.publicationDate}
        </p>
      </div>
    </div>
  </Link>
);

export default ArticleListItem;
