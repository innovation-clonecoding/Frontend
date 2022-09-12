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
  signin: async (email, password) => {
    const response = await api.post("signin", {
      email: email,
      passwrod: password,
    });
    return response;
    // 백엔드 연동시 추가될 부분
    // const access_token = response.headers["authorization"]
    // const refresh_token = response.headers["refresh-token"]
    // 쿠키 or localstorage 저장
  },
  // Post
  getPost: () => api.get("post"),

  // Comment
  getComment: () => api.get("comment"),
};
