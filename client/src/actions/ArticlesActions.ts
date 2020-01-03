import axios from "axios";
import apiPath from "./apiPath";
console.log(apiPath);

const getArticlesList = () =>
  axios
    .get(apiPath)
    .then(res => res.data)
    .catch(error => error);

export { getArticlesList };
