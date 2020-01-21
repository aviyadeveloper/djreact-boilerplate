import React from "react";
import { BaseItem } from "../../types/BaseItem";
import ListItem from "./ListItem";

interface ListProps {
  moduleName: string;
  items: BaseItem[];
}

const ItemList: React.FC<ListProps> = ({ moduleName, items }) => (
  <div className={`${moduleName}__list`}>
    {items.map(i => (
      <ListItem moduleName={moduleName} {...i} key={i.id} />
    ))}
  </div>
);

export default ItemList;
