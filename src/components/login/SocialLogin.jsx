import React, { useEffect } from "react";
import { ChildContainer, Image } from "../modal/styles";
import axios from "axios";

function SocialLogin() {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/oauth";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("code", code);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`api/code=${code}`);
        console.log("Rr", res);
        // const token = res.headers.authorization;
        // window.localStorage.setItem("token", token);
        // navigate("/main");
      } catch (e) {
        console.error(e);
        // navigate("/main");
      }
    })();
  }, []);

  return (
    <ChildContainer margin={"1.5rem"}>
      <Image src={process.env.PUBLIC_URL + "./assets/github.png"} />
      <a href={KAKAO_AUTH_URI}>
        <Image src={process.env.PUBLIC_URL + "./assets/kakao.png"} />
      </a>
    </ChildContainer>
  );
}

export default SocialLogin;
