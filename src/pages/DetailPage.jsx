import DetailAccount from "components/detail/DetailAccount";
import DetailComment from "components/detail/DetailComment";
import DetailContent from "components/detail/DetailContent";
import DetailRecommend from "components/detail/DetailRecommend";
import DetailTitle from "components/detail/DetailTitle";
import styled from "styled-components";
import React from "react";
import NavBar from "components/navbar/NavBar";
import DetailFixedButton from "components/detail/DetailFixedButton";

const DetailPage = () => {
  return (
    <>
      <NavBar />
      <StyledDiv>
      <DetailFixedButton />
      <StyledInnerDiv>
        <DetailTitle />
        <DetailContent />
        <DetailAccount />
        <DetailRecommend />
        <DetailComment />
      </StyledInnerDiv>
      </StyledDiv>
    </>
  );
};

export default DetailPage;

const StyledInnerDiv = styled.div`
  width: 768px;
margin: 5rem auto 0px;
  height: 95vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
  

const StyledDiv = styled.div`

`
