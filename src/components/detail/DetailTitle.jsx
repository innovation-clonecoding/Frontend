import React, { useState } from "react";
import styled from "styled-components";
import DetailTags from "./DetailTags";

const DetailTitle = ({title, nickname, date, tag}) => {
  //로그인 상태에 따른 버튼 변화
  const [isAuthorized, setIsAuthorized] = useState(true);
  return (
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      <StyledNameDateLikeDiv>
        <StyledNameDateDiv>
          <StyledNameDate>{nickname}</StyledNameDate>
          <div>·</div>
          <StyledNameDate margin="auto 10px">{date}</StyledNameDate>
        </StyledNameDateDiv>
        {isAuthorized ? (
          <div>
            <StyledLikeButton>통계</StyledLikeButton>
            <StyledLikeButton>수정</StyledLikeButton>
            <StyledLikeButton>삭제</StyledLikeButton>
          </div>
        ) : null}
      </StyledNameDateLikeDiv>
      <StyledTagDiv>
        {tag?.map((tag, idx)=>(
          <DetailTags key={idx} tag={tag}/>
        ))}
      </StyledTagDiv>
    </StyledDiv>
  );
};

export default DetailTitle;

const StyledDiv = styled.div`
`;
const StyledTitle = styled.div`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0;
  word-break: keep-all;
  font-weight: 600;
  width: 768px;
  height: 72px;
`;
const StyledNameDate = styled.div`
  margin: ${(props) => props.margin || "auto 10px 0 0"};
`;
const StyledNameDateDiv = styled.div`
  display: flex;
`;
const StyledNameDateLikeDiv = styled.div`
  width: 768px;
  height: 20.5px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
`;
const StyledLikeButton = styled.button`
  margin: auto 10px;
`;
const StyledTagDiv = styled.div`
  margin-bottom: 30px;
`