import axios from "axios";
import authHeader from "./auth-header";

const getPublicContent = () => {
  return axios.get("/all");
};

const getUserBoard = () => {
  return axios.get("/user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get("/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get("/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};