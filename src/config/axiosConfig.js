import axios from "axios";
import { logOut } from "~/api/authAPI";
// import "dotenv/config";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

instance.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("token")) {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
  },
  function (error) {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "signin";
      logOut();
    }
    console.log(error);
    // window.location.href = "signin";

    return Promise.reject(error);
  },
);

export default instance;
