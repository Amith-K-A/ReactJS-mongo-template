import axios from "axios";
const API_URL = process.env.NODE_ENV !== "production" && "http://localhost:4000";

const register = (username, email, password) => {
  return axios.post(API_URL + "/signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

const auth = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default auth;
