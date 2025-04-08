import axios from "axios";
import { base_url } from "./BaseUrl";

const getNotification = async (id) => {
  return axios
    .get(`${base_url}notification/get/${id}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

const readNotification = async (id) => {
  return axios
    .put(`${base_url}notification/read/${id}`)
    .then((result) = result.data)
    .catch((error) => {
      throw error;
    });
};

export { getNotification, readNotification };
