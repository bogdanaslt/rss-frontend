import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE,
  timeout: 10000,
  withCredentials: true
});

export default instance;
