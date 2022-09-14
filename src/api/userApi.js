import axios from "axios";
import { getCookie, removeCookie, setCookie } from "utils/Cookie";

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

// 사용할 부분만 interceptors를 사용하면 됨
api.interceptors.request.use(function (config) {
  config.headers.common["Authorization"] = access_token;
  config.headers.common["Refresh-Token"] = refresh_token;
  return config;
});

let isTokenRefresh = false;

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;
    if (err.response && err.response.data.status === "403 FORBIDDEN") {
      // if (!isTokenRefresh) {
      // isTokenRefresh = true;
      try {
        const refreshToken = await getCookie("refresh_token");
        axios.defaults.headers.common["refresh-token"] = refreshToken;
        refreshAccessToken();
        // return api.request(originalConfig);
      } catch (err) {
        console.log("error다", err.response);
        window.location.href = "/";
      }
      // }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

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
      const response = await api.get("/auth/member/profile-info");
      return response.data;
    } catch (error) {
      return error.response;
    }
  },
  likes: async (data) => {
    try {
      const response = await api.post("/auth/likes", data);
      return response.data;
    } catch (error) {
      return error.response;
    }
  },
  kakaoLogin: (code) => {
    /* 토큰이 없을 경우 -> 즉 소셜 로그인 처음하는 회원 */
    // 백엔드 주소 뒤에 인가코드 붙여서 보내야 함
    console.log("code2", code);
    axios
      .get(`http://15.164.163.50:8080/member/login/kakao?code=${code}`)
      .then((res) => {
        const access_token = res.headers["authorization"];
        // token을 쿠키 or 로컬 스토리지에 토큰 담기
        // 저장된 토큰 가져오기
        // 백엔드로 해당 토큰 header에 담아서 요청하기
        // 응답을 받으면 로컬에 유저 정보 저장
        // 유저 정보를 잘 받아왔으면 홈으로 이동시킴
      })
      .catch((error) => {
        console.log("error", error.response.msg);
      });
  },
  getPostDetail: async (postId) => {
    const response = await api.get(`http://15.164.163.50:8080/post/${postId}`);
    return response.data;
  },
  newPost: async (data) => {
    await api
      .post("/auth/post", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  editPost: async (postId, data) => {
    await api
      .patch(`/auth/post/${postId}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

const refreshAccessToken = async () => {
  const response = await axios.post("http://15.164.163.50:8080/member/reissue");
  const access_token = response.headers["authorization"];
  setCookie("access_token", access_token); // 이전 MpXU
  console.log("완료!!!!!!");
  window.location.reload();
};

const onLoginSuccess = (authorization, refreshToken) => {
  // console.log("access1", authorization);

  setCookie("access_token", authorization);
  setCookie("refresh_token", refreshToken);

  // axios.defaults.headers.common["authorization"] = authorization;
  // axios.defaults.headers.common["refresh-token"] = refreshToken;
};
