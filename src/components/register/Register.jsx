import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useChange from "../../hooks/useChange";
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

function Register() {
  const navigate = useNavigate();

  const [email, setEmail, onChangeEmail] = useInput();
  const [password, setPassword, onChangePassword] = useInput();
  const [passwordConfirm, setPasswordConfirm, onChangePasswordConfirm] =
    useInput();
  const [nickName, setNickName, onChangeNickName] = useInput();
  const [introduction, setIntroduction, onChangeIntroduction] = useInput();

  // 오류 메세지
  const [passwordMsg, setPasswordMsg] = useState();
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState();

  const form = [
    {
      id: 1,
      title: "이메일",
      content: "이메일을 입력하세요",
      field: "email",
      value: email,
      onChange: onChangeEmail,
    },
    {
      id: 2,
      title: "닉네임",
      content: "닉네임 입력하세요",
      field: "nickname",
      value: nickName,
      onChange: onChangeNickName,
    },
    {
      id: 3,
      title: "비밀번호",
      content: "비밀번호를 다시 입력하세요",
      field: "password",
      value: password,
      onChange: onChangePassword,
    },
    {
      id: 4,
      title: "비밀번호 확인",
      content: "비밀번호를 다시 입력하세요",
      field: "passwordConfirm",
      value: passwordConfirm,
      onChange: onChangePasswordConfirm,
    },
    {
      id: 5,
      title: "한 줄 소개",
      content: "당신을 한 줄로 소개해보세요",
      field: "introduction",
      value: introduction,
      onChange: onChangeIntroduction,
    },
  ];
  console.log("pw", password);
  console.log("pws", passwordConfirm);

  const doubleCheck = () => {
    console.log("ZZ", password !== passwordConfirm);
    password === passwordConfirm ? (
      <></>
    ) : (
      setPasswordMsg("비밀번호가 다릅니다.")
    );
  };

  useEffect(() => {
    doubleCheck();
  });

  return (
    <ParentBox>
      <Box>
        <H1>환영합니다!</H1>
        <Description>기본 회원 정보를 등록해주세요</Description>
        {form.map((item) => (
          <RegisterComponent
            key={item.id}
            labels={item.title}
            placeHorders={item.content}
            field={item.field}
            value={item.value}
            onChange={item.onChange}
          />
        ))}
        <div style={{ margin: "6rem 0px 0px 0px" }}></div>
        <Button
          backColor="#dee2e6"
          fontColor="#212529"
          hoverColor="#f1f3f5"
          onClick={() => navigate(`/`)}
        >
          취소
        </Button>
        <Button backColor="#12B886" fontColor="#FFFFFF" hoverColor="#20C997">
          다음
        </Button>
      </Box>
    </ParentBox>
  );
}

function RegisterComponent({ labels, placeHorders, field, value, onChange }) {
  const [isFocus, onChangeIsFocus] = useChange();

  useEffect(() => {}, [isFocus]);

  return (
    <div>
      <Contents>
        {isFocus ? (
          <Label fontColor="#20C997">{labels}</Label>
        ) : (
          <Label>{labels}</Label>
        )}
        <InputWrapper>
          <Input
            placeholder={placeHorders}
            name={field}
            value={value}
            onChange={onChange}
            onFocus={() => onChangeIsFocus()}
            onBlur={() => onChangeIsFocus()}
          />
        </InputWrapper>
      </Contents>
    </div>
  );
}

export default Register;
