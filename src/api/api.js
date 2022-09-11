import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
  withCredentials: true,
});

export const apis = {
  // member
  doubleCheck: (data) => {
    return api.post("member", {
      email: data,
    });
  },
  signup: (data) => {
    return api.post("users", {
      data,
    });
  },
  // Post
  getPost: () => api.get("post"),

  // Comment
  getComment: () => api.get("comment"),
};
