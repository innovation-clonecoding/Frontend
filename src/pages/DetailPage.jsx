import DetailAccount from 'components/detail/DetailAccount';
import DetailComment from 'components/detail/DetailComment';
import DetailContent from 'components/detail/DetailContent';
import DetailRecommend from 'components/detail/DetailRecommend';
import DetailTitle from 'components/detail/DetailTitle';
import styled from 'styled-components';
import React from 'react';

const DetailPage = () => {
  return (
    <StyledDiv>
      <DetailTitle/>
      <DetailContent/>
      <DetailAccount/>
      <DetailRecommend/>
      <DetailComment/>
    </StyledDiv>
  );
};

export default DetailPage;

const StyledDiv = styled.div`
  margin: 20px 40px;
  border: 1px solid black;
  height: 95vh;
`