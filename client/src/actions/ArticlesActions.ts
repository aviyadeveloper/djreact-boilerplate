import axios from "axios";
import apiPath from "./apiPath";

const getArticlesList = () =>
  axios
    .get(`${apiPath}/articles/`)
    .then(res => res.data)
    .catch(error => error);

const getArticle = (id: string) =>
  axios
    .get(`${apiPath}/articles/${id}`)
    .then(res => res.data)
    .catch(error => error);

export { getArticlesList, getArticle };
