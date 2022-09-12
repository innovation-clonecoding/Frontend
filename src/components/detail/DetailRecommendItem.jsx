import React from 'react';
import styled from 'styled-components';

const DetailRecommendItem = () => {
  return (
    <StyledItemDiv>
    <StyledImg
      src="https://velog.velcdn.com/images/danchoi/post/d0e77ac1-d191-4ee5-8787-5e457f3445e6/image.jpeg"
      alt=""
    />
    <StyledTitle>리엑트로 클론코딩하기</StyledTitle>
  </StyledItemDiv>
  );
};

export default DetailRecommendItem;
const StyledItemDiv = styled.div`
  position: relative;
  width: 33.333%;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-bottom: 2rem;
`
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;
const StyledTitle = styled.div`
  height: 3rem;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0.5rem;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`