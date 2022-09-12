import axios from "axios";

const api = axios.create({
  baseURL: "http://15.164.163.50:8080",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
  withCredentials: true,
});

export const userApis = {
  // member
  doubleCheck: (data) => {
    return api.post("member/email", {
      email: data,
    });
  },
  signup: async (data) => {
    const response = await api.post("member/signup", data);
    return response.data;
  },
};
