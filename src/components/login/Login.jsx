import React from "react";
import { userApis } from "api/userApi";
import useInput from "hooks/useInput";
import { Input, LoginButton } from "../modal/styles";

function Login({ show, modalHandler }) {
  const [email, setEmail, onChangeEmail] = useInput();
  const [password, setPassword, onChangePassword] = useInput();

  const onSubmit = () => {
    if (!(email, password)) {
      alert("이메일, 비밀번호를 입력하세요!");
    } else {
      userApis
        .signin(email, password)
        .then((res) => {
          if (res.msg === "로그인 되었습니다.") {
            alert("로그인 완료!");
            window.location.reload();
          }
        })
        .catch((error) => {
          if (error.response.data.msg === "비밀번호가 일치하지 않습니다.") {
            alert("비밀번호가 일치하지 않습니다.");
          } else {
            alert("존재하지 않는 이메일 입니다.");
          }
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
