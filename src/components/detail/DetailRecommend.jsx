import React from "react";
import styled from "styled-components";
import DetailRecommendItem from "./DetailRecommendItem";

const DetailRecommend = () => {
  return (
    <StyledDiv>
      <StyledTitle>관심 있을 만한 포스트</StyledTitle>
      <StyledItemsDiv>
        <DetailRecommendItem />
        <DetailRecommendItem />
        <DetailRecommendItem />
        <DetailRecommendItem />
        <DetailRecommendItem />
        <DetailRecommendItem />
      </StyledItemsDiv>
    </StyledDiv>
  );
};

export default DetailRecommend;

const StyledDiv = styled.div`
margin: 5rem 0;
`;

const StyledTitle = styled.h4`
  font-size: 1.125rem;
`;
const StyledItemsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
