import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsShareFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { userApis } from "api/userApi";

const DetailFixedButton = ({ likesNum, postId }) => {
  //likesNum 값 받아서 useState에 반영
  const likesNumTest = 2; // likesNum 값 받아오면 이부분 삭제 (테스트 용도)
  const [like, setLike] = useState(likesNumTest);
  const [isLike, setIsLike] = useState(false);

  const onLikesClick = () => {
    const data = {
      postId: 6, // postId 가져와서 넣기
    };
    userApis.likes(data).then((res) => {
      const str = String(res.msg);
      if (str.includes("완료") === true) {
        setLike(like + 1);
        setIsLike(true);
      } else {
        setLike(like - 1);
        setIsLike(false);
      }
    });
  };

  return (
    <StyledDiv>
      <StyledIcon>
        <FaHeart
          onClick={() => onLikesClick()}
          color={isLike ? "green" : null}
        />
      </StyledIcon>
      <StyledLikeNum>{like}</StyledLikeNum>
      <StyledIcon>
        <BsShareFill />
      </StyledIcon>
    </StyledDiv>
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
