import React from "react";
import { Link } from "react-router-dom";
import path from "path";
import { BaseItem } from "../../types/BaseItem";

interface ListItemProps extends BaseItem {
  moduleName: string;
}
const ListItem: React.FC<ListItemProps> = ({
  moduleName,
  id,
  image,
  title,
  description,
  publicationDate
}) => (
  <Link
    className="list__item_wrapper"
    to={path.join(window.location.pathname, `${id}`)}
  >
    <div className="list__item">
      <img className="list__item__image" src={image} alt={title} />
      <div className="list__item__content">
        <h4 className="list__item__content__title">{title}</h4>
        <p className="list__item__content__description">{description}</p>
        <p className="list__item__content__publication-date">
          {publicationDate}
        </p>
      </div>
    </div>
  </Link>
);

export default ListItem;
