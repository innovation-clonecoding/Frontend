import React from "react";
import { ChildContainer, Image } from "../modal/styles";
import { KAKAO_AUTH_URI } from "./kakao/OAuth";

function SocialLogin() {
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
