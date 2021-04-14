import axios from "axios";

const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let currentToken = localStorage.getItem("token");

    if (!error || !error.response.config.__isRetryRequest || (!error.toString().includes("401") && !error.toString().includes("403"))) {
      return Promise.reject(error);
    }

    if (currentToken === "null" || error.toString().includes("403")) {
      window.location.href = "/login";
    }

    axiosInstance
      .get("http://localhost:6080/token/refresh", {
        headers: {
          Authorization: currentToken,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        let newToken = response.headers["authorization"];
        if (!newToken) {
          localStorage.setItem("token", null);
          window.location.href = "/login";
          return Promise.reject(error);
        } else {
          localStorage.setItem("token", newToken);
          axiosInstance.defaults.headers["Authorization"] = newToken;
          error.response.config.__isRetryRequest = true;
          return axiosInstance(error.response.config);
        }
      })
      .catch((err) => {
        localStorage.setItem("token", null);
        window.location.href = "/login";
        return Promise.reject(error);
      });
  }
);
export default axiosInstance;
