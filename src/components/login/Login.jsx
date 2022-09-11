import { apis } from "api/api";
import useInput from "hooks/useInput";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChildContainer, Input, Button, LoginButton } from "../modal/styles";

function Login({ show, modalHandler }) {
  const navigate = useNavigate();
  const [email, setEmail, onChangeEmail] = useInput();
  const [password, setPassword, onChangePassword] = useInput();

  const onSubmit = () => {
    if (!(email, password)) {
      alert("이메일, 비밀번호를 입력하세요!");
    } else {
      // 백엔드 연동시 에러 처리 필요
      apis.signin(email, password).then((res) => {
        // 로그인 성공시
        if (res.data !== null) {
          alert("로그인 완료!");
          return modalHandler();
        }
        // 로그인 실패 (이메일 존재 여부)
        // 로그인 실패 (비밀번호 일치 여부)
      });
    }
  };

  return (
    <>
      <Input
        width="345px"
        placeholder="이메일을 입력하세요"
        name="email"
        value={email}
        onChange={onChangeEmail}
      />
      <Input
        width="345px"
        placeholder="비밀번호를 입력하세요"
        type="password"
        name="password"
        value={password}
        onChange={onChangePassword}
      />
      <LoginButton onClick={() => onSubmit()}>로그인</LoginButton>
    </>
  );
}

export default Login;
