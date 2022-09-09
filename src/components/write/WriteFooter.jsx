import React from "react";
import styled from "styled-components";
import { MdOutlineArrowBack } from "react-icons/md";

const WriteFooter = () => {
  return (
    <StyledDiv>
      <StyledButton color="black" bg="white">
        <MdOutlineArrowBack size="25px" />
        나가기
      </StyledButton>
      <StyledInnerDiv>
        <StyledButton bg="white" color="#14B886">
          임시저장
        </StyledButton>
        <StyledButton hover="#21C997">출간하기</StyledButton>
      </StyledInnerDiv>
    </StyledDiv>
  );
};

export default WriteFooter;
const StyledDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  height: 80px;
  font-size: 28px;
  position: relative;
  box-shadow: 0 0 8px rgb(0 0 0 / 20%);
`;
const StyledInnerDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const StyledButton = styled.button`
  margin: 20px;
  cursor: pointer;
  background-color: ${(props) => props.bg || "#14B886"};
  color: ${(props) => props.color || "white"};
  font-size: 23px;
  font-weight: 500;
  width: 125px;
  height: 55px;
  border: none;
  border-radius: 6px;
  &:hover {
    background-color: ${(props) => props.hover || "#F4F4F4"};
  }
`;