import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import useInput from "hooks/useInput";
import useChange from "../../hooks/useChange";
import Login from "../login/Login";
import { __doubleCheck } from "redux/modules/users";
import { apis } from "api/api";
import {
  Background,
  ModalBox,
  LeftContainer,
  WihteBox,
  ExitBox,
  Container,
  ParentContainer,
  Footer,
  Span,
  ChildContainer,
  Input,
  Button,
  Image,
  ExitImg,
  WelcomText,
  ExitContainer,
  LinkText,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Modal({ show, modalHandler }) {
  const navigate = useNavigate();
  const [isChange, onChangeHandler] = useChange();
  const [email, setEmail, onChangeEmail] = useInput();

  const doubleCheckEmail = () => {
    if (!email) {
      alert("이메일을 입력하세요!");
    } else {
      apis.doubleCheck(email).then((res) => {
        if (res.data !== null) {
          navigate(`/register`, { state: res.data.email });
        }
      });
    }
  };

  useEffect(() => {}, [isChange]);
  return ReactDom.createPortal(
    <Background>
      <ModalBox>
        <LeftContainer>
          <img
            src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
            width="100%"
            height="auto"
            style={{ display: "block" }}
          />
          <WelcomText>환영합니다!</WelcomText>
        </LeftContainer>
        <WihteBox>
          <ExitBox>
            {" "}
            <ExitImg
              src={process.env.PUBLIC_URL + "./assets/exit.png"}
              onClick={modalHandler}
            />
          </ExitBox>
          <Container>
            <ParentContainer>
              <Span fontSize="20px">{isChange ? "회원가입" : "로그인"}</Span>
              <Span fontSize="15px" fontColor="#9e9e9e">
                이메일로 {isChange ? "회원가입" : "로그인"}
              </Span>
              {isChange ? (
                <ChildContainer margin={"15px 0px 10px 0px"} display="flex">
                  <Input
                    width="250px"
                    placeholder="이메일을 입력하세요"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                  <Button onClick={() => doubleCheckEmail()}>로그인</Button>
                </ChildContainer>
              ) : (
                <Login show={show} modalHandler={modalHandler} />
              )}

              <Span fontSize="15px" fontColor="#9e9e9e">
                소셜 계정으로 {isChange ? "회원가입" : "로그인"}
              </Span>
              <ChildContainer margin={"1.5rem"}>
                <Image src={process.env.PUBLIC_URL + "./assets/github.png"} />
                <Image src={process.env.PUBLIC_URL + "./assets/google.png"} />
                <Image src={process.env.PUBLIC_URL + "./assets/facebook.png"} />
              </ChildContainer>
            </ParentContainer>
            <Footer>
              <span>아직 회원이 아니신가요?</span>
              <LinkText onClick={() => onChangeHandler()}>
                {isChange ? "로그인" : "회원가입"}
              </LinkText>
            </Footer>
          </Container>
        </WihteBox>
      </ModalBox>
    </Background>,
    document.getElementById("modal")
  );
}

export default Modal;
