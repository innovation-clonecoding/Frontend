import axios from "axios";
import { getCookie, removeCookie, setCookie } from "utils/Cookie";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;
const access_token = getCookie("access_token");
const refresh_token = getCookie("refresh_token");

const api = axios.create({
  baseURL: "http://15.164.163.50:8080",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
  withCredentials: true,
});

api.interceptors.request.use(function (config) {
  config.headers.common["Authorization"] = access_token;
  config.headers.common["Refresh-Token"] = refresh_token;
  return config;
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
  signin: async (email, password) => {
    const response = await api.post("member/login/normal", {
      email: email,
      password: password,
    });
    onLoginSuccess(
      response.headers["authorization"],
      response.headers["refresh-token"]
    );
    return response.data;
  },
  logout: async () => {
    try {
      const { data } = await api.post("/auth/member/logout");
      removeCookie("access_token");
      removeCookie("refresh_token");
      return data;
    } catch (error) {
      console.log("error", error);
    }
  },
  getUserInfo: async () => {
    try {
      const { data } = api.get("/auth/member/profile-info");
      return data;
    } catch (error) {
      return error.response;
    }
  },
};

export const silentRefresh = () => {
  // console.log("access2", access_token);
  api
    .post("member/reissue")
    .then((res) => onLoginSuccess(res.headers["authorization"], refresh_token))
    .catch((error) => {
      console.log("err", error.response.data);
    });
};

const onLoginSuccess = (authorization, refreshToken) => {
  // console.log("access1", authorization);
  // console.log("refresh", refreshToken); // 8YcI

  setCookie("access_token", authorization);
  setCookie("refresh_token", refreshToken);

  axios.defaults.headers.common["authorization"] = authorization;
  axios.defaults.headers.common["refresh-token"] = refreshToken;

  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(silentRefresh, JWT_EXPIRY_TIME - 60000);
};
