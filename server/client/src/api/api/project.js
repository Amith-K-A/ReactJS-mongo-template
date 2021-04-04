import axios from "axios";
import authHeader from "../../services/auth-header";

const API_URL = process.env.NODE_ENV !== "production" && "http://localhost:4000";

const addForm = (label, item, userId) => {
  return axios.post(
    API_URL + "/project/add",
    {
      label,
      item,
      userId,
    },
    {
      headers: authHeader(),
    }
  );
};

const getForm = (userId) => {
  return axios
    .get(
      API_URL + "/project/get",
      {
        headers: authHeader(),
        params: {
          userId: userId,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
};


const updateForm = (label, item, projectId) => {
  return axios.post(
    API_URL + "/project/update",
    {
      label,
      item,
      projectId,
    },
    {
      headers: authHeader(),
    }
  );
};

const Project = {
  addForm,
  getForm,
  updateForm,
};

export default Project;
