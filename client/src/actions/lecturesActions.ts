import axios from "axios";
import apiPath from "./apiPath";

const getLecturesList = () =>
  axios
    .get(`${apiPath}/lectures/`)
    .then(res => res.data)
    .catch(error => error);

const getLecture = (id: string) =>
  axios
    .get(`${apiPath}/lectures/${id}`)
    .then(res => res.data)
    .catch(error => error);

export { getLecturesList, getLecture };
