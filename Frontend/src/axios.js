import axios from "axios";

const baseURL = "https://api-naveensk.koyeb.app/api"

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default instance;
