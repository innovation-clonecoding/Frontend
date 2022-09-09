import React from "react";
import { ChildContainer, Input, Button, LoginButton } from "../modal/styles";

function Login() {
  return (
    <>
      <Input width="345px" placeholder="이메일을 입력하세요" />
      <Input width="345px" placeholder="비밀번호를 입력하세요" />
      <LoginButton>로그인</LoginButton>
    </>
  );
}

export default Login;
