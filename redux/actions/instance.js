import axios from "axios";

export const instance = axios.create({
  baseURL: "https://ayo-bakery.herokuapp.com/",
});

export default instance;
