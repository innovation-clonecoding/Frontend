import { userApis } from "api/userApi";
import React, { useEffect } from "react";
import {
  Main,
  Container,
  SubContainer,
  BodyHead,
  BodyContent,
  LogoName,
  TextContent,
} from "./styles";

const Kakao = () => {
  const href = window.location.href;
  let params = new URL(document.URL).searchParams;
  let code = params.get("code");
  console.log("params", params);
  console.log("code1", code);

  useEffect(() => {
    userApis.kakaoLogin(code);
  }, []);

  return (
    <>
      <Container>
        <SubContainer>
          <BodyHead>
            <img
              src="https://velog.velcdn.com/images/velog/profile/9aa07f66-5fcd-41f4-84f2-91d73afcec28/green%20favicon.png"
              width="50"
              height="50"
            />
            <LogoName>velog</LogoName>
          </BodyHead>
          <BodyContent>
            <TextContent>로그인 처리중입니다! 잠시만 기다려주세요</TextContent>
          </BodyContent>
        </SubContainer>
      </Container>
    </>
  );
};

export default Kakao;
