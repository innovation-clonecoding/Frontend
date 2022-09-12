import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useChange from "../../hooks/useChange";
import { useLocation } from "react-router-dom";
import {
  ParentBox,
  Box,
  H1,
  Description,
  Contents,
  Label,
  InputWrapper,
  Input,
  Button,
} from "./styles";
import { apis } from "api/api";

function Register() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [email, setEmail, onChangeEmail] = useInput();
  const [nickName, setNickName, onChangeNickName] = useInput();
  const [introduction, setIntroduction, onChangeIntroduction] = useInput();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 오류 메세지
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 상태 확인
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 커서 이벤트
  const [isFocusEmail, onChangeIsFocusEmail] = useChange();
  const [isFocusNickName, onChangeIsFocusNickName] = useChange();
  const [isFocusPassword, onChangeIsFocusPassword] = useChange();
  const [isFocusConfirm, onChangeIsFocusConfirm] = useChange();
  const [isFocusIntroduction, onChangeIsFocusIntroduction] = useChange();

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (!passwordRegex.test(passwordValue)) {
      setPasswordMessage("숫자+영문자 조합으로 8자리 이상 입력하세요");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전해요");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 일치 확인
  const doubleCheckPassword = (e) => {
    const passwordCheckValue = e.target.value;
    setPasswordConfirm(passwordCheckValue);
    if (password === passwordCheckValue) {
      // 현재 value로 받아와야 함
      setPasswordConfirmMessage("비밀번호가 일치해요");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 달라요!");
      setIsPasswordConfirm(false);
    }
  };

  let userData = {
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    nickname: nickName,
    introduction: introduction,
  };

  const onSubmit = () => {
    console.log("data", !introduction);
    if (!(email, password && passwordConfirm && nickName && introduction)) {
      alert("모두 입력하세요!");
    } else if (!(isPassword && isPasswordConfirm)) {
      alert("비밀번호를 다시 확인하세요.");
    } else {
      apis.signup(userData).then((res) => console.log("res", res.data));
      alert("회원가입이 완료!");
      navigate("/");
    }
  };

  useEffect(() => {
    setEmail(state);
  });

  return (
    <ParentBox>
      <Box>
        <H1>환영합니다!</H1>
        <Description>기본 회원 정보를 등록해주세요</Description>
        <Contents>
          {isFocusEmail ? (
            <Label fontColor="#20C997">이메일</Label>
          ) : (
            <Label>이메일</Label>
          )}
          <InputWrapper>
            <Input
              name="email"
              defaultValue={state}
              disabled
              onFocus={() => onChangeIsFocusEmail()}
              onBlur={() => onChangeIsFocusEmail()}
            />
          </InputWrapper>
        </Contents>
        <Contents>
          {isFocusNickName ? (
            <Label fontColor="#20C997">닉네임</Label>
          ) : (
            <Label>닉네임</Label>
          )}
          <InputWrapper>
            <Input
              placeholder="닉네임을 입력하세요"
              name="nickname"
              value={nickName}
              onChange={onChangeNickName}
              onFocus={() => onChangeIsFocusNickName()}
              onBlur={() => onChangeIsFocusNickName()}
            />
          </InputWrapper>
        </Contents>
        <Contents>
          {isFocusPassword ? (
            <Label fontColor="#20C997">비밀번호</Label>
          ) : (
            <Label>비밀번호</Label>
          )}
          <InputWrapper>
            <Input
              placeholder="비밀번호를 입력하세요"
              name="password"
              type="password"
              value={password}
              onChange={onChangePassword}
              onFocus={() => onChangeIsFocusPassword()}
              onBlur={() => onChangeIsFocusPassword()}
            />
          </InputWrapper>
          {isPassword ? (
            <div>{passwordMessage}</div>
          ) : (
            <div>{passwordMessage}</div>
          )}
        </Contents>
        <Contents>
          {isFocusConfirm ? (
            <Label fontColor="#20C997">비밀번호 확인</Label>
          ) : (
            <Label>비밀번호 확인</Label>
          )}
          <InputWrapper>
            <Input
              placeholder="비밀번호를 다시 입력하세요"
              name="passwordConfirm"
              value={passwordConfirm}
              type="password"
              onChange={doubleCheckPassword}
              onFocus={() => onChangeIsFocusConfirm()}
              onBlur={() => onChangeIsFocusConfirm()}
            />
          </InputWrapper>
          {isPasswordConfirm ? (
            <div>{passwordConfirmMessage}</div>
          ) : (
            <div>{passwordConfirmMessage}</div>
          )}
        </Contents>
        <Contents>
          {isFocusIntroduction ? (
            <Label fontColor="#20C997">한 줄 소개</Label>
          ) : (
            <Label>한 줄 소개</Label>
          )}
          <InputWrapper>
            <Input
              placeholder="당신을 한 줄로 소개해보세요"
              name="introduction"
              value={introduction}
              onChange={onChangeIntroduction}
              onFocus={() => onChangeIsFocusIntroduction()}
              onBlur={() => onChangeIsFocusIntroduction()}
            />
          </InputWrapper>
        </Contents>
        <div style={{ margin: "6rem 0px 0px 0px" }}></div>
        <Button
          backColor="#dee2e6"
          fontColor="#212529"
          hoverColor="#f1f3f5"
          onClick={() => navigate(`/`)}
        >
          취소
        </Button>
        <Button
          backColor="#12B886"
          fontColor="#FFFFFF"
          hoverColor="#20C997"
          // disabled={!(isPassword && isPasswordConfirm)}
          onClick={() => onSubmit()}
        >
          다음
        </Button>
      </Box>
    </ParentBox>
  );
}

export default Register;
