import axios from "axios";
import { apiPath } from "./serverPaths";
import markdownImageInjector from "./utils/markdownImageInjector";

const getArticlesList = () =>
  axios
    .get(`${apiPath}/articles/`)
    .then(res => res.data)
    .catch(error => error);

const getArticle = (id: string) =>
  axios
    .get(`${apiPath}/articles/${id}`)
    .then(res => {
      let data = res.data;
      data.content = markdownImageInjector(data.content);
      return data;
    })
    .catch(error => error);

const getArticleContent = (link?: string) => {
  if (link) {
    return axios
      .get(`${link}`)
      .then(res => res.data)
      .catch(error => error);
  }
  return Promise.reject("No link provided");
};
export { getArticlesList, getArticle, getArticleContent };
