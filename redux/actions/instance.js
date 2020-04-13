import axios from "axios";

export const instance = axios.create({
  baseURL: "http://178.128.114.232/api/"
});

export default instance;
