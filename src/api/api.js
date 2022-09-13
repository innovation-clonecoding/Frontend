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
  kakaoLogin: (code) => {
    /* 토큰이 없을 경우 -> 즉 소셜 로그인 처음하는 회원 */
    // 백엔드 주소 뒤에 인가코드 붙여서 보내야 함
    api
      .get(`/member/login/kakao?code=${code}`)
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
  // Post
  getPost: () => api.get("post"),

  // Comment
  getComment: () => api.get("comment"),
};
