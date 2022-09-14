import React, { useEffect } from "react";
import styled from "styled-components";
import { BsShareFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { __getLikes } from "redux/modules/likes";

const DetailFixedButton = ({ like, postId, onLikesClick }) => {
  const [alert, setAlert] = useState(false);
  const isLike = localStorage.getItem(`isLike-${postId}`);

  const copyLink = (e) => {
    const like = window.location.href;
    console.log(like);
    // e.clipboardData.setData("text", like)
    navigator.clipboard.writeText(like);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2500);
  };

  return (
    <>
      {alert && <StyledAlert>링크가 복사되었습니다.</StyledAlert>}
      <StyledDiv>
        <StyledIcon>
          <FaHeart
            onClick={() => onLikesClick()}
            color={isLike === "true" ? "green" : null}
          />
        </StyledIcon>
        <StyledLikeNum>{like}</StyledLikeNum>
        <StyledIcon>
          <BsShareFill
            onClick={(e) => {
              copyLink(e);
            }}
          />
        </StyledIcon>
      </StyledDiv>
    </>
  );
};

export default DetailFixedButton;

const StyledDiv = styled.div`
  background-color: #f8f9fa;
  position: fixed;
  top: 112px;
  width: 64px;
  height: 150px;
  border: 1px solid #f0f3f5;
  border-radius: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  left: 1%;
`;
const StyledIcon = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid #dee2e5;
  border-radius: 1.5rem;
  background-color: white;
  cursor: pointer;
  color: #858e96;
  z-index: 5;
  &:hover {
    color: black;
    border: 1px solid black;
  }
`;
const StyledLikeNum = styled.div`
  margin-top: 0.5rem;
  line-height: 1;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #51575d;
`;
const StyledAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  height: 80px;
  color: white;
  background-color: #05bc0c;
`;
